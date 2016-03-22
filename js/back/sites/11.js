/*模板*/
define(function(require,exports,module){
  module.exports={
    title:"93k开服网",
		status:0,//0表示等待队列中，1表示登陆中，2表示处理中，3表示处理完毕
    page:{
      "status":0,//0表示需要登陆，1表示已有cookie无需登陆或者网站本身不需要登录
      "login":"http://www.93k.com/member/",
      "publish":"http://www.93k.com/member/article_add.php"
    },
    "user":{
      "default":false,
      "username":"baiyu0001",
      "password":"baiyu0001"
    },
    "loginForm":{
      "needVerifyCode":true,
      "selector":"form[action='index_do.php']",//登录表单的jquery选择器
      "content":[
        {
          "name":"userid",
          "value":"值"
        },{
          "name":"pwd",
          "value":"值"
        }
      ],
      "submit":{//登录表单的提交方式
        "selector":"[src='templets/style/img/btn1.gif']",
        "trigger":"click"
      }
    },
    "publishForm":{
      "content":[
        {
          "name":"title",
          "replace":"game",
          "value":"经过格式化函数处理后的值"
        },{
          "name":"tags",
          "value":"0",
          "format":10
        },{
          "name":"riqi",
          "value":"0",
          "format":5
        },{
          "name":"typeid",
          "value":"5"
        },{
          "name":"fuwu",
          "format":6,
          "value":"经过格式化函数处理后的值"
        },{
          "name":"pingtai",
          "replace":"company",
          "value":"经过格式化函数处理后的值"
        },{
          "name":"fuwuurl",
          "replace":"main_url",
          "value":"经过格式化函数处理后的值"
        }
      ],
      "submit":{
        "selector":".button2",
        "trigger":"click"
      },
      "needVerifyCode":true
    }
  }
});