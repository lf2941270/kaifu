/*模板*/
define(function(require,exports,module){
  module.exports={
    title:"93tyy",
		status:0,//0表示等待队列中，1表示登陆中，2表示处理中，3表示处理完毕
    page:{
      "status":0,//0表示需要登陆，1表示已有cookie无需登陆或者网站本身不需要登录
      "login":"http://www.93tyy.com/index.php?mod=login",
      "publish":"http://www.93tyy.com/operator_admin/index.php?op=kaifu&subop=new"
    },
    "user":{
      "default":false,
      "username":"baiyu0001",
      "password":"baiyu0001"
    },
    "loginForm":{
      "needVerifyCode":true,
      "selector":"form[action='index.php?mod=login']",//登录表单的jquery选择器
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
        "selector":"form[action='index.php?mod=login']",
        "trigger":"submit"
      }
    },
    "publishForm":{
      "content":[
				{
					"name":"game_name",
					"replace":"game",
					"value":"经过格式化函数处理后的值"
				},{
					"name":"data[server_name]",
					"value":"0",
					"format":19
				},{
					"name":"start_time[year]",
					"value":"0",
					"format":0
				},{
					"name":"start_time[month]",
					"value":"0",
					"format":1
				},{
					"name":"start_time[day]",
					"value":"0",
					"format":2
				},{
					"name":"start_time[hour]",
					"value":"0",
					"format":3
				},{
					"name":"start_time[minute]",
					"value":"0",
					"format":14
				},{
					"name":"data[reg_url]",
					"replace":"main_url",
					"value":"经过格式化函数处理后的值"
				},{
					"name":"data[activity]",
					"replace":"info",
					"value":"经过格式化函数处理后的值"
				}
      ],
      "submit":{
        "selector":"#button4",
        "trigger":"click"
      }
    }
  }
});