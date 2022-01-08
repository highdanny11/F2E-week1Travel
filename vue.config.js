module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      const [obj] = args;
      obj.title = '台灣旅遊網';
      obj.meta = {
        keywords: '台灣旅遊',
        description: ' 從旅行中認識自己，放慢生活的節奏，享受此時此刻。'
      };
      obj.icon = 'group 5.ico';
      return args;
    });
  }
}