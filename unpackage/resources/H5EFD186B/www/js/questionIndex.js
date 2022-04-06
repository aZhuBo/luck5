function TiMu() {
    for (var i in data1) {
        var div = document.createElement("div");
        div.className = "entrance-bottom-frame-line";
        document.querySelector(".entrance-bottom-frame").appendChild(div);


        var div2 = document.createElement("div");
        div2.className = "entrance-bottom-frame-line-title";
        div2.innerHTML = data1[i].title;
        document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div2);


        var divli1 = document.createElement("div");
        divli1.innerHTML = parseInt(i) + 1;

        var timu = 1
        for (var j in data1[i].xuanxiang) {
            var div3 = document.createElement("div");
            div3.className = "entrance-bottom-frame-line-button";
            var div3_id = document.createElement("div");
            div3_id.className = "entrance-bottom-frame-line-button-id";
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
            div4.innerHTML = data1[i].xuanxiang[j];
            div3.appendChild(div3_id)
            div3.appendChild(div4);
            document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div3);
            timu++
        }
    }
    mintime = 1;
    var dact = document.querySelector(".entrance-bottom-frame-line")
    var active = "active"
    var none = "none"
    addClass(dact, active)
    var timu_id = 0
    var select1 = 1
    var frame_left = 0
    document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
    document.querySelector(".topic-frameli").innerHTML = "第" + "<div>" + select1 + "</div>" + "/" + timu + " 题"
    for (var i = 0; i < document.querySelectorAll(".entrance-bottom-frame-line-button").length; i++) {
        document.querySelectorAll(".entrance-bottom-frame-line-button")[i].onclick = function () {
            if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
                frame_left += -100
                document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

                timu_id++;
                select1++;
                document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu + " 题"
                addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
                removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)
            } else {
                alert("答题完成！！！")
            }
        }
    }
}

function addClass(obj, cls) {
    var obj_class = obj.className,
        blank = (obj_class != '') ? ' ' : '';
    added = obj_class + blank + cls;
    obj.className = added;
}

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


var data1 = [{
    "id": "1",
    "title": "1. 世界上最聪明的人是",

    "xuanxiang": [
        "朱博",
        "张钰",
        "张然",
        "崔文昊",
    ]

}, {
    "id": "2",
    "title": "Mysql使用什么对数据库进行索引分析",

    "xuanxiang": [
        "index",
        "explain",
        "update",
        "show index",
    ]
}, {
    "id": "3",
    "title": "特朗普的国籍",

    "xuanxiang": [
        "中国",
        "日本",
        "赞比亚",
        "乌克兰",
    ]
}, {
    "id": "4",
    "title": "HTML的引入框架的标签",

    "xuanxiang": [
        "div",
        "span",
        "iframe",
        "p",
    ]
}, {
    "id": "5",
    "title": "噫吁嚱，危乎高哉！蜀道之难，难于上青天！出自于那一篇名著",

    "xuanxiang": [
        "《离骚》",
        "《蜀道难》",
        "《大河》",
        "《望庐山瀑布》",
    ]
}
];
        
