export const imports = {
  'src/components/buttons/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-buttons-button-button" */ 'src/components/buttons/Button/Button.mdx'),
}
