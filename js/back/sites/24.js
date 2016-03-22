/*模板*/
define(function(require,exports,module){
  module.exports={
    title:"聚侠",
		status:0,//0表示等待队列中，1表示登陆中，2表示处理中，3表示处理完毕
    page:{
      "status":0,//0表示需要登陆，1表示已有cookie无需登陆或者网站本身不需要登录
      "login":"http://kf.juxia.com/app/client.php",
      "publish":"http://kf.juxia.com/app/add-server.php"
    },
    "user":{
      "default":false,
      "username":"baiyu0001",
      "password":"baiyu0001"
    },
    "loginForm":{
      "needVerifyCode":false,
      "selector":"form[action='?action=login']",//登录表单的jquery选择器
      "content":[
        {
          "name":"user_name",
          "value":"值"
        },{
          "name":"password",
          "value":"值"
        }
      ],
      "submit":{//登录表单的提交方式
        "selector":"form[action='?action=login']",
        "trigger":"submit"
      }
    },
    "publishForm":{
      "content":[
        {
          "name":"game_name",
          "replace":"game",
          "value":"经过格式化函数处理后的值",
          "text":true
        },{
          "name":"syear",
          "value":"0",
          "format":0
        },{
          "name":"smonth",
          "value":"0",
          "format":1
        },{
          "name":"sday",
          "value":"0",
          "format":2
        },{
          "name":"shour",
          "value":"0",
          "format":3
        },{
          "name":"server_name",
          "value":"0",
          "format":6
        },{
          "name":"game_url",
          "value":"0",
          "replace":"main_url"
        }
      ],
      "submit":{
        "selector":"#form1",
        "trigger":"submit"
      }
    }
  }
});