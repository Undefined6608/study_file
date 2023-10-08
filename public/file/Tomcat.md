# Tomcat

## 1、Tomcat服务器和Servlet版本和Java版本的对应关系

当前企业常用的版本 7.\*/8.\*

![屏幕截图_20221110_161723](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_161723.png)

Servlet程序从2.5版本是现在世面使用最多的版本

到了Servlet3.0之后。就是注解版本的Servlet使用。

## 2、Tomcat的使用

#### 1>Tomcat安装

找到你需要雨的Tomcat版本对应的zip压缩包，解压到需要安装的目录即可。

#### 2>目录介绍

| 目录    | 用途                                                         |
| ------- | ------------------------------------------------------------ |
| bin     | 专门用来存放Tomcat服务器的可执行程序                         |
| conf    | 专门用来存放Tomcat服务器的配置文件                           |
| lib     | 专门用来存放Tomcat服务器的jar包                              |
| logs    | 专门用来存放Tomcat服务器运行时输出的日志信息                 |
| temp    | 专门用来存放Tomcat服务器运行时的临时数据                     |
| webapps | 专门用来存放部署的Web工程                                    |
| work    | 专门用来存放Tomcat服务器运行时jsp翻译为Servlet的源码，和Session钝化（序列化）的目录 |

#### 3>如何启动Tomcat服务器

找到Tomcat目录下的bin目录下的startup.bat文件，双击，就可以启动Tomcat服务器。

**如何测试Tomcat服务器启动成功？？？**

打开浏览器，在浏览器地址栏中输入以下地址测试：

​	1、http://localhost:8080

​	2、http://127.0.0.1:8080

​	3、http://ip:8080

```bash
#ip查询
#Win+R 输入：cmd回车,输入
ipconfig
#ipv4地址就是ip
```

![屏幕截图_20221109_170950](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221109_170950.png)

**当出现以下界面，说明Tomcat服务器启动成功！！！**

![屏幕截图_20221109_165749](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221109_165749.png)

**常见的启动失败的情况有，双击startup..bat文件，就会出现一个小黑窗口一闪而过。这个时候，失败的原因基本上都是因为没有配置好AVA_HOME环境变量。**

![屏幕截图_20221109_171738](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221109_171738.png)

**常见的AVA_HOME配置错误有以下几种情况：**

​	一、JAVA_HOME必须全大写

​	二、JAVA_HOME中间必须是下刻线，不是减号-

​	三、JAVA_HOME配置的路径只需要配置到jdk的安装目录即可。不需要带上bin目录。

**另一种启动Tomcat服务器的方法**

1、打开命令行
		2、cd到你的Tomcat的bin目录下

![屏幕截图_20221110_093146](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_093146.png)

3、敲命令：

```bash
#带错误信息的启动
catalina run
```

#### 4>Tomcat的停止

1、点击Tomcat服务器窗口的关闭按钮

2、把Tomcat服务器窗口置为当前窗口，然后按快捷键Ctrl+C

3、找到Tomcat的bin目录下的shutdown.bat双击，就可以停止Tomcat服务器

#### 5>如何修改Tomcat的端口号

MySql默认端口号为：3306

Tomcat默认端口号是：8080

找到Tomcat目录下的conf目录，找到server.xml

![屏幕截图_20221110_140848](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_140848.png)

**<u>修改完端口号，一定要重启Tomcat服务器</u>**

平时上百度：http://www.baidu.com:80

http协议默认端口为80

#### 6>如何部署web工程到Tomcat中

方法一：只需要把web工程的目录拷贝到Tomcat的webapps目录下即可。

​	1、在webapps目录下创建一个book工程：

![屏幕截图_20221110_141743](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_141743.png)

​	2、把book的内容拷贝到里面

![屏幕截图_20221110_142141](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_142141.png)

​	3、如何访问Tomcat下的web工程

​		在浏览器输入http://ip:port/工程名/目录名/文件名

方法二：

找到Tomcat目录下的conf\Catalina\localhost目录下，创建如下的xml配置文件(**<u>格式必须为：UTF-8</u>**)

​	![屏幕截图_20221110_143839](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_143839.png)

```xml
<!-- Context表示一个工程上下文
 		path：表示工程访问路径：/(字母或者下划线)
		docBase：表示你的工程路径物理位置(从盘符开始)
-->
<Context path="/abc" docBase="E:\IdeaProjects\JavaWeb\out\artifacts\webo3_war_exploded" />
```

访问这个工程的路径如下：http://ip:port/abc/目录名/文件名

#### 7> 手托html页面到浏览器和在浏览器中输入 http://ip:prot/工程名/访问的区别

1、手托html页面到浏览器，这个时候浏览器中的地址如下：

![屏幕截图_20221110_144621](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_144621.png)

​		观察上图，我们发现，它使用的协议为file://协议。

​		file协议表示告诉浏览器直接读取file://协议后面的路径，解析展示在浏览器上即可。

2、http://ip:prot/工程名/目录名/文件名进行访问，这个时候浏览器中的地址如下：

![屏幕截图_20221110_145004](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_145004.png)

​		所使用的协议为http协议。背后的原理完全不同

![屏幕截图_20221110_145555](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_145555.png)

#### 8>ROOT的工程的访问，以及默认index.html页面的访问

当我们在浏览器地址栏输入访问地址如下：

http://ip:prop/ 		====>>>>	没有工程名的时候，默认访问的是ROOT工程。

当我们在浏览器地址栏输入访问地址如下：

http://ip:port/工程名/		====>>>>	没有资源名的时候，默认访问index.html页面。



## 3、IDEA整合Tomcat服务器

打开IDEA找到以下路径

File Settings Build | Execution | Deployment | Application Servers

 ![屏幕截图_20221110_150833](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_150833.png)

配置Tomcat路径

![屏幕截图_20221110_151046](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_151046.png)

在创建项目时就可以选择Tomcat服务器了

![屏幕截图_20221110_151221](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_151221.png)

## 4、IDEA中动态web工程的操作

### 1>在IDEA中创建动态web工程

1、先创建一个新模块

![屏幕截图_20221110_151457](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_151457.png)

2、选择创建哪种类型的模块（JavaEE，动态Web工程模块）

![屏幕截图_20221110_151707](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_151707.png)

3、为模块设置名称，点击【Finish】完成创建

![屏幕截图_20221110_151942](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_151942.png)

4、创建成功，如下图：

![屏幕截图_20221110_152202](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_152202.png)

### 2>动态Web工程目录介绍

![屏幕截图_20221110_152925](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_152925.png)

### 3>如何给动态Web工程添加额外jar包

1、可以打开项目结构菜单操作界面，添加一个自己的类库

![屏幕截图_20221110_153524](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_153524.png)

2、添加你类库所需要的jar包文件。

![屏幕截图_20221110_153742](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_153742.png)

3、选择你添加的类库，给哪个模块使用：

![屏幕截图_20221110_153922](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_153922.png)

4、选择Artifacts选项，将类库，添加到打包部署中：

![屏幕截图_20221110_154129](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_154129.png)

### 4>如何在IDEA中部署工程到Tomcat上运行

1、建议修改Web工程对应的Tomcat运行实例名称和工程名相同：

![屏幕截图_20221110_154621](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_154621.png)

![屏幕截图_20221110_154828](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_154828.png)

2、确认你的Tomcat实例中有你要部署的web工程模块：

![屏幕截图_20221110_155255](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_155255.png)

3、你可以修改你的Tomcat实例启动后默认的访问地址：

![屏幕截图_20221110_155502](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_155502.png)

4、在IDEA中如何运行，停止Tomcat实例

<1>正常启动Tomcat实例

![屏幕截图_20221110_155759](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_155759.png)

<2>Debug启动Tomcat实例

![屏幕截图_20221110_160021](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_160021.png)

<3> 停止Tomcat运行实例

![屏幕截图_20221110_160146](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_160146.png)

<4>重启Tomcat运行实例

![屏幕截图_20221110_160413](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_160413.png)

| 名称                         | 描述                                                   |
| ---------------------------- | ------------------------------------------------------ |
| Update resources             | 重新更新web工程中的资源到Tomcat运行实例中              |
| Update classes and resources | 更新web工程中的Class字节码和资源文件到Tomcat运行实例中 |
| Redeploy                     | 重新部署web模块，但是不重启Tomcat实例                  |
| Restart server               | 重启Tomcat实例，并更新Web模块内容                      |

### 5>修改工程访问路径

![屏幕截图_20221110_162026](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_162026.png)

### 6>修改运行的端口号

![屏幕截图_20221110_162155](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_162155.png)

### 7>修改运行使用的浏览器

![屏幕截图_20221110_162514](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_162514.png)

### 8>配置资源热部署

![屏幕截图_20221110_162732](D:%5CDocument%20Storage%5CSchool%5CNote%5C%E5%90%8E%E7%AB%AF%5CJava%5CJava%20Web%5Cimage%5C%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221110_162732.png)