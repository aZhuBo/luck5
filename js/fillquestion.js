function timu(data) {
	alert("注意：填空题，答对一题一分，答错没有分，点击提交显示本次考试分数与答案。")
	/*var input = document.createElement("input");
	input.setAttribute("id","h_input"); //类名
	input.className="h_input";
	input.setAttribute("type", "text");
	input.setAttribute("style","height: 0px");
	var inputInsert22 = document.body;
	inputInsert22.appendChild(input);*/
	
	//题目矩阵
	//1
	var div0 = document.createElement("div");
	div0.className = "answer_input";
	div0.setAttribute("v","1001");
	div0.setAttribute("id", "u_1001");
	div0.innerHTML =" 第 1 题："+data[0].title;
	document.body.appendChild(div0);
	//输入填空
	var input0 = document.createElement("input");
	input0.setAttribute("id","Q_1001"); //类名
	input0.setAttribute("type", "hidden")
	var inputInsert0 = document.getElementsByTagName("div")[0];
	inputInsert0.appendChild(input0);

	//2
	var div1 = document.createElement("div");
	div1.className = "answer_input";
	div1.setAttribute("v", 1002);
	div1.setAttribute("id", "u_1002");
	div1.innerHTML =" 第 2 题："+ data[1].title;
	document.body.appendChild(div1);
	//输入填空
	var input1 = document.createElement("input");
	input1.setAttribute("id","Q_1002"); //类名
	input1.setAttribute("type", "hidden")
	var inputInsert1 = document.getElementsByTagName("div")[1];
	inputInsert1.appendChild(input1);

	//3
	var div2 = document.createElement("div");
	div2.className = "answer_input";
	div2.setAttribute("v", 1003);
	div2.setAttribute("id", "u_1003");
	div2.innerHTML = " 第 3 题："+ data[2].title;
	document.body.appendChild(div2);
	//输入填空
	var input2 = document.createElement("input");
	input2.setAttribute("id","Q_1003"); 
	input2.setAttribute("type", "hidden")
	var inputInsert2 = document.getElementsByTagName("div")[2];
	inputInsert2.appendChild(input2);

	//4
	var div3 = document.createElement("div");
	div3.className = "answer_input";
	div3.setAttribute("v", 1004);
	div3.setAttribute("id", "u_1004");
	div3.innerHTML = " 第 4 题："+ data[3].title;
	document.body.appendChild(div3);
	//输入填空
	var input3 = document.createElement("input");
	input3.setAttribute("id","Q_1004"); //类名
	input3.setAttribute("type", "hidden")
	var inputInsert3 = document.getElementsByTagName("div")[3];
	inputInsert3.appendChild(input3);
	

	//5
	var div4 = document.createElement("div");
	div4.className = "answer_input";
	div4.setAttribute("v", 1005);
	div4.setAttribute("id", "u_1005");
	div4.innerHTML =" 第 5 题："+  data[4].title;
	document.body.appendChild(div4);
	//输入填空
	var input4 = document.createElement("input");
	input4.setAttribute("id","Q_1005"); //类名
	input4.setAttribute("type", "hidden")
	var inputInsert4 = document.getElementsByTagName("div")[4];
	inputInsert4.appendChild(input4);

	//解析
	

	var submit = 'submit';
	var button = document.createElement("botton");
	button.innerHTML = "提交";
	button.setAttribute("id", 'ibutton');
	button.className = "ibutton btn-blue";
	document.body.appendChild(button);

	
	// var button = document.createElement("botton");
	// button.innerHTML = "返回首页";
	// button.setAttribute("id", 'fanhui');
	// button.className = "ibutton btn-blue";
	// document.body.appendChild(button);
	// var jiexi = document.createElement("div");
	// 	jiexi.className = "answer";
	// 	jiexi.setAttribute("id", "jiexi");
	// 	jiexi.innerHTML =" 第 6 题：";
	// 	document.body.appendChild(jiexi);
		
		//解析
		var jiexi = "jiexi"
		var divJ = document.createElement("div");
		divJ.setAttribute("id","jiexi");
		document.getElementsByTagName("div")[4].appendChild(divJ);
		
		function jiexidaan(){
			var list_str='<br/><br/><big style="color:red;">答案:</big><br/>';
			for(var p in data){
				list_str+=(Number(p)+1)+','+data[p].answer+'<br/>';
				
			};
			
			document.getElementById("jiexi").innerHTML=list_str;
			//document.getElementById("jiexi").innerHTML=;
		};
		
		
		
		var flag=0;
		document.getElementById('ibutton').addEventListener('tap', function() {
		if(flag == 1){
			mui.openWindow({
				createNew: true,
				url: '../index.html', //通过URL传参
			})
		};
		var fillAnswer = new Array();
		var sum = 0;
		fillAnswer[0] = document.getElementById("Q_1001").value
		fillAnswer[1] = document.getElementById("Q_1002").value
		fillAnswer[2] = document.getElementById("Q_1003").value
		fillAnswer[3] = document.getElementById("Q_1004").value
		fillAnswer[4] = document.getElementById("Q_1005").value
		for (var i = 0; i < 5; i++) {
			if (data[i].answer == fillAnswer[i]) {
				sum++;
			}
			
		document.getElementById("ibutton").innerHTML='返回首页';
		
		}
		// alert(sum);
		if(flag ==0){
			mui.post('http://81.70.23.51:5555/jifeng_tiankong', {
				"jifeng": sum,
			}, function da(da) {
				mui.toast(da.mag);
				console.log(JSON.stringify(da));
			}, 'json');
			
			alert("本次得分：" + sum + '分');
			
		};
		jiexidaan();
		flag =1;

	});
}
