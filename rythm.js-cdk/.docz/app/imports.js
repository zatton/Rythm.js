export const imports = {
  'src/components/boxes/boxes.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-boxes-boxes" */ 'src/components/boxes/boxes.mdx'
    ),
  'src/components/buttons/buttons.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-buttons-buttons" */ 'src/components/buttons/buttons.mdx'
    ),
  'src/components/layout/layout.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-layout-layout" */ 'src/components/layout/layout.mdx'
    ),
}
