const path = require('path');

export default {
  title: 'Yeoubi UI',
  typescript: true,
  menu: [
    'Yeoubi UI',
    'Core',
  ],
  themeConfig: {
    showPlaygroundEditor: true,
    colors: {
      primary: '#4169E1',
    },
  },
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
