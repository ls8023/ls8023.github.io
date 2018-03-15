var usename = document.querySelector('.username');
		var password = document.querySelector('.password');
		console.log(usename)
//		var loginBtn  = document.querySelector('#login');
		var registerBtn  = document.querySelector('.register');
//		var  span =  document.querySelector('span');
//		 //需要有一个数组，里面存放所有用户的信息，初始值为[]

		let userArray = window.localStorage.getItem('regsiter')||'[]';
		//将用户信息转换完json对象
		userArray= JSON.parse(userArray)
		//注册流程
		registerBtn.onclick=()=>{
			let userName = usename.value;
			let pass = password.value;
			let user = {name:userName,passwod:pass};
			for (let i=0;i<userArray.length;i++) {
				if(userArray[i].name==userName){
					alert("该用户名以被占用");
                	return;
				}
			}
			userArray.push(user);
			window.localStorage.setItem('register',JSON.stringify(userArray));
			
		}
//		loginBtn.onclick=()=>{
//      let username = usename.value;
//      let pass = password.value;
//      //如果用户名和密码相同则登录成功
//      for(let i=0;i<userArray.length;i++){
//          if(userArray[i].name==username){
//              if(userArray[i].password==pass){
//                  alert("恭喜你登录成功！")
//              }
//              return;
//          }
//      }
//  }
//		usename.onblur=()=>{
//			let userName = usename.value;
//			var reg1=/^[\u3040-\u309F\u4e00-\u9fa5\uf900-\ufa2d]{2,4}$/;
//			if(!reg1.test(userName)){
//				span.innerHTML='请输入2-4位的中文';
//			}else{
//				span.innerHTML='';
//			}
//		
//		}
//		password.onblur=()=>{
//			let pass = password.value;
//			var reg2 =/^[a-zA-Z0-9]{4,18}$/;
//			if(!reg2.test(pass)){
//				span.innerHTML='请输入4-18位数字或者字母';
//				console.log(123)
//			}else{
//				span.innerHTML='';
//			}
//			
//		}
