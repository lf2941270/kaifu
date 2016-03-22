/*模板*/
define(function(require,exports,module){
  module.exports={
    title:"530",
		status:0,//0表示等待队列中，1表示登陆中，2表示处理中，3表示处理完毕
    page:{
      "status":0,//0表示需要登陆，1表示已有cookie无需登陆或者网站本身不需要登录
      "login":"http://www.530.com.cn/login/",
      "publish":"http://www.530.com.cn/release/"
    },
    "user":{
      "default":false,
      "username":"baiyu0001",
      "password":"baiyu0001"
    },
    "loginForm":{
      "needVerifyCode":false,
      "selector":".ht_form form",//登录表单的jquery选择器
      "content":[
        {
          "name":"login_id",
          "value":"值"
        },{
          "name":"password",
          "value":"值"
        }
      ],
      "submit":{//登录表单的提交方式
        "selector":".login input",
        "trigger":"click"
      }
    },
    "publishForm":{
      "content":[
				{
					"name":"game",
					"replace":"game",
					"value":"经过格式化函数处理后的值"
				},{
					"name":"sort",
					"value":"0",
					"replace":"leixing"
				},{
					"name":"area",
					"value":"0",
					"replace":"server"
				},{
					"name":"pbdate",
					"value":"0",
					"format":7
				},{
					"name":"hour",
					"value":"0",
					"format":3
				},{
					"name":"jumpurl",
					"format":18,
					"value":"经过格式化函数处理后的值"
				},{
					"name":"top",
					"value":"0"
				}
      ],
      "submit":{
        "selector":".publish",
        "trigger":"click"
      }
    }
  }
});