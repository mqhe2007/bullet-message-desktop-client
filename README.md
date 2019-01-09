# 子弹短信跨平台客户端

> 注意：此项目非官方项目，如有侵权请联系 122274389@qq.com

## [子弹短信](https://www.zidanduanxin.com/)

子弹短信是一款高效的聊天软件，语音与文字的结合让你的信息随心所达，强大的全局悬浮球、贴心的稍后处理机制、便捷的引用回复等多项功能给你高效的聊天体验。

子弹短信，让你的信息一触即发。

## 说明

> 避免大家误会，再次声明：本项目只是一个壳子，内容提供者仍是子弹短信官方页面。

虽然子弹短信的网页版功能已经很强大了，但是像我这样经常清理浏览器页签的人来说，常驻的一个页签就像是一个皮肤上的🐒，总忍不住想扣掉。

所以借用electron提供一个全平台的web桌面运行容器来打开官方web版页面。毕竟……还是比常驻在浏览器页签中舒服一些。由于对electron还不熟悉，没做什么功能，大家有什么想法可以提issues。

等到官方客户端诞生之日，本项目也就寿终正寝了。

## 预览

![screenshot1](https://github.com/mqhe2007/bullet-message-desktop-client/raw/master/screenshot/s1.png)

![screenshot2](https://github.com/mqhe2007/bullet-message-desktop-client/raw/master/screenshot/s2.png)

![screenshot3](https://github.com/mqhe2007/bullet-message-desktop-client/raw/master/screenshot/s3.png)

![screenshot4](https://github.com/mqhe2007/bullet-message-desktop-client/raw/master/screenshot/s4.png)

## 安装

### 下载安装包

普通用户可以选择直接[下载安装包](https://github.com/mqhe2007/bullet-message-desktop-client/releases)进行安装使用。

### 源码构建

```
// 获取项目
git clone https://github.com/mqhe2007/bullet-message-desktop-client.git

// 安装依赖，此过程最好挂上代理
yarn

// 构建，此过程最好挂上代理
yarn dist
```

在dist目录中选择相应平台的安装包进行安装。

## 协议

本客户端仅为web页面容器，容器部分使用MIT协议授权；登录表单，聊天界面等内容由子弹短信官方提供，版权归子弹短信所有。

本项目开源免费，不会窃取用户任何信息，接受监督，所以本项目不承担因用户自身或第三方原因导致的信息泄露责任。