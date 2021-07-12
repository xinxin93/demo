module.exports = {
  devServer: {
    port: 3000, //配置开发服务器的端口号，默认值3000
  },
  output: {
    dir: 'dist', // 配置构建部署时输出的目录，默认dist目录
    publicUrl: '/', // 配置构建输出的资源根目录，默认是'/'
  },
  themeFile: 'demos/theme.scss', // 如果有自定义主题的话，配置自定义主题的文件名，支持SASS
  staticFolder: 'static', // 配置静态资源文件路径，默认为 static
  demoList: '.demoList.json', // demoList配置文件的文件名，默认为.demoList.json
  name: 'Logic Flow Demo', // 配置Playground的标题
  version: '',  // 配置Playground的版本号信息
  homePage: 'http://logic-flow.org/', // 配置Playground链接跳转的主页
  logo: '', // 配置Playground的LOGO，如果配置了LOGO，标题就不显示
  boxTheme: 'monokai',  // 配置代码编辑器的主题
  // 可选主题: active4d, allHallowsEve, amy, blackboard, brillianceBlack,
  // brillianceDull, chromeDevtools, cloudsMidnight, clouds, cobalt,
  // dawn, dreamweaver, eiffel, espressoLibre, github, idle, katzenmilch,
  // kuroirTheme, lazy, magicwbAmiga, merbivoreSoft, merbivore, monokai,
  // pastelsOnDark, slushAndPoppies, solarizedDark, solarizedLight,
  // spacecadet, sunburst, textmateMacClassic, tomorrowNightBlue,
  // tomorrowNightBright, tomorrowNightEighties, tomorrowNight, tomorrow,
  // twilight, vibrantInk, zenburnesque, iplastic, idlefingers, krtheme,
  // monoindustrial,
  globalPackages: { // 配置需要加载的 JS、CSS 库
    js: [
      '//lib.baomitu.com/babel-polyfill/7.0.0-beta.44/polyfill.min.js',
    ],
    css: [],
  },
  // tab waterfall
  editorViewMode: 'tab',  // 配置代码块的UI展示方式，现在支持tab和waterfall两种展示方式
  editorLayout: 'normal',  // 配置画布与代码的位置关系，支持normal和reverse两种配置
};