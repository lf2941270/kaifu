
/*模板*/
define(function(require,exports,module){
  module.exports={
    title:"5336",
		status:0,//0表示等待队列中，1表示登陆中，2表示处理中，3表示处理完毕
    page:{
      "status":0,//0表示需要登陆，1表示已有cookie无需登陆或者网站本身不需要登录
      "login":"http://www.5336.com/yys",
      "publish":"http://www.5336.com/yys/yys_main"
    },
    "user":{
      "default":false,
      "username":"baiyu0001",
      "password":"baiyu0001"
    },
    "loginForm":{
      "needVerifyCode":true,
      "selector":"form[action='/yys/index/login']",//登录表单的jquery选择器
      "content":[
        {
          "name":"yys_name",
          "value":"值"
        },{
          "name":"yys_pw",
          "value":"值"
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
					"name":"game_name",
					"replace":"game",
					"value":"经过格式化函数处理后的值"
				},{
					"name":"num",
					"value":"0",
					"replace":'server'
				},{
					"name":"begin_time",
					"value":"0",
					"format":11
				},{
					"name":"hour",
					"value":"0",
					"format":3
				},{
					"name":"minute",
					"value":"0",
					"format":4
				},{
					"name":"official_website",
					"replace":"main_url",
					"value":"经过格式化函数处理后的值"
				},{
					"name":'fu_order',
					"value":"pt"
				},{
					"name":"fu_kfhd",
					"replace":"info",
					"value":"经过格式化函数处理后的值"
				}
      ],
      "submit":{
        "selector":"#contorl_kf",
        "trigger":"click"
      }
    }
  }
});