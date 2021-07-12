const LogicFlow = window.LogicFlow;
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    lf: '',
  },
  mounted () {
    this.$_initLF();
  },
  methods: {
    $_initLF () {
      const config = {
        background: {
          color: '#f7f9ff'
        },
        grid: {
          size: 10,
            visible: false
        },
        keyboard: {
          enabled: true
        },
        style: {
          rect: {
            radius: 6,
          },
          edgeText: { // 边文本样式
            background: {
              fill: '#fff'
            }
          },
        },
    }
    const lf = new LogicFlow({ ...this.config, container: document.querySelector('#LF'), });
    this.lf = lf;
    const data = {
      // 节点
      nodes: [
        {
          id: 50,
          type: 'rect',
          x: 100,
          y: 150,
          text: '你好',
        },
        {
          id: 21,
          type: 'circle',
          x: 300,
          y: 150,
        },
      ],
      // 边
      edges: [
        {
          type: 'polyline',
          sourceNodeId: 50,
          targetNodeId: 21,
        },
      ],
    };
    this.lf.render(data)
  }
}
});