##FFT
FFT的js实现文件以前就已经上传了，来源于[jsfft]，但尚未彻底集成起来，因为服务端还没有完全整合好libhackrf。
##集成libhackrf
目前还在进行中，决定用c扩展python的方式进行。实在不行再依赖gnuradio，我自己电脑给ubuntu划分了8G的空间，在安装gnuradio的过程中提示空间不足，如果在树莓派这样的设备中使用gnuradio太占资源了。所以还是先不考虑依赖gnuradio
##工作日志
2014.7.21-27

* 学习python扩展并尝试进行扩展
* 研究[webradio]

最近事情有点多，就先写这些吧
[jsfft]:https://github.com/dntj/jsfft
[webradio]:https://github.com/mikestir/webradio
