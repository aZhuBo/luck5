function TiMu(data1) {
	var falsj;
	var flag = 1;
	var flag2 = 1;
	var flag3 = 1;
	var flag4 = 1;
	var flag5 = 1;
	alert("注意事项：本次答题开始，题目总数5道，答对一分，答错不得分。选择成功后自动跳转下一题。")
	var ppp = 1
	var xiayiti=1;
	var shangyiti=1;
	var xia1=0;
	// 循环遍历题目列表
	for (var i in data1) {
		var div = document.createElement("div");
		div.className = "entrance-bottom-frame-line";
		document.querySelector(".entrance-bottom-frame").appendChild(div);


		var div2 = document.createElement("div");
		div2.className = "entrance-bottom-frame-line-title";
		// 传入题目标题
		div2.innerHTML = data1[i].title;
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div2);


		var divli1 = document.createElement("div");
		divli1.innerHTML = parseInt(i) + 1;

		// 从第一个题目开始
		var timu = 1
		// 第i个题目的第j个选项
		for (var j in data1[i].xuanxiang) {
			var div3 = document.createElement("div");
			div3.className = "entrance-bottom-frame-line-button";
			var div3_id = document.createElement("div");
			div3_id.className = "entrance-bottom-frame-line-button-id";

			// 设置题目选项，[A,B,C,D]
			if (j == 0) {
				div3_id.innerHTML = "A";
			} else if (j == 1) {
				div3_id.innerHTML = "B";
			} else if (j == 2) {
				div3_id.innerHTML = "C";
			} else {
				div3_id.innerHTML = "D";
			}
			var div4 = document.createElement("div");
			div4.className = "entrance-bottom-frame-line-button-frame";

			// 显示选项内容
			div4.innerHTML = data1[i].xuanxiang[j];
			div3.appendChild(div3_id)
			div3.appendChild(div4);
			// 列出所有的选项
			document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div3);
			timu++
		}
		
			var shangyiti1="shangyiti"
			var divp1235 = document.createElement("button");
			divp1235.setAttribute("id", shangyiti1+shangyiti);
			divp1235.className = "entrance-bottom-frame-line-titlep21345";
			// 传入题目标题
			//div2.innerHTML = data1[i].choice;
			document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(divp1235);
			if(shangyiti>1)
			{
				document.getElementById(shangyiti1+shangyiti).innerHTML = "上一题";
				
			}
			
			
		
		shangyiti++;
		
		
			var xiayiti1="xiayiti"
			var divp123 = document.createElement("button");
			divp123.setAttribute("id", xiayiti1+xiayiti);
			divp123.className = "entrance-bottom-frame-line-titlep2134";
			// 传入题目标题
			//div2.innerHTML = data1[i].choice;
			document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(divp123);
			if(xiayiti<5){
			document.getElementById(xiayiti1+xiayiti).innerHTML = "下一题";
			}
			if(xiayiti==5)
			{
				document.getElementById(xiayiti1+xiayiti).innerHTML = "提交";
			}
		xiayiti++;

		var pppp = "divids"
		var divp1 = document.createElement("div");
		divp1.setAttribute("id", pppp + ppp);
		divp1.className = "entrance-bottom-frame-line-titlep";
		// 传入题目标题
		//div2.innerHTML = data1[i].choice;
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(divp1);
		ppp++;
		


	}


	function zhuanhuan(x) {
		if (x == 1) {
			return 'A'
		}
		if (x == 2) {
			return 'B'
		}
		if (x == 3) {
			return 'C'
		}
		if (x == 4) {
			return 'D'
		}
	}
	//document.write("<h1>通过document.write输出内容</h1>");

	mintime = 1;
	var dact = document.querySelector(".entrance-bottom-frame-line")

	// 选中与非选中的颜色区分，可以传入给前端展示
	var active = "active"
	var none = "none"
	addClass(dact, active)
	var timu_id = 0
	var select1 = 1 // 当前的题目
	var frame_left = 0
	// 用户选择的题目数组
	var questionChoice = new Array();
	// querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。
	document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
	document.querySelector(".topic-frameli").innerHTML = "第" + "<div>" + select1 + "</div>" + "/" + "5" + " 题"

	// if(select1>5)
	// {
	// 	alert("请勿过快点击")
	// 	mui.openWindow({
	// 		createNew: true,
	// 		url: '../index.html', //通过URL传参
	// 	})
	// }
	//矩阵又开始了，这是上一题矩阵
	document.getElementById('shangyiti2').addEventListener('tap', function() {
		frame_left += +100;
		document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
		timu_id--;
		select1--;
		document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
			"</div>" +
			"/" + timu +
			" 题"
		// 显示新的题目
		addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
		// 老的题目删除掉
		removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
			active)
	});
	document.getElementById('shangyiti3').addEventListener('tap', function() {
		frame_left += +100;
		document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
		timu_id--;
		select1--;
		document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
			"</div>" +
			"/" + timu +
			" 题"
		// 显示新的题目
		addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
		// 老的题目删除掉
		removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
			active)
	});
	document.getElementById('shangyiti4').addEventListener('tap', function() {
		frame_left += +100;
		document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
		timu_id--;
		select1--;
		document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
			"</div>" +
			"/" + timu +
			" 题"
		// 显示新的题目
		addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
		// 老的题目删除掉
		removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
			active)
	});
	document.getElementById('shangyiti5').addEventListener('tap', function() {
		frame_left += +100;
		document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
		timu_id--;
		select1--;
		document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
			"</div>" +
			"/" + timu +
			" 题"
		// 显示新的题目
		addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
		// 老的题目删除掉
		removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
			active)
	});
	
	//矩阵又开始了，这是下一题矩阵

		document.getElementById('xiayiti1').addEventListener('tap', function() {
			frame_left += -100;
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
				"</div>" +
				"/" + timu +
				" 题"
			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
				active)
		});
	
	
	document.getElementById('xiayiti2').addEventListener('tap', function() {
		frame_left += -100;
		document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
		timu_id++;
		select1++;
		document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
			"</div>" +
			"/" + timu +
			" 题"
		// 显示新的题目
		addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
		// 老的题目删除掉
		removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
			active)
	});
	document.getElementById('xiayiti3').addEventListener('tap', function() {
		frame_left += -100;
		document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
		timu_id++;
		select1++;
		document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
			"</div>" +
			"/" + timu +
			" 题"
		// 显示新的题目
		addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
		// 老的题目删除掉
		removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
			active)
	});
	document.getElementById('xiayiti4').addEventListener('tap', function() {
		if(select1==4)
		{
			frame_left += -100;
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
				"</div>" +
				"/" + timu +
				" 题"
			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
				active)
		}
		else{
			alert("请勿过快点击")
		}
		
	});
	document.getElementById('xiayiti5').addEventListener('tap', function() {
		var afterChoice = new Array();
		var sum = 0;
		afterChoice[0] = data1[0].choice;
		afterChoice[1] = data1[1].choice;
		afterChoice[2] = data1[2].choice;
		afterChoice[3] = data1[3].choice;
		afterChoice[4] = data1[4].choice;
		for (var i = 0; i < 5; i++) {
			if (afterChoice[i] == questionChoice[i]) {
				sum++;
			}
		}
			alert("本次得分：" + sum + '分');
			mui.openWindow({
				createNew: true,
				url: '../index.html', //通过URL传参
			})
			// mui.post('http://81.70.23.51:5555/jifeng', {
			// 	"jifeng": sum,
			// }, function da1(da1) {
			// 	console.log(JSON.stringify(da1));
			// }, 'json');
	});



	// 题目阵开始
	// 手动狗头🐕🐕U•ェ•*U
	// 1
	document.querySelectorAll(".entrance-bottom-frame-line-button")[0].onclick = function() {
		if (flag != 0) {
			questionChoice[0] = 1;
			xia1=1;
			// 答对黄色，答错红色
			if (data1[0].choice == questionChoice[0]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[0].style.backgroundColor = '#00FF00'

				document.getElementById("divids1").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[0].choice) +
					"<br/>" +
					"解析： " + data1[0].jiexi + "</h4>";


			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[0].style.backgroundColor = '#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[0].choice) - 1].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids1").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[0].choice) +
					"<br/>" +
					"解析： " + data1[0].jiexi + "</h4>";
					
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				flag = 0;
				frame_left += -100
				setTimeout(function() {

					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
						"</div>" +
						"/" + timu +
						" 题"
					// 显示新的题目
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					// 老的题目删除掉
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
						active)
				}, 1000);
			} else {
				alert("答题完成！！！")
			}
		}

	}

	// 2
	document.querySelectorAll(".entrance-bottom-frame-line-button")[1].onclick = function() {
		if (flag != 0) {
			questionChoice[0] = 2;
xia1=1;
			// 答对黄色，答错红色
			if (data1[0].choice == questionChoice[0]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[1].style.backgroundColor = '#00FF00'
				document.getElementById("divids1").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[0].choice) +
					"<br/>" +
					"解析： " + data1[0].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[1].style.backgroundColor = '#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[0].choice) - 1].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids1").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[0].choice) +
					"<br/>" +
					"解析： " + data1[0].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				flag = 0;
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
						"</div>" +
						"/" + timu +
						" 题"
					// 显示新的题目
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					// 老的题目删除掉
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
						active)
				}, 1000);
			} else {
				alert("答题完成！！！")
			}
		}

	}

	// 3
	document.querySelectorAll(".entrance-bottom-frame-line-button")[2].onclick = function() {
		if (flag != 0) {
			questionChoice[0] = 3;
xia1=1;
			// 答对黄色，答错红色
			if (data1[0].choice == questionChoice[0]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[2].style.backgroundColor = '#00FF00'
				document.getElementById("divids1").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[0].choice) +
					"<br/>" +
					"解析： " + data1[0].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[2].style.backgroundColor = '#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[0].choice) - 1].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids1").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[0].choice) +
					"<br/>" +
					"解析： " + data1[0].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				flag = 0;
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
						"</div>" +
						"/" + timu +
						" 题"
					// 显示新的题目
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					// 老的题目删除掉
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
						active)
				}, 1000);
			} else {
				alert("答题完成！！！")
			}
		}

	}

	// 4
	document.querySelectorAll(".entrance-bottom-frame-line-button")[3].onclick = function() {
		if (flag != 0) {
			questionChoice[0] = 4;
xia1=1;
			// 答对黄色，答错红色
			if (data1[0].choice == questionChoice[0]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[3].style.backgroundColor = '#00FF00'
				document.getElementById("divids1").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[0].choice) +
					"<br/>" +
					"解析： " + data1[0].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[3].style.backgroundColor = '#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[0].choice) - 1].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids1").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[0].choice) +
					"<br/>" +
					"解析： " + data1[0].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				flag = 0;
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
						"</div>" +
						"/" + timu +
						" 题"

					// 显示新的题目
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					// 老的题目删除掉
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
						active)
				}, 1000);
			} else {
				alert("答题完成！！！")
			}
		}

	}

	// 5
	document.querySelectorAll(".entrance-bottom-frame-line-button")[4].onclick = function() {
		if (flag2 != 0) {
			questionChoice[1] = 1;

			// 答对黄色，答错红色
			if (data1[1].choice == questionChoice[1]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[4].style.backgroundColor = '#00FF00'
				zdiaoy();
				document.getElementById("divids2").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[1].choice) +
					"<br/>" +
					"解析： " + data1[1].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[4].style.backgroundColor = '#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[1].choice) + 3].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids2").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[1].choice) +
					"<br/>" +
					"解析： " + data1[1].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				flag2 = 0;
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
						"</div>" +
						"/" + timu +
						" 题"
					// 显示新的题目
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					// 老的题目删除掉
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
						active)
				}, 1000);
			} else {
				alert("答题完成！！！")
			}
		}

	}
	// 6
	document.querySelectorAll(".entrance-bottom-frame-line-button")[5].onclick = function() {
		if (flag2 != 0) {
			questionChoice[1] = 2;

			// 答对黄色，答错红色
			if (data1[1].choice == questionChoice[1]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[5].style.backgroundColor = '#00FF00'
				document.getElementById("divids2").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[1].choice) +
					"<br/>" +
					"解析： " + data1[1].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[5].style.backgroundColor = '#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[1].choice) + 3].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids2").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[1].choice) +
					"<br/>" +
					"解析： " + data1[1].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				flag2 = 0;
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
						"</div>" +
						"/" + timu +
						" 题"
					// 显示新的题目
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					// 老的题目删除掉
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
						active)
				}, 1000);
			} else {
				alert("答题完成！！！")
			}
		}

	}
	// 7
	document.querySelectorAll(".entrance-bottom-frame-line-button")[6].onclick = function() {
		if (flag2 != 0) {
			questionChoice[1] = 3;

			// 答对黄色，答错红色
			if (data1[1].choice == questionChoice[1]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[6].style.backgroundColor = '#00FF00'
				document.getElementById("divids2").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[1].choice) +
					"<br/>" +
					"解析： " + data1[1].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[6].style.backgroundColor = '#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[1].choice) + 3].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids2").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[1].choice) +
					"<br/>" +
					"解析： " + data1[1].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				flag2 = 0;
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
						"</div>" +
						"/" + timu +
						" 题"
					// 显示新的题目
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					// 老的题目删除掉
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
						active)
				}, 1000);
			} else {
				alert("答题完成！！！")
			}
		}

	}
	// 8
	document.querySelectorAll(".entrance-bottom-frame-line-button")[7].onclick = function() {
		if (flag2 != 0) {
			questionChoice[1] = 4;

			// 答对黄色，答错红色
			if (data1[1].choice == questionChoice[1]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[7].style.backgroundColor = '#00FF00'
				document.getElementById("divids2").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[1].choice) +
					"<br/>" +
					"解析： " + data1[1].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[7].style.backgroundColor = '#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[1].choice) + 3].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids2").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[1].choice) +
					"<br/>" +
					"解析： " + data1[1].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				flag2 = 0;
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
						"</div>" +
						"/" + timu +
						" 题"
					// 显示新的题目
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					// 老的题目删除掉
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
						active)
				}, 1000);
			} else {
				alert("答题完成！！！")
			}
		}

	}
	// 9
	document.querySelectorAll(".entrance-bottom-frame-line-button")[8].onclick = function() {
		if (flag3 != 0) {
			questionChoice[2] = 1;

			// 答对黄色，答错红色
			if (data1[2].choice == questionChoice[2]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[8].style.backgroundColor = '#00FF00'
				document.getElementById("divids3").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[2].choice) +
					"<br/>" +
					"解析： " + data1[2].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[8].style.backgroundColor = '#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[2].choice) + 7].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids3").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[2].choice) +
					"<br/>" +
					"解析： " + data1[2].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				flag3 = 0;
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
						"</div>" +
						"/" + timu +
						" 题"
					// 显示新的题目
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					// 老的题目删除掉
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
						active)
				}, 1000);
			} else {
				alert("答题完成！！！")
			}
		}
	}

	// 10
	document.querySelectorAll(".entrance-bottom-frame-line-button")[9].onclick = function() {
		if (flag3 != 0) {
			questionChoice[2] = 2;

			// 答对黄色，答错红色
			if (data1[2].choice == questionChoice[2]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[9].style.backgroundColor = '#00FF00'
				document.getElementById("divids3").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[2].choice) +
					"<br/>" +
					"解析： " + data1[2].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[9].style.backgroundColor = '#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[2].choice) + 7].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids3").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[2].choice) +
					"<br/>" +
					"解析： " + data1[2].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				flag3 = 0;
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
						"</div>" +
						"/" + timu +
						" 题"
					// 显示新的题目
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					// 老的题目删除掉
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
						active)
				}, 1000);
			} else {
				alert("答题完成！！！")
			}
		}

	}
	// 11
	document.querySelectorAll(".entrance-bottom-frame-line-button")[10].onclick = function() {
		if (flag3 != 0) {
			questionChoice[2] = 3;

			// 答对黄色，答错红色
			if (data1[2].choice == questionChoice[2]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[10].style.backgroundColor =
					'#00FF00'
				document.getElementById("divids3").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[2].choice) +
					"<br/>" +
					"解析： " + data1[2].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[10].style.backgroundColor =
					'#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[2].choice) + 7].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids3").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[2].choice) +
					"<br/>" +
					"解析： " + data1[2].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				flag3 = 0;
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
						"</div>" +
						"/" + timu +
						" 题"
					// 显示新的题目
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					// 老的题目删除掉
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
						active)
				}, 1000);
			} else {
				alert("答题完成！！！")
			}
		}

	}
	// 12
	document.querySelectorAll(".entrance-bottom-frame-line-button")[11].onclick = function() {
		if (flag3 != 0) {
			questionChoice[2] = 4;

			// 答对黄色，答错红色
			if (data1[2].choice == questionChoice[2]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[11].style.backgroundColor =
					'#00FF00'
				document.getElementById("divids3").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[2].choice) +
					"<br/>" +
					"解析： " + data1[2].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[11].style.backgroundColor =
					'#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[2].choice) + 7].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids3").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[2].choice) +
					"<br/>" +
					"解析： " + data1[2].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				flag3 = 0;
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
						"</div>" +
						"/" + timu +
						" 题"
					// 显示新的题目
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					// 老的题目删除掉
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
						active)
				}, 1000);
			} else {
				alert("答题完成！！！")
			}
		}

	}
	// 13
	document.querySelectorAll(".entrance-bottom-frame-line-button")[12].onclick = function() {
		if (flag4 != 0) {
			questionChoice[3] = 1;

			// 答对黄色，答错红色
			if (data1[3].choice == questionChoice[3]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[12].style.backgroundColor =
					'#00FF00'
				document.getElementById("divids4").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[3].choice) +
					"<br/>" +
					"解析： " + data1[3].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[12].style.backgroundColor =
					'#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[3].choice) + 11].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids4").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[3].choice) +
					"<br/>" +
					"解析： " + data1[3].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
					flag4 = 0;
					frame_left += -100
					setTimeout(function() {
						document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
						timu_id++;
						select1++;
						if(select1>5){
							alert("请勿过快点击！")
							mui.openWindow({
								createNew: true,
								url: '../index.html', //通过URL传参
							})
						}
						else{
							document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
								"</div>" +
								"/" + timu +
								" 题"
							// 显示新的题目
							addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
							// 老的题目删除掉
							removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
								active)
						}
						
					}, 1000);
				

			} else {
				alert("答题完成！！！")
			}
		}

	}
	// 14
	document.querySelectorAll(".entrance-bottom-frame-line-button")[13].onclick = function() {
		if (flag4 != 0) {
			questionChoice[3] = 2;

			// 答对黄色，答错红色
			if (data1[3].choice == questionChoice[3]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[13].style.backgroundColor =
					'#00FF00'
				document.getElementById("divids4").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[3].choice) +
					"<br/>" +
					"解析： " + data1[3].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[13].style.backgroundColor =
					'#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[3].choice) + 11].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids4").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[3].choice) +
					"<br/>" +
					"解析： " + data1[3].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				flag4 = 0;
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					if(select1>5){
						alert("请勿过快点击！")
						mui.openWindow({
							createNew: true,
							url: '../index.html', //通过URL传参
						})
					}
					else{
						document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
							"</div>" +
							"/" + timu +
							" 题"
						// 显示新的题目
						addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
						// 老的题目删除掉
						removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
							active)
					}
					
				}, 1000);
			} else {
				alert("答题完成！！！")
			}
		}

	}
	// 15
	document.querySelectorAll(".entrance-bottom-frame-line-button")[14].onclick = function() {
		if (flag4 != 0) {
			questionChoice[3] = 3;

			// 答对黄色，答错红色
			if (data1[3].choice == questionChoice[3]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[14].style.backgroundColor =
					'#00FF00'
				document.getElementById("divids4").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[3].choice) +
					"<br/>" +
					"解析： " + data1[3].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[14].style.backgroundColor =
					'#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[3].choice) + 11].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids4").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[3].choice) +
					"<br/>" +
					"解析： " + data1[3].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				flag4 = 0;
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					if(select1>5){
						alert("请勿过快点击！")
						mui.openWindow({
							createNew: true,
							url: '../index.html', //通过URL传参
						})
					}
					else{
						document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
							"</div>" +
							"/" + timu +
							" 题"
						// 显示新的题目
						addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
						// 老的题目删除掉
						removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
							active)
					}
					
				}, 1000);
			} else {
				alert("答题完成！！！")
			}
		}

	}
	// 16
	document.querySelectorAll(".entrance-bottom-frame-line-button")[15].onclick = function() {
		if (flag4 != 0) {
			questionChoice[3] = 4;

			// 答对黄色，答错红色
			if (data1[3].choice == questionChoice[3]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[15].style.backgroundColor =
					'#00FF00'
				document.getElementById("divids4").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[3].choice) +
					"<br/>" +
					"解析： " + data1[3].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[15].style.backgroundColor =
					'#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[3].choice) + 11].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids4").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[3].choice) +
					"<br/>" +
					"解析： " + data1[3].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				flag4 = 0;
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					if(select1>5){
						alert("请勿过快点击！")
						mui.openWindow({
							createNew: true,
							url: '../index.html', //通过URL传参
						})
					}
					else{
						document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
							"</div>" +
							"/" + timu +
							" 题"
						// 显示新的题目
						addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
						// 老的题目删除掉
						removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
							active)
					}
					
				}, 1000);
			} else {
				alert("答题完成！！！")
			}
		}

	}
	// 17

	document.querySelectorAll(".entrance-bottom-frame-line-button")[16].onclick = function() {
		if (flag5 != 0) {
			flag5 = 0;
			questionChoice[4] = 1;

			// 答对黄色，答错红色
			if (data1[4].choice == questionChoice[4]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[16].style.backgroundColor =
					'#00FF00'
				document.getElementById("divids5").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[4].choice) +
					"<br/>" +
					"解析： " + data1[4].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[16].style.backgroundColor =
					'#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[4].choice) + 15].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids5").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[4].choice) +
					"<br/>" +
					"解析： " + data1[4].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;

						document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
							"</div>" +
							"/" + timu +
							" 题"
						// 显示新的题目
						addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
						// 老的题目删除掉
						removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
							active)

					
				}, 1000);
			} else {

			}

		}

	}
	// 18
	document.querySelectorAll(".entrance-bottom-frame-line-button")[17].onclick = function() {
		if (flag5 != 0) {
			flag5 = 0;
			questionChoice[4] = 2;

			// 答对黄色，答错红色
			if (data1[4].choice == questionChoice[4]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[17].style.backgroundColor =
					'#00FF00'
				document.getElementById("divids5").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[4].choice) +
					"<br/>" +
					"解析： " + data1[4].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[17].style.backgroundColor =
					'#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[4].choice) + 15].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids5").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[4].choice) +
					"<br/>" +
					"解析： " + data1[4].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
						"</div>" +
						"/" + timu +
						" 题"
					// 显示新的题目
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					// 老的题目删除掉
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
						active)
				}, 1000);
			} else {

			}

		}

	}
	// 19
	document.querySelectorAll(".entrance-bottom-frame-line-button")[18].onclick = function() {
		if (flag5 != 0) {
			flag5 = 0;
			questionChoice[4] = 3;

			// 答对黄色，答错红色
			if (data1[4].choice == questionChoice[4]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[18].style.backgroundColor =
					'#00FF00'
				document.getElementById("divids5").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[4].choice) +
					"<br/>" +
					"解析： " + data1[4].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[18].style.backgroundColor =
					'#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[4].choice) + 15].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids5").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[4].choice) +
					"<br/>" +
					"解析： " + data1[4].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
						"</div>" +
						"/" + timu +
						" 题"
					// 显示新的题目
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					// 老的题目删除掉
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
						active)
				}, 1000);
			} else {

			}

		}
		


	}
	// 20
	document.querySelectorAll(".entrance-bottom-frame-line-button")[19].onclick = function() {
		if (flag5 != 0) {
			flag5 = 0;
			questionChoice[4] = 4;

			// 答对黄色，答错红色
			if (data1[4].choice == questionChoice[4]) {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[19].style.backgroundColor =
					'#00FF00'
				document.getElementById("divids5").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[4].choice) +
					"<br/>" +
					"解析： " + data1[4].jiexi + "</h4>";
			} else {
				document.querySelectorAll(".entrance-bottom-frame-line-button")[19].style.backgroundColor =
					'#FF3333'
				document.querySelectorAll(".entrance-bottom-frame-line-button")[Number(data1[4].choice) + 15].style
					.backgroundColor = '#00FF00'
				document.getElementById("divids5").innerHTML = "<h4>" + "答案： " + zhuanhuan(data1[4].choice) +
					"<br/>" +
					"解析： " + data1[4].jiexi + "</h4>";
			}

			if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
				frame_left += -100
				setTimeout(function() {
					document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
					timu_id++;
					select1++;
					document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 +
						"</div>" +
						"/" + timu +
						" 题"
					// 显示新的题目
					addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
					// 老的题目删除掉
					removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1],
						active)
				}, 1000);
			} else {

			}

		

		}

		// if()


	}
	

}

// 显示新题目
function addClass(obj, cls) {
	var obj_class = obj.className,
		blank = (obj_class != '') ? ' ' : '';
	added = obj_class + blank + cls;
	obj.className = added;
}

// 删除题目
function removeClass(obj, cls) {
	var obj_class = ' ' + obj.className + ' ';
	obj_class = obj_class.replace(/(\s+)/gi, ' '),
		removed = obj_class.replace(' ' + cls + ' ', ' ');
	removed = removed.replace(/(^\s+)|(\s+$)/g, '');
	obj.className = removed;
}

function hasClass(obj, cls) {
	var obj_class = obj.className,
		obj_class_lst = obj_class.split(/\s+/);
	x = 0;
	for (x in obj_class_lst) {
		if (obj_class_lst[x] == cls) {
			return true;
		}
	}
	return false;
}
