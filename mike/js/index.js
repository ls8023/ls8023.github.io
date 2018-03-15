
       var ul=document.querySelector('.ul');
		var box=document.querySelector('.box');
		var input=document.querySelector('#input-search');
		var btn=document.querySelector('.glyphicon-zoom-in');
		btn.onclick=function(){
			
				getNow()
				
		}
		function getNow(){
			$.ajax({

			url: "https://api.jisuapi.com/recipe/search?keyword="+input.value+"&num=20&appkey=316f9cd585afa445",
			 type: 'get',
                success: function(rs){
                	var data = rs.result.list
        			var html= '';
        			var mtext= ''
        			var process= ''
	        		for(var i=0;i<data.length;i++){
	        			//<img src="img/100.png"/>
	        			var data2 = data[i].material
	        			for(var j=0;j<data2.length;j++){
	        				mtext +='<span>'+data2[j].mname+":"+data2[j].amount+'；</span>'
	        			}
	        			var data3 =data[i].process;
	        			for(var k=0;k<data3.length;k++){
	        				process +='<p>'+[k+1]+'：'+data3[k].pcontent+"</p><img src='"+data3[k].pic+
		                    "'/>"
	        			}
		        		html += '<li class="col-sm-7 col-sm-push-3"><p>菜谱名称：' + data[i].name +
		                    '</p><p>用餐人数：' + data[i].peoplenum +
		                    '</p><p>菜谱说明：' + data[i].content+"</p><img src='"+data[i].pic+
		                    "'/><p>标签:"+data[i].tag+'</p><p>材料：'+mtext+'</p><p>做法：'+process+
		                    '</p></li>'
		        	}
        			ul.innerHTML =html;
                },
                dataType:'jsonp',
                error: function(error){
                    console.log(error)
                }
			});
		} 