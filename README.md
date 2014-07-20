# 实施计划
>* 7月10日之前：搭建开发环境，熟悉项目现有代码，跟导师做详细沟通
>* 7月11日～7月21日：初步实现django与libhackrf的集成
>* 7月22日～7月25日：初步实现FFT显示的功能
>* 7月26日～7月31日： 实现瀑布图的功能
>* 8月1日～8月3日：撰写中期报告
>* 8月4日～8月8日：配合中间检查，准备下一个月工作
>* 8月9日～8月22日：基于javascript实现FM/AM/SSB的解调功能
>* 8月22日～8月29日：优化网页前端，使得网页能够在ios等移动设备的浏览器上正常运行
>* 8月30日～9月3日： 在Raspberry Pi上优化性能
>* 9月4日～9月7日：发布代码，发布教程，撰写结题报告



# 工作日志
------


2014.7.20
>* 尝试集成libhackrf，编写报告[Week_2]

2014.7.19
>* 仿[webradio]制作初级界面，并修改通讯框架，利用跨域技术实现前端与服务端彻底分离，并且利用github pages服务将前端布置在[项目主页]上

2014.7.15-18
>* 拿到[hackrf]硬件进行测试


2014.7.14
>* 配置项目[文档]框架


2014.7.13
>* 编写报告[week_1]


2014.7.12
>* 拿到与[Raspberry Pi]类似的一个开发板[BeagleBone Black]并进行测试，发现很完美，自带的系统已经集成了[Cloud9]

2014.7.11
>* 重装系统，配置gnuradio环境

2014.7.10
>* 阅读[libhackrf]与[py-hackrf]源代码
>* 查找js的fft实现代码，参考项目：[jsfft]
>* [shinysdr]环境搭建失败，想看一下这个项目UI是什么样子

2014.7.9  
>* 创建项目
>* 完成前端与服务端通讯框架，目的是为了使前端能够方便的与不同的服务端程序结合
>* 目前服务端用的是django 

------
#问题记录
------ 

>* [csdncode] 第三方账户push有问题（把项目建到[github]，然后导入[csdncode]） 
>* [shinysdr]环境搭建失败
>* linux下python2.7中测试时json编码有问题（升级解决）



------
#下一步
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
[Raspberry Pi]:http://www.raspberrypi.org/
[BeagleBone Black]:http://beagleboard.org/black
[Cloud9]:https://github.com/ajaxorg/cloud9
[week_1]:https://github.com/aguardar/wf4hf/blob/master/report/Week_1.md
[csdncode]:https://code.csdn.net/
[github]:https://github.com/
[文档]:http://wf4hf.readthedocs.org/en/latest/
[hackrf]:https://github.com/mossmann/hackrf
[webradio]:https://github.com/mikestir/webradio
[项目主页]:http://aguardar.github.io/wf4hf/
[Week_2]:https://github.com/aguardar/wf4hf/blob/master/report/Week_2.md
