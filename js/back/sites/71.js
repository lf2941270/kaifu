/*模板*/
define(function(require,exports,module){
  module.exports={
    title:"612",
		status:0,//0表示等待队列中，1表示登陆中，2表示处理中，3表示处理完毕
    page:{
      "status":0,//0表示需要登陆，1表示已有cookie无需登陆或者网站本身不需要登录
      "login":"http://www.612.com/member.php?action=login",
      "publish":"http://www.612.com/member.php?action=NewServer"
    },
    "user":{
      "default":false,
      "username":"baiyu0001",
      "password":"baiyu0001"
    },
    "loginForm":{
      "needVerifyCode":false,
      "selector":"form[action='member.php?action=login']",//登录表单的jquery选择器
      "content":[
        {
          "name":"username",
          "value":"值"
        },{
          "name":"password",
          "value":"值"
        }
      ],
      "submit":{//登录表单的提交方式
        "selector":".btn-login",
        "trigger":"click"
      }
    },
    "publishForm":{
      "content":[
        {
          "name":"gameName",
          "replace":"game",
          "value":"经过格式化函数处理后的值"
        },{
          "name":"serverId",
          "replace":"server",
          "value":"经过格式化函数处理后的值"
        },{
          "name":"startTime",
          "value":"0",
          "format":7
        },{
          "name":"hour",
          "format":8,
          "value":"经过格式化函数处理后的值"
        },{
          "name":"serverActivity",
          "replace":"info",
          "value":"经过格式化函数处理后的值"
        },{
          "name":"link",
          "replace":"main_url",
          "value":"经过格式化函数处理后的值"
        }
      ],
      "submit":{
        "selector":"#kfb_btn_newServer",
        "trigger":"click"
      }
    }
  }
});