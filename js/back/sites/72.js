/*模板*/
define(function(require,exports,module){
  module.exports={
    title:"ek6",
		status:0,//0表示等待队列中，1表示登陆中，2表示处理中，3表示处理完毕
    page:{
      "status":0,//0表示需要登陆，1表示已有cookie无需登陆或者网站本身不需要登录
      "login":"http://fabu.ek6.com/?do=login",
      "publish":"http://fabu.ek6.com/?do=kaifu"
    },
    "user":{
      "default":false,
      "username":"baiyu0001",
      "password":"baiyu0001"
    },
    "loginForm":{
      "needVerifyCode":true,
      "selector":"#loginform",//登录表单的jquery选择器
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
        "selector":"#loginform",
        "trigger":"submit"
      }
    },
    "publishForm":{
      "content":[
        {
          "name":"gamename",
          "replace":"game",
          "value":"经过格式化函数处理后的值"
        },{
          "name":"fuwuqi",
          "replace":"server",
          "value":"经过格式化函数处理后的值"
        },{
          "name":"kaifudate",
          "value":"0",
          "format":5
        },{
          "name":"loginurl",
          "replace":"main_url",
          "value":"经过格式化函数处理后的值"
        },{
          "name":"IsShoufei",
          "value":"0"
        }
      ],
      "submit":{
        "selector":"#submit",
        "trigger":"click"
      }
    }
  }
});