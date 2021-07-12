import * as Babel from '@babel/standalone';

export default async () => {
  const [htmlCode, jsCode, cssCode] = await Promise.all([
    import('!raw-loader!./index.html'),
    import('!raw-loader!./script.js'),
    import('!raw-loader!./style.css'),
    import('!raw-loader!./lfConfig.js'),
  ]);

  return {
    javascript: {
      code: jsCode,
      transformer: 'javascript',
      visible: true,
    },
    config: {
      code: jsCode,
      transformer: 'config',
      visible: true,
    },
    html: {
      code: htmlCode,
      transformer: 'html',
      visible: true,
    },
    css: {
      code: cssCode,
      transformer: 'css',
      visible: true,
    },
    foldBoxes: ['html'],
    packages: {
      js: [
        'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
        'https://unpkg.com/@logicflow/core@0.4.14/dist/logic-flow.js',
        'https://unpkg.com/@logicflow/extension@0.4.14/cjs/index.js'
      ],
      css: [
        'https://unpkg.com/@logicflow/core@0.4.14/dist/style/index.css',
      ],
    }
  }
}