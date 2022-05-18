function timu(data) {
	alert("注意：填空题，答对一题一分，答错没有分，点击提交显示本次考试分数与答案。")
	/*var input = document.createElement("input");
	input.setAttribute("id","h_input"); //类名
	input.className="h_input";
	input.setAttribute("type", "text");
	input.setAttribute("style","height: 0px");
	var inputInsert22 = document.body;
	inputInsert22.appendChild(input);*/

	//插入题目
	var q = 1000;
	for (var i = 0; i < 5; i++) {
		q++;
		var div = document.createElement("div");
		div.className = "answer_input";
		div.setAttribute("v", q);
		div.setAttribute("id", "u_" + q);
		div.innerHTML = " 第 " + (i + 1) + " 题：" + data[i].title;
		document.body.appendChild(div);
		//输入填空
		var input = document.createElement("input");
		input.setAttribute("id", "Q_" + q); //类名
		input.setAttribute("type", "hidden")
		var inputInsert = document.getElementsByTagName("div")[i];
		inputInsert.appendChild(input);
	}


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
	divJ.setAttribute("id", "jiexi");
	document.getElementsByTagName("div")[4].appendChild(divJ);

	function jiexidaan() {
		var list_str = '<br/><br/><big style="color:red;">答案:</big><br/>';
		for (var p in data) {
			list_str += (Number(p) + 1) + ',' + data[p].answer + '<br/>';

		};

		document.getElementById("jiexi").innerHTML = list_str;
		//document.getElementById("jiexi").innerHTML=;
	};



	var flag = 0;
	document.getElementById('ibutton').addEventListener('tap', function() {
		if (flag == 1) {
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

			document.getElementById("ibutton").innerHTML = '返回首页';

		}
		// alert(sum);
		if (flag == 0) {
			mui.post('http://81.70.23.51:5555/jifeng_tiankong', {
				"jifeng": sum,
			}, function da(da) {
				mui.toast(da.mag);
				console.log(JSON.stringify(da));
			}, 'json');

			alert("本次得分：" + sum + '分');

		};
		jiexidaan();
		flag = 1;

	});
}
