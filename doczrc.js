const path = require('path');

export default {
  title: 'Yeoubi UI',
  typescript: true,
  menu: [
    'Yeoubi UI',
    {
      name: 'Components',
      menu: [
        'Size',
        'Space',
        'Heading',
        'Body',
        'Box',
        'Flex',
        'Image',
        'Button',
        'Input',
      ],
    },
  ],
  themeConfig: {
    showPlaygroundEditor: true,
    colors: {
      primary: '#4169E1',
    },
  },
  wrapper: 'docs/Wrapper',
  modifyBundlerConfig: config => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@yeoubi/ui': path.resolve('./src'),
      },
    },
  }),
  filterComponents: files => files.filter(p => p.match(/ts[x]?$/)),
};
