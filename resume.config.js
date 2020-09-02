module.exports = {
  //个人介绍配置项
  introduce: "本人从事前端开发工作3年，主要技术栈为Vue全家桶、JQuery等，对React、TypeScript也有一定的了解，有过大型Vue项目开发经验，熟悉webpack、gulp等前端自动化构建工具。曾主导过项目开发，有带领团队开发产品经验，热爱前端开发，注重团队协作。",
  //技能配置项
  technologies:[
    "熟悉HTML、CSS、JavaScript技术，掌握ES6语法",
    "熟悉Vue框架，掌握Vue全家桶的技术",
    "了解ElementUI、layUI、Ant Design等UI库的使用，能熟练应用到项目中实现快速开发",
    "善于数据可视化开发，有echarts.js, AntV开发经验，",
    "具备前端性能优化经验，能够结合实际场景，分析、解决具体问题",
    "了解Java、node.js，熟悉Oracle等数据库的使用，具有服务端开发经验",
    "掌握Linux、Git基本命令，对Nginx有一定了解",
    "了解uni-app、rax.js等多端应用开发框架",
    "熟悉敏捷开发流程，具备制定并推广可执行的前端代码开发规范的实际经验。"
  ],
  //技术工具配置项
  tools:[
    "熟练使用webStorm、VSCode等主流IDE进行开发工作",
    "熟练使用webpack、gulp前端自动化构建工具及Git版本管理工具",
  ],
  // 教育经历配置项
  educations: [
    {
      companyName: "上海大学",
      position: "电子信息工程",
      dateRanges: "2014.9-2017.6",
      explain:""
    },
    {
      companyName: "上海大学",
      position: "通信工程-保研",
      dateRanges: "2010.9-2014.6",
      explain:""
    },
  ],
  //工作经历配置项
  experiences: [
    {
      companyName: "中国平安人寿",
      position: "Web前端开发工程师",
      dateRanges: "2017.07-至今",
      explain: "任职于平安人寿上海分公司，担任前端开发工程师一职，主要职责包含寿险新渠道的电销业务核心销售系统的开发开发及维护、前端代码的版本管理、前端需求的设计、前端团队的基础技术建设和工具搭建等工作。"
    },
    {
      companyName: "阅文集团-实习",
      position: "Web开发工程师 ",
      dateRanges: "2016.05-2017.01 ",
      explain: "实习于阅文集团PC平台开发部，经历起点中文网前后端重构过程，负责web前端开发工作。在此期间，我参与了起点中文网服务端业务的重构工作，包括对原有的书架功能进行优化改造。"
    }
  ],
  //项目经验配置项
  project: [
    {
      projectNum: "项目一",
      projectName: "客户关系管理系统-OCMS",
      projectType: "PC项目",
      projectDesc: "该系统是平安人寿的电销业务核心销售系统，目前有1W多坐席使用量，完成包括客户名单、任务管理、软电话功能，以及角色权限管理、数据报表分析等模块。",
      skillDesc: "担任前端系统负责人，从零开始搭建系统，采用Vue+ElementUI技术栈,对原系统进行重构，简化开发流程，简化业务流程，使坐席操作更流畅、更便捷。",
      responsibilityDesc: [
        "1.	作为平台的主要开发人员，参与平台的版本迭代开发工作，负责客户信息展示模块、保单模块以及软电话模块的设计与开发，并推动前端组件化，业务模块化；",
        "2.参与系统的版本发布，实现自动化流水线部署、前端灰度发布方案，确保系统的成功升级并及时响应运维人员修复系统漏洞；",
        "3.担当敏捷开发中的Scrum Master角色，对公司知识库进行贡献，通过code review、结对编程、技术月刊等形式来提升团队人员的技术水平。"
      ]
    },
    {
      projectNum: "项目二",
      projectName: "前端埋点系统-PAMonitor",
      projectType: "SDK",
      projectDesc: "为了能够定量追踪系统功能的使用率以及客户接触过程中的转换效率，开发Web JS SDK，实现Web端的全埋点、代码埋点、异常监控上报功能，并通过可视化系统展示、分析业务数据。",
      skillDesc: "此项目基于gulp构建，采用原生JS编写，通过对浏览器API的继承实现对浏览器事件的监听，完成埋点数据的采集、上报功能。",
      responsibilityDesc: [
        "1.在调研国内外商业化埋点平台的功能和技术方案基础上，结合自身业务需求，实现全埋点、代码埋点结合的埋点采集方案；",
        "2.完成埋点采集数据的字段设计，完成埋点SDK中的主要功能代码（包括对象初始化、以gif方式发送数据等功能）的开发；",
        "3.负责埋点数据可视化大屏系统的搭建和开发，使用Vue.js+Echarts技术栈，实现埋点数据的表格、卡片以及图表（折线图、柱状图、地图等）化展示。"
      ],
    },
    {
      projectNum: "项目三",
      projectName: "接口测试管理平台-YApi",
      projectType: "Nodejs项目",
      projectDesc: "此项目是为了解决开发过程中需求文档、设计文档、接口文档的不同步以及接口mock、调试工具不完善等问题，开发了一个优雅、统一的可视化接口以及文档管理平台，基于Json5和Mockjs定义接口返回数据的结构和文档，效率提升多倍。",
      skillDesc: "此项目服务端采用koa+MongoDB,客户端采用React+Ant design进行项目开发，并可通过yapi-cli实现Docker容器化部署。",
      responsibilityDesc: [
        "1.作为系统的主要开发人员，基于开源项目进行定制化开发，完善LDAP登陆以及权限管理功能；",
        "2.参与系统的版本发布，以及项目的推广与宣传，目前已经从团队推广至整个部接入使用。"
      ]
    }
  ]
}