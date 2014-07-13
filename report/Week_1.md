##解决方案
> 项目要求的解决方案是用[node]实现，我提出的方案是服务端使用[django]，其实无论采用哪种技术，技术实现的思路都大同小异，相比较而言服务端使用[django]能更容易实现一些，能将精力集中于业务逻辑的处理上，[node]更适合实际应用，尤其是在硬件配置不高的嵌入式设备中，但可以利用的资源较少。


------ 
##前端与服务端通讯方式
>为了使前端能够方便的与不同的服务端相结合，前端与服务端通过[ajax]通讯，[com.js]里面封装javascript的通讯api，目前里面只有一个test方法。

###测试方法
>测试之前确认电脑中已经安装好python和django
>
>git clone https://github.com/aguardar/wf4hf.git
>
>cd wf4hf
>
>cd wf4hf
>
>python manage.py runserver 127.0.0.1:9999
>
>打开chrome浏览器地址栏中输入localhost:9999，请先不要在意界面长啥样，接着往下走
>
>按F12，浏览器下方出现console，在输入框中输入com.test()然后回车
>
>其他的api尚需扩展后才能测试


## 工作日志
------
2014.7.10
>* 阅读[libhackrf]与[py-hackrf]源代码
>* 查找js的fft实现代码，参考项目：[jsfft]
>* [shinysdr]环境搭建失败，想看一下这个项目UI是什么样子

2014.7.9  
>* 创建项目
>* 完成前端与服务端通讯框架
>* 目前服务端用的是django 

------
##问题记录
------ 

>* [shinysdr]环境搭建失败
>* linux下python2.7中测试时json编码有问题（升级解决） 

------
##下一步
------ 
>* 前端界面规划与编码
>* 前端js api的扩充
>* 服务端集成libhackrf并封装成服务端api
>* 丰富前端界面，实现业务逻辑
>* 前端优化
>* 实际硬件环境的测试
>* 编写报告与教程



[jsfft]:https://github.com/dntj/jsfft
[libhackrf]:https://github.com/mossmann/hackrf/tree/master/host/libhackrf/src
[py-hackrf]:https://github.com/hathcox/py-hackrf
[shinysdr]:https://github.com/kpreid/shinysdr
[com.js]:../wf4hf/html/static/js/com.js
[ajax]:http://baike.baidu.com/subview/1641/5762264.htm?fr=aladdin
[node]:https://github.com/joyent/node
[django]:https://github.com/django/django

