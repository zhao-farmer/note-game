import { defineConfig } from 'vitepress'

import fancyboxSet from './theme/fancybox-set.mjs'

import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({

  // markdown 设置
  markdown: {
      // 开启数学公式
      math: true,
      // 图片点击可以放大
      config: (md) => {
        md.use(fancyboxSet)
      }

  },


  // 应用配置信息
  lang:'zh-cn',
  title: "赵建辉的游戏知识库",
  description: "包含策划，程序，设计，运营等方面的游戏开发知识",

  // markdown所在目录
  // srcDir: './src',
  base:'/note-game',

  // 主题配置
  themeConfig: {
    // 标题栏
    nav: [
      {
        text: "创意与策划",
        items: [
          {
            text: "游戏设计",
            link: "/markdown/creativity/design/",
          },
          {
            text: "日常点子记录",
            link: "/markdown/creativity/idea/",
          },
        ], 
      },
      {
        text: "美术设计",
        items: [
          {
            text: "2D游戏记录",
            items: [
              {
                text: "2D画图工具",
                link: "/markdown/art2d/tool/",
              },
              {
                text: "2d建模",
                link: "/markdown/art2d/modeling/",
              },
            ],
          },
          {
            text: "3D美术工具",
            items: [
              {
                text: "3D建模工具",
                link: "/markdown/art3d/modeling/",
              },
              {
                text: "3D动画工具",
                link: "/markdown/art3d/animation/",
              },
            ],
          }
        ], 
      },
      {
        text: "音频与声效",
        items: [
          {
            text: "音频编辑工具",
            link: "/markdown/audio/tool/",
          },
          {
            text: "AI音频工具",
            link: "/markdown/audio/ai/",
          },
        ], 
      },
      {
        text: "程序开发",
        items: [
          {
            text: "cocos Creator",
            link: "/markdown/software/cocos/",
          },
          {
            text: "godot引擎",
            link: "/markdown/software/godot/",
          },
          {
            text: "unity引擎",
            link: "/markdown/software/unity/",
          },
          {
            text: "UE5",
            link: "/markdown/software/ue5/",
          },
        ], 
      },
      {
        text: "运营与发行",
        items: [
          {
            text: "发布平台",
            link: "/markdown/operation/platform/",
          },
          {
            text: "数据分析与改进",
            link: "/markdown/operation/data/",
          },
        ], 
      },
      {
        text: "游戏其他",
        items: [
          {
            text: "开发工具的选择",
            link: "/markdown/other/tool/",
          },
        ], 
      },
      
    ],

    // 侧边栏
    sidebar: {

        //============================ cocos开发 ==============================
        '/markdown/software/cocos/': [
          {
            text: '软件使用',
            items: [
              {text:'一、复习typescript',link:'/markdown/software/cocos/base/01.md'},
              {text:'二、cocos creator 基础',link:'/markdown/software/cocos/base/02.md'},
              {text:'三、cocos creator 进阶',link:'/markdown/software/cocos/base/03.md'},
              {text:'四、UI组件',link:'/markdown/software/cocos/base/04.md'},
              {text:'五、网络与数据',link:'/markdown/software/cocos/base/05.md'},
              {text:'六、其他',link:'/markdown/software/cocos/base/06.md'},
            ],
          },
          {
            text: '日常记录',
            items: [
              {text:'一、快速入门',link:'/markdown/model/network/modelscope/01.md'},
            ],
          },
          
       ],
    },

    // 右边目录是否关闭
    aside:true,
    // 右边目录配置
    outline:{
      level:[2,4],
      label:'目录'
    },
    


  }
})
