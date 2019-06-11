/**
 * If you're not familiar with webpack configuration, please refer to this doc: https://webpack.js.org/configuration/
 *
 * Basics:
 * - Webpack configuration defines rules applying to specific types of file (.js, .scss, etc...).
 * - A rule can use one or more loaders to describe how a file should be loaded when required in an import statement.
 * - A loader can have options.
 *
 * The following functions provide utilities to find and customize these rules, loaders and options.
 */

const path = require('path')
const getWorkspaces = require('get-yarn-workspaces')
/**
 * Returns the create-react-app rules defining the webpack loaders.
 * @param config The webpack configuration
 * @return {Object} The rule defining the webpack loaders
 */
const findLoaderRules = config =>
  // find for the rule containing a "oneOf" array and return it
  config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf

/**
 * Given an array of rules, returns the first one to define the specified loader.
 * @param rules The webpack rules
 * @param loaderName The loader name
 * @return {Object|undefined} The rule if it exists
 */
const findRule = (rules, loaderName) =>
  rules.find(rule =>
    // if rule has a loader prop
    rule.loader
      ? // check if it matches the loader name
        matchLoader(rule.loader, loaderName)
      : // otherwise search for the loader in rule.use
      findLoader(rule, loaderName)
      ? rule
      : undefined
  )

/**
 * Given a rule, returns a specified loader used by this rule according to the loader name.
 * @param rule The webpack rule
 * @param loaderName The loader name
 * @return {Object|undefined} The loader if it exists
 */
const findLoader = (rule, loaderName) =>
  // if use is an array
  Array.isArray(rule.use)
    ? // find for an object with a loader prop including the loader name
      rule.use.find(({ loader }) => matchLoader(loader, loaderName))
    : // otherwise return nothing
      undefined

/**
 * Checks if a loader matches the given loader name.
 * @param loader The webpack loader (contains the path to its main js file)
 * @param loaderName The loader name
 * @return {Boolean} true if it matches, false otherwise
 */
const matchLoader = (loader, loaderName) =>
  !!loader && loader.includes(`${path.sep}${loaderName}-loader${path.sep}`)

/**
 * Makes a webpack rule include the local workspaces listed in the dependencies of the currently rewired project.
 * @param rule The webpack rule
 */
const includeWorkspaceDependencies = rule => {
  const workspaces = getWorkspaces().reduce(
    // build a map of the workspaces absolute source path indexed by the workspace name
    // e.g. { 'labguard-rewired': '/path/to/labguard-rewired/src' }
    (workspaces, workspace) => ({
      ...workspaces,
      [workspace.substr(workspace.lastIndexOf('/') + 1)]: path.join(
        workspace,
        'src'
      ),
    }),
    {}
  )

  // always use an array for the rule include
  if (!Array.isArray(rule.include)) {
    rule.include = [rule.include]
  }

  // for each workspace to which the webpack rule apply
  rule.include.forEach(workspace => {
    // retrieve the dependencies of this workspace
    const dependencies = Object.keys(
      require(path.join(workspace, '..', 'package.json'))['dependencies']
    )
    dependencies.push('rythm.js-cdk')
    // iterate over every workspace of the labguard-react project
    Object.entries(workspaces).forEach(([name, path]) => {
      // if it is part of the current workspace dependencies
      if (dependencies.includes(name)) {
        // then add it to rule.include in order to also apply the rule to the dependency
        rule.include = rule.include.concat(path)
      }
    })
  })
}
module.exports = function override(config, env) {
  //do stuff with the webpack config...

  const rules = findLoaderRules(config)

  // find rule for babel
  const rule = findRule(rules, 'babel')

  // include local dependencies in the babel rule
  includeWorkspaceDependencies(rule)

  return config
}
