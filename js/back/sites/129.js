
/*模板*/
define(function(require,exports,module){
  module.exports={
    title:"ppwan",
		status:0,//0表示等待队列中，1表示登陆中，2表示处理中，3表示处理完毕
    page:{
      "status":0,//0表示需要登陆，1表示已有cookie无需登陆或者网站本身不需要登录
      "login":"http://kf.ppwan.com/public/login.html",
      "publish":"http://kf.ppwan.com/servers/add.html"
    },
    "user":{
      "default":false,
      "username":"baiyu0001",
      "password":"baiyu0001"
    },
    "loginForm":{
      "needVerifyCode":true,
      "selector":"form[action='/public/doLogin.html']",//登录表单的jquery选择器
      "content":[
        {
          "name":"username",
          "value":"值"
        },{
          "name":"userpwd",
          "value":"值"
        },{
					"name":"cookietime",
					"value":"31536000"
				}
      ],
      "submit":{//登录表单的提交方式
        "selector":"input[type='submit']",
        "trigger":"click"
      }
    },
    "publishForm":{
      "content":[
				{
					"name":"gname",
					"replace":"game",
					"value":"经过格式化函数处理后的值"
				},{
					"name":"opentime",
					"format":7
				},{
					"name":"h",
					"format":8
				},{
					"name":"servernum",
					"replace":"server"
				},{
					"name":"regurl",
					"replace":"main_url",
					"value":"经过格式化函数处理后的值"
				}
      ],
      "submit":{
        "selector":"[action='/servers/insert.html']",
        "trigger":"submit"
      }
    }
  }
});