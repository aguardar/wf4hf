##项目文档
[项目文档]框架采用的是[sphinx],文档直接部署在github上面，由[readthedocs]自动生成,操作过程如下
    
* 在python 中pip安装sphinx  
* 新建一个sphinx文档项目，拷贝到doc目录下，然后push到github  
* 注册[readthedocs]账号，然后新建文档，选择从github导入，按照提示输入项目地址，会自动生成文档。
* 以后只需要编写rst文档然后push就可以了，github自身也支持显示rst文档

##hackrf测试
周二拿到了hackrf硬件，晚上回到家就开始兴奋的测试，结果很曲折。

* 第一天ubuntu下gqrx没有检测到硬件，发现livecd是有问题的，然后又跑到xp下去测试，结果驱动貌似存在问题。
* 第二天又重新安装了ubuntu，重新配置[gnuradio]环境，这回结果很好，终于检测到硬件了，但悲剧的是[gqrx]测试始终接收不到fm信号。后来把天线放到了窗户边上，终于有声音了。。。
* 第三天mac下配置[gnuradio]环境，这回顺利了很多，[gqrx]下信号很清晰
* 第四天测试[py-hackrf],结果很悲剧，不能用，貌似是pyusb的问题。

##界面
看资料发现了一个叫做[webradio]的sdr平台，适用于rtl-sdr 。感觉界面还可以，就拿来了稍微做了一下修改，放到了[项目主页]上面,同时修改通讯方式，用跨域技术将前端界面与服务端程序彻底分离，服务端只用来处理ajax请求，返回json格式数据，前端固定在github上。测试方法如下：

* 在本机或hackrf的host机器上打开服务端程序，比如在本机使用django，则可以在命令行中使用python manage.py runserver 0.0.0.0:9999
* 使用chrome打开[界面]，按F12打开开发者工具，进入console。
* 在console中输入com.sethostaddress("127.0.0.1","9999"),这表示要与本机通讯，如果host地址不在本机可以设置成host对应的ip和服务端程序所占用的端口号
* 然后com.test()，观察反馈结果，通讯成功会反回消息。

注：默认不配置ip和端口号的情况下，与本机9999端口通讯。

##集成libhackrf
本来以为集成libhackrf对python而言是一件很简单的事情，结果发现并不是那么回事。

* 现成有[py-hackrf],结果测试后发现[py-hackrf]不能用
* 自己尝试用ctypes集成libhackrf，结果失败
* 仿照[pyrtlsdr]用ctypes集成libhackrf,结果失败
* 查看[shinysdr]代码，发现其是需要依赖[gnuradio]，考虑到以后服务端要在树梅派等配置较低的嵌入式设备中使用，所以暂时不考虑依赖[gnuradio]的方法
* 目前还可以考虑的方法有两种
   
   * 根据现有的libhackrf代码再做一个相对简单的lib，然后用ctypes集成。  
   * 用c对python进行扩展
   
按照现在的进度来看集成libhackrf可能不能按照计划完成了。


##工作日志
2014.7.20

* 尝试集成libhackrf，编写报告[Week_2]

2014.7.19

* 仿[webradio]制作初级界面，并修改通讯框架，利用跨域技术实现前端与服务端彻底分离，并且利用github pages服务将前端布置在[项目主页]上

2014.7.15-18

* 拿到hackrf硬件进行测试


2014.7.14

* 配置[项目文档]框架

## 问题记录

* 配置gnuradio环境最好从头开始配置，windows最好选择win7环境
* [py-hackrf]不能用
* ctypes集成libhackrf最关键的是构建hackrf_device结构体。
* mac下和linux下libhackrf的名字不同，存放的位置也不同




[项目文档]:http://wf4hf.readthedocs.org/en/latest/
[sphinx]:http://sphinx-doc.org/
[readthedocs]:https://readthedocs.org/
[gnuradio]:http://gnuradio.org/redmine/projects/gnuradio/wiki
[gqrx]:https://github.com/csete/gqrx
[py-hackrf]:https://github.com/hathcox/py-hackrf.git
[webradio]:https://github.com/mikestir/webradio
[项目主页]:http://aguardar.github.io/wf4hf/
[界面]:http://aguardar.github.io/wf4hf/ui.html
[pyrtlsdr]:https://github.com/roger-/pyrtlsdr
[shinysdr]:https://github.com/kpreid/shinysdr
[Week_2]:https://github.com/aguardar/wf4hf/blob/master/report/Week_2.md
