
//切换年份（所选年份变蓝出现下划线）
$('.items-scroll').on('click', '.item', function () {
  $(this).addClass('type').siblings().removeClass('type')
  $(this).find('.normal').addClass('wink')
  $($(this).siblings()).find('.normal').removeClass('wink')
  // _flag1 = 1;
  // currPageNum1 = 1;
})
//获取年份
/*
* a ： 获取今天的年份及日期
* b ： 获取当前年份
* c ： 获取当前月份
* rc : 获取的月份（因为显示的是减一的 但算的是用正常的算的 所以这里设置2个变量）
* */
getYear();
function getYear() {
  var a = new Date();
  var b = a.getFullYear();
  var c = a.getMonth();
  var rc = c + 1;
  var html1 = ``;
  $('.items-scroll').empty();
  //一次展示往后5月的日历
  for (var i = 0; i < 5; i++) {
    //如果5月后的月数大于12
    if (rc + i <= 12) {
      //如果5月后的月数小于10（主要用于保持月份格式是2位数）
      if(rc + i <10) {
        var rc3 = rc + i
        html1 = `<div class="item" data-year="${b}" data-month="${rc3}" onclick="getCalendar(this,${b},${rc3})">${b}.${'0'+rc3}<div class="normal "></div>
        </div>`
      } else {
        html1 = `<div class="item" data-year="${b}" data-month="${rc+i}" onclick="getCalendar(this,${b},${rc+i-1})">${b}.${rc+i}<div class="normal "></div>
        </div>`
      }
    } else {
      var rc2 = rc + i - 12;
      html1 = `<div class="item" data-year="${b+1}" data-month="${rc2}" onclick="getCalendar(this,${b+1},${rc2-1})">${b+1}.${'0'+rc2}<div class="normal "></div>
      </div>`
    }
    $('.items-scroll').append(html1)
  }
  getCalendar('', b, c);
  $($(".items-scroll").children("div").get(0)).addClass('type');
  $($(".items-scroll").children("div").children("div").get(0)).addClass('wink');
}
//生成日历
function getCalendar(obj, b, c) {
  $('.d_content1').empty();
  var T_today = new Date();
  var T_year = T_today.getFullYear();
  var T_month = T_today.getMonth() + 1;
  var T_date = T_today.getDate();
  var list1 = []
  var list2 = []
  var list3 = []
  var list1s = []
  var list2s = []
  var list3s = []
  console.log(T_date)
  if (obj == '') {
    _year = new Date().getFullYear();
    _month = new Date().getMonth() + 1;
  } else {
    _year = Number($(obj).attr('data-year'));
    _month = Number($(obj).attr('data-month'));
  }
  if (_month < 10) {
    _month = '0' + _month;
  }
  console.log(_year, _month)
  $('.d_content2').empty();
  var listMonth = new Array(31, 28 + lYear(b), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
  //计算处理月第一天是周几
  var mD1 = new Date(b, c, 1);
  //md1 ：星期几   mD1：日期格式
  var md1 = mD1.getDay();
  //计算日历行数
  tr_str = Math.ceil((md1 + listMonth[c]) / 7);
  // $.ajax({
  //   url: '/user-api/teacher/course/list',
  //   type: 'get',
  //   success: function (res) {
  //     $('.d_content2').empty();
  //     console.log(res);
  //     $.each(res.result, function (index, item) {
  //       if (item.state == "已授课") {
  //         list1.push(item.date);
  //       } else if (item.state == "待授课") {
  //         list2.push(item.date);
  //       } else if (item.state == "待预约" || item.state == "待审核" || item.state == "已取消") {
  //         list3.push(item.date);
  //         console.log(list3)
  //       }
  //     })
  //     for (var i = 0; i < list1.length; i++) {
  //       if ($.inArray(list1[i], list1s) == -1) {
  //         list1s.push(list1[i]);
  //       }
  //     }
  //     for (var i = 0; i < list2.length; i++) {
  //       if ($.inArray(list2[i], list2s) == -1) {
  //         list2s.push(list2[i]);
  //       }
  //     }
  //     for (var i = 0; i < list3.length; i++) {
  //       if ($.inArray(list3[i], list3s) == -1) {
  //         list3s.push(list3[i]);
  //       }
  //     }
  //     console.log('已：' + list1s, '待上:' + list2s, '待预约' + list3s)
  //     for (var i = 0; i < tr_str; i++) {
  //       var html2 = `<div class=date_Dates>`
  //       for (var k = 0; k < 7; k++) {
  //         inx = i * 7 + k;
  //         data_str = inx - md1 + 1;
  //         if (data_str < 10) {
  //           data_str2 = '0' + data_str;
  //         } else {
  //           data_str2 = data_str;
  //         }
  //         if (data_str <= 0 || data_str > listMonth[c]) {
  //           // 空的星期
  //           html2 = html2 + `<div class="date_Date2"><div class=course_state></div></div>`
  //         } else if (_year == T_year && _month == T_month && T_date == data_str) {
  //           //今天
  //           html2 = html2 + `<div class="date_Date3" onclick=addwrap(${_year},${_month},${data_str})>${data_str}<div class=course_state>今日</div></div>`
  //         } else {
  //           //待上课
  //           $.each(list2s, function (index, item) {
  //             // console.log(item)
  //             // console.log(_year + '-' + _month + '-' + data_str)
  //             if (item == _year + '-' + _month + '-' + data_str2) {
  //               html2 = html2 + `<div class="date_Date4" onclick=addwrap(${_year},${_month},${data_str})>${data_str}<div class=course_state2>有课</div></div>`
  //             }
  //           })
  //           //已上课
  //           $.each(list1s, function (index, item) {
  //             // console.log(item)
  //             // console.log(_year + '-' + _month + '-' + data_str)
  //             if (item == _year + '-' + _month + '-' + data_str2) {
  //               html2 = html2 + `<div class="date_Date" onclick=addwrap(${_year},${_month},${data_str})>${data_str}<div class=course_state>已上课</div></div>`
  //             }
  //           })
  //           //待预约
  //           $.each(list3s, function (index, item) {
  //             // console.log(item)
  //             // console.log(_year + '-' + _month + '-' + data_str)
  //             if (item == _year + '-' + _month + '-' + data_str2 && list2s.indexOf(item) < 0 && list1s.indexOf(item) < 0) {
  //               html2 = html2 + `<div class="date_Date" onclick=addwrap(${_year},${_month},${data_str})>${data_str}<div class=course_state>有课</div></div>`
  //             }
  //           })
  //           let _tDate = _year + '-' + _month + '-' + data_str2;
  //           if (list2s.indexOf(_tDate) < 0 && list1s.indexOf(_tDate) < 0 && list3s.indexOf(_tDate) < 0 && data_str < T_date && _month == T_month) {
  //             html2 = html2 + `<div class="date_Date">${data_str}<div class=course_state4>无课</div></div>`
  //           } else if (list2s.indexOf(_tDate) < 0 && list1s.indexOf(_tDate) < 0 && list3s.indexOf(_tDate) < 0) {
  //             html2 = html2 + `<div class="date_Date4" onclick=addwrap(${_year},${_month},${data_str})>${data_str}<div class=course_state4>无课</div></div>`
  //           }
  //         }
  //         // 正常星期内容
  //       }
  //       html2 = html2 + `</div>`
  //       $('.d_content2').append(html2);
  //     }
  //   },
  //   complete: function () {
  //     $('.d_content1').empty();
  //     $('.zbox-toast-container').fadeOut()
  //   }
  // })
  //动态渲染日历盒子
  for (var i = 0; i < tr_str; i++) {                    //日历有多少行
    var html2 = `<div class=date_Dates>`               //每行插入的html代码
    for (var k = 0; k < 7; k++) {                     //每行7天
      inx = i * 7 + k;
      data_str = inx - md1 + 1;                         //日期数字
      if (data_str <= 0 || data_str > listMonth[c]) {
        // 空的星期
        html2 = html2 + `<div class="date_Date2"><div class=course_state></div></div>`
      } else if (_year == T_year && _month == T_month && T_date == data_str) {
        //今天
        html2 = html2 + `<div class="date_Date3" onclick=console.log(${_year},${_month},${data_str})>${data_str}<div class=course_state>今日</div></div>`
      } else {
        let _tDate = _year + '-' + _month + '-' + data_str;
        if (list2s.indexOf(_tDate) < 0 && list1s.indexOf(_tDate) < 0 && data_str < T_date && _month == T_month) {      //今天之前的无课样式
          html2 = html2 + `<div class="date_Date" onclick=console.log(${_year},${_month},${data_str})>${data_str}<div class=course_state4>题小满</div></div>`
        } else if (list2s.indexOf(_tDate) < 0 && list1s.indexOf(_tDate) < 0) {
          html2 = html2 + `<div class="date_Date4" onclick=console.log(${_year},${_month},${data_str})>${data_str}<div class=course_state4>加油</div></div>`
        }
      }
      // 正常星期内容
    }
    html2 = html2 + `</div>`
    //在循环体中，每一行有7个盒子，所以在一行内生成7次dom元素，再一起添加到父盒子中
    $('.d_content1').append(html2);
  }
}
//判断闰年
function lYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 100 === 0 && year % 400 === 0) { //能被4整除且不能被100整除 ，能被100整除且能被400整除
    return 1
  } else {
    return 0
  }
}