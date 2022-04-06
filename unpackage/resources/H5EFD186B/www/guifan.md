# 开发规范
--------------------------------------------------------------------------------------------------
## 前端开发规范：
1.div个数匹配，匹配的div的缩进要保持一致

2.不同的div功能内容要做前后注释，例如QQ号展示部分
```
<!-- QQ号展示开始 -->
<div>QQ号展示</div>
<!-- QQ号展示结束 -->
```
3.不用的功能部分要有断行做区分，例如两个不同的div功能
```
<!-- QQ号展示开始 -->
<div>QQ号展示</div>
<!-- QQ号展示结束 -->

<!-- xxx开始 -->
<div>xxx</div>
<!-- xxx结束 -->
```
4.复杂或难以理解的div功能要做单步注释，注释可以选择在行尾注释，或在每步的上方注释，上方注释要与此步的缩进保持一致

5.CSS的引用要写在head里，JS的引用要写在body最下方，分管不用功能的CSS与JS引用做注释标记闭并段行区分，
CSS与JS的引用要写在一起
例如
```
<!--iframe 导航栏CSS-->
<link rel="stylesheet" href="{% static 'assets/css/bootstrap.min.css' %}">
<link rel="stylesheet" href="{% static 'assets/css/boxicons.min.css' %}">
<link rel="stylesheet" href="{% static 'assets/css/owl.carousel.min.css' %}">
<link rel="stylesheet" href="{% static 'assets/css/owl.theme.default.min.css' %}">
<link rel="stylesheet" href="{% static 'assets/css/meanmenu.css' %}">
<link rel="stylesheet" href="{% static 'assets/css/indexstyle.css' %}">

<!--页面动画CSS-->
<link rel="stylesheet" href="{% static 'xxx/css/xxx.min.css' %}">
```
6.具有相同功能的div或ul,li要具有相同的缩进