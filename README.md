# 基于H5+MUI+Flask+MongoDB 的答题移动端软件

#### 一个类似于学习强国的离线抽题系统(功能相对学习强国更加强大)


#### 软件架构

本项目采用H5+MUI框架的webapp开发

后端采用Flask作为接口

数据库：MongoDB

#### 安装教程

1.首先在如下路径：package/2022054790-安装包.apk

2.获取到本项目安装包，使用操作系统为Android/HarmonyOS的手机安装即可。
#### 后端配置说明
后端源码在：
1.主要环境要求

Python==3.8.1

Flask==1.1.2

pymongo==3.12.0

MongoDB==4.4.6

2.配置MongoDB数据库

1.切换到 admin 数据库  use admin

2.给admin设置用户密码，设置用户的权限

3.切换到demo库

4.为demo库添加一个用户，并且赋予权限

5.重新开机mongodb，通过增加 –auth 开启安全登录

6.bindIp修改为 0.0.0.0 允许外网访问

7.authorization 修改为 enabled 开启认证

8.重启mongodb服务

#### 使用说明
1.首先在如下路径：app_houduan 获取到源码。

2.解压项目文件，保证Python环境满足上文环境要求。

3.将项目文件里的三个py文件拖拽到PythonIDE内，修改连接MongoDB数据库的ip以及端口信息等。

4.运行项目。

#### 作品效果图

等我后期把截图传到我的服务器里。

#### 参与贡献

开发人员：
朱博，郭洪全，张钰

#### 项目组
小伙伴留下自己的邮箱：

xiaozhu 241900086@qq.com

dahezhiquan 3390205563@qq.com

zhangyu 983769116@qq.com

如果对您有帮助，请点个star支持一下！