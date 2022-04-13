function TiMu(data1) {

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
	}
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
	document.querySelector(".topic-frameli").innerHTML = "第" + "<div>" + select1 + "</div>" + "/" + timu + " 题"


	// 题目阵开始
	// 1
	document.querySelectorAll(".entrance-bottom-frame-line-button")[0].onclick = function() {
		questionChoice[0] = 1;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}

	// 2
	document.querySelectorAll(".entrance-bottom-frame-line-button")[1].onclick = function() {
		questionChoice[0] = 2;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}

	// 3
	document.querySelectorAll(".entrance-bottom-frame-line-button")[2].onclick = function() {
		questionChoice[0] = 3;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}

	// 4
	document.querySelectorAll(".entrance-bottom-frame-line-button")[3].onclick = function() {
		questionChoice[0] = 4;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}
	// 5
	document.querySelectorAll(".entrance-bottom-frame-line-button")[4].onclick = function() {
		questionChoice[1] = 1;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}
	// 6
	document.querySelectorAll(".entrance-bottom-frame-line-button")[5].onclick = function() {
		questionChoice[1] = 2;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}
	// 7
	document.querySelectorAll(".entrance-bottom-frame-line-button")[6].onclick = function() {
		questionChoice[1] = 3;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}
	// 8
	document.querySelectorAll(".entrance-bottom-frame-line-button")[7].onclick = function() {
		questionChoice[1] = 4;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}
	// 9
	document.querySelectorAll(".entrance-bottom-frame-line-button")[8].onclick = function() {
		questionChoice[2] = 1;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}
	// 10
	document.querySelectorAll(".entrance-bottom-frame-line-button")[9].onclick = function() {
		questionChoice[2] = 2;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}
	// 11
	document.querySelectorAll(".entrance-bottom-frame-line-button")[10].onclick = function() {
		questionChoice[2] = 3;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}
	// 12
	document.querySelectorAll(".entrance-bottom-frame-line-button")[11].onclick = function() {
		questionChoice[2] = 4;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}
	// 13
	document.querySelectorAll(".entrance-bottom-frame-line-button")[12].onclick = function() {
		questionChoice[3] = 1;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}
	// 14
	document.querySelectorAll(".entrance-bottom-frame-line-button")[13].onclick = function() {
		questionChoice[3] = 2;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}
	// 15
	document.querySelectorAll(".entrance-bottom-frame-line-button")[14].onclick = function() {
		questionChoice[3] = 3;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}
	// 16
	document.querySelectorAll(".entrance-bottom-frame-line-button")[15].onclick = function() {
		questionChoice[3] = 4;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			alert("答题完成！！！")
		}
	}
	// 17
	document.querySelectorAll(".entrance-bottom-frame-line-button")[16].onclick = function() {
		questionChoice[4] = 1;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			
		}
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
		console.log(afterChoice);
		console.log(questionChoice);
		// alert("本次得分1："+sum+'分',function(){
		// 	alert("xxxx");
		//     //window.location.href = "../index.html";
		// })
		alert("本次得分：" + sum + '分');
		mui.openWindow({
			createNew: true,
			url: '../index.html', //通过URL传参
		})
		mui.post('http://81.70.23.51:5555/jifeng', {
			"jifeng": sum,
		}, function da1(da1) {
			mui.toast(da1.mag);
			console.log(JSON.stringify(da1));
		}, 'json');
	}
	// 18
	document.querySelectorAll(".entrance-bottom-frame-line-button")[17].onclick = function() {
		questionChoice[4] = 2;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			
		}
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
		console.log(afterChoice)
		console.log(questionChoice)
		alert("本次得分：" + sum + '分');
		mui.openWindow({
			createNew: true,
			url: '../index.html', //通过URL传参
		})
		mui.post('http://81.70.23.51:5555/jifeng', {
			"jifeng": sum,
		}, function da1(da1) {
			mui.toast(da1.mag);
			console.log(JSON.stringify(da1));
		}, 'json');
	}
	// 19
	document.querySelectorAll(".entrance-bottom-frame-line-button")[18].onclick = function() {
		questionChoice[4] = 3;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			
		}
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
		console.log(afterChoice)
		console.log(questionChoice)
		alert("本次得分：" + sum + '分');
		mui.openWindow({
			createNew: true,
			url: '../index.html', //通过URL传参
		})
		mui.post('http://81.70.23.51:5555/jifeng', {
			"jifeng": sum,
		}, function da1(da1) {
			mui.toast(da1.mag);
			console.log(JSON.stringify(da1));
		}, 'json');
	}
	// 20
	document.querySelectorAll(".entrance-bottom-frame-line-button")[19].onclick = function() {
		questionChoice[4] = 4;

		if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
			frame_left += -100
			document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

			timu_id++;
			select1++;
			document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu +
				" 题"

			// 显示新的题目
			addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
			// 老的题目删除掉
			removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
		} else {
			
		}
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
		console.log(afterChoice);
		console.log(questionChoice);
		alert("本次得分：" + sum + '分');
		mui.openWindow({
			createNew: true,
			url: '../index.html', //通过URL传参
		})
		mui.post('http://81.70.23.51:5555/jifeng', {
			"jifeng": sum,
		}, function da1(da1) {
			mui.toast(da1.mag);
			console.log(JSON.stringify(da1));
		}, 'json');
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
// 题目列表，从数据库中获取
