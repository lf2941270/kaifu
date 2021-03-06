/*模板*/
define(function(require,exports,module){
  module.exports={
    title:"6dyy",
		status:0,//0表示等待队列中，1表示登陆中，2表示处理中，3表示处理完毕
    page:{
      "status":0,//0表示需要登陆，1表示已有cookie无需登陆或者网站本身不需要登录
      "login":"http://www.6dyy.com/index.php?m=member&c=index&a=login",
      "publish":"http://www.6dyy.com/index.php?m=member&c=content&a=publish&siteid=1&catid=49"
    },
    "user":{
      "default":false,
      "username":"baiyu0001",
      "password":"baiyu0001"
    },
    "loginForm":{
      "needVerifyCode":false,
      "selector":"#myform",//登录表单的jquery选择器
      "content":[
        {
          "name":"username",
          "value":"值"
        },{
          "name":"password",
          "value":"值"
        },{
          "name":"cookietime",
          "value":"2592000"
        }
      ],
      "submit":{//登录表单的提交方式
        "selector":"#dosubmit",
        "trigger":"click"
      }
    },
    "publishForm":{
      "content":[
        {
          "name":"info[title]",
          "replace":"game",
          "value":"经过格式化函数处理后的值"
        },{
          "name":"info[gname]",
          "replace":"game",
          "value":"经过格式化函数处理后的值"
        },{
          "name":"info[gtype]",
          "replace":"leixing",
          "value":"经过格式化函数处理后的值"
        },{
          "name":"info[servers]",
          "format":6,
          "value":"经过格式化函数处理后的值"
        },{
          "name":"info[operate]",
          "value":"0",
          "replace":"main_url"
        },{
          "name":"info[officeurl]",
          "value":"0",
          "replace":"main_url"
        },{
          "name":"info[testtime]",
          "value":"0",
          "format":10
        },{
          "name":"info[th]",
          "value":"0",
          "format":8
        },{
          "name":"info[tf]",
          "value":"0",
          "format":4
        },{
          "name":"info[passport]",
          "value":"2"
        }
      ],
      "submit":{
        "selector":"#dosubmit",
        "trigger":"click"
      }
    }
  }
});