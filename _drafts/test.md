---
layout: posts
title:  "草稿测试"
toc: true

---

# 整体流程
> SYC面试 -- 2019.12.15

## PPT 树结构

```
PPT 展示时长 30min
##########
├── 1. RECON 
│   ├── 1. 子域名收集
│   ├── 2. 目录扫描
│   ├── 3. 屏幕截图
│   ├── 4. 存活探测
│   ├── 5. 集成化漏洞测试环境
│   ├── 6. tips
├── 2. Bug Bounty Tips
│   ├── 1. xss漏洞挖掘
│   ├── 2. 对于爆破字典
├── 3. TOOLS
│   ├── 1. AWVS
│   ├── 2. Burp Suit
│   ├── 3. XRAY
│   ├── 4. 注意事项
├── 4. Hacktivity
│   ├── 对课堂派的一次半成功的漏洞挖掘
├── 5. Difference between CTF and Bug Bounty Hunter
│   ├── 1. 一定有解 || 可能无解
│   ├── 2. 各种绕过 || 简单利用
│   ├── 3. 固定套路 || 脑洞大开
│   ├── 4. 快速学习 || 日积月累
├── 6. Source of knowledge
│   ├── 1. twitter 关注大牛
│   ├── 2. 多看漏洞报告
│   ├── 3. YouTube 看视频
│   ├── 4. Twitch看直播
│   ├── 5. 个人建议
├── 7. The last
│   ├── Phith0n的一个回答
##########
```

## 1. RECON

### 1. 子域名收集
#### 1. 手动收集
1.https://www.google.com
2.https://crt.sh

```bash=
curl -s "https://crt.sh/?q=%.ketangpai.com&output=json" | jq -r '.[].name_value' | sed 's/\*\.//g' | sort -u

# output=json 以json格式输出查询结果
# jq -r '.[].name_value' 提取 json 数据中的 name_value 
# s/正则表达式/替换字符串/   g表示替换全部. 将 *. 替换为空
# sort -u 去重排序
```

3.https://www.zoomeye.org
4.https://www.shodan.io
5.https://censys.io
6.https://www.fofa.so/
7...

#### 2. 脚本自动收集
最传统的比如 [Sublist3r](https://github.com/aboul3la/Sublist3r)
在其基础上改良之后的: 
bit4woo师父的 [teemo](https://github.com/bit4woo/teemo) (具有相关域名搜集能力，即会收集当前域名所在组织的其他域名。原理是通过证书中"Subject Alternative Name"的内容。)
米斯特团队开发的 [OneForAll](https://github.com/shmilylty/OneForAll)

### 2. 目录扫描
[dirsearch](https://github.com/maurosoria/dirsearch/) 无敌！
日常收集到的路径可以添加到dirsearch的字典里面。

### 3. 屏幕截图
[gowitness](https://github.com/sensepost/gowitness)

### 4. 存活探测
[httprobe](https://github.com/tomnomnom/httprobe)。或者直接写个简易的python脚本

### 5. 集成化漏洞测试环境
lazyrecon
最好不要在学生机上面跑，会直接崩掉

### 6. RECON Tips
1. 了解自己的测试范围 --> 有针对性的进行信息收集
2. 自动化收集 --> 重复性工作使用脚本完成
3. 善用搜索引擎 --> google github shodan ...
4. 保留历史数据 --> 越来越强力的字典
5. 指纹识别 --> 使用1day或nday进行漏洞测试
6. 寻找一种适合自己的信息收集模式 --> 提高自己效率
7. 向他人学习 --> 多看看别人是如何去寻找漏洞点的


## 2. Bug Bounty Tips
也不算特别神奇的技巧，只是平时比较喜欢用的一些小操作
### 1. xss漏洞挖掘
1. 可能很多师父喜欢直接一个alert打过去看是否有弹窗，从而判断是否有xss。但事实上，很多情况下，虽然alert不了，但不一定代表没有xss。为了避免漏掉漏洞点，可以打入一个html标签（比如 `</Lamber>` ），看能否插入在页面中并被解析。比如(dvwa截图)。能将标签插入在html页面中，说明有机会解析。这时候再去思考如何利用xss漏洞。
2. 测试xss的时候（一般情况下针对存储x），可以一次性打入许多payload（每个payload都被标好序号）。根据浏览器渲染之后alert出来的序号，确定有效payload。这种情况下，要注意平时对xss payload的收集与更新。[XSS Payloads](https://twitter.com/XssPayloads), [/dev/null 台風](https://twitter.com/spyerror)

### 2. 对于爆破字典
* API中的参数
* Js文件中的参数
* 从其他人的漏洞报告中

一定不要只用网上现成的字典。一个好的字典一定是自己日积月累收集的。通常来说从api中收集的参数可以用来生成url目录字典。收集到的参数直接加进dirsearch自带的dicc.txt即可


## 3. TOOLS
### 1. AWVS
AWVS主动扫描，设置登录认证。利用AWVS了解网站结构，以及爬取子域名。

### 2. Burp Suit
#### 1. BURP常用插件
1. Decoder Improved
2. JSON&HTTPP -- (Jyhton)
3. Turbo Intruder

##### 1. python写的插件的加载方式
下载Jython，在burp中配置Jython路径即可

#### 2. BURP插件开发
##### 一、前言
1. burp官方支持三种语言开发插件：Java、Python、Ruby。但一般情况下推荐使用Java来做插件开发。原因有以下两点：
	1. 当用python去做插件的时候，如果需要使用到某个库，而这个库又是用C语言实现的。那么插件将无法正常运行。因为burp在执行python写的插件的时候，是通过Jython（Jython是一种完整的语言，而不是一个Java翻译器或仅仅是一个Python编译器，它是一个Python语言在Java中的完全实现。）去解析执行的。而Jython是无法使用C写的模块，所以在这时候插件就不能正常运行。
	2. burp本身是Java写的，使用Java去开发插件兼容性最高，会少很多莫名其妙的错误。而且当使用Java的时候，可以很方便的和ide进行远程调试。而在使用python写插件进行调试时，只能尽量通过输出去获取信息，没有好的办法进行下断点的动态调试

  所以说Java是写插件的最优选择

2. 回调的概念
我们所写的插件，都是被burp所调用的，实质上就是个回调
![](https://i.imgur.com/EhhzYVZ.png)


##### 二、入门准备
1. 在本文中是使用java来进行开发，所以主要讲一下java中的调试方法。其他语言就多写点print就可以了。
2. 由于国内大多数是用的破解版burp，所以在调试方法的准备上稍微需要一点改变。一般情况下破解版burp有使用helper的，有使用keygen的。而如果想要进入调试状态，则需要使用kygen。在我的调试环境下，有如下两个文件
	1. **burp-loader-keygen.jar**
	2. **burpsuite_pro_v1.7.31.jar**

  用如下命令启动burp并让它处于调试的监听方：
```
java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 -Xbootclasspath/p:burp-loader-keygen.jar -jar burpsuite_pro_v1.7.31.jar

# transport=dt_socket 指定运行的被调试应用和调试者之间的通信协议
# server=y 表示这个 JVM 即将被调试
# suspend=n 用来告知 JVM 立即执行，不要等待未来将要附着上/连上（attached）的调试者。如果设成 y, 则应用将暂停不运行，直到有调试者连接上
# Xbootclasspath/p: 是Java编译的寻址优先设置, 即优先编译
```
这个命令和调试正版burp的区别在于，这个命令需要加`-Xbootclasspath/p:burp-loader-keygen.jar`这一段。
可以将这条指令保存为bat文件，方便一键启动。
3. 另一边就是IDE的配置了，以idea为例（注意jdk环境不能太高，否则你打包的jar包burp不能正常加载，推荐使用jdk1.8）
![](https://i.imgur.com/E1GocIi.png)

  
如上debug模式的burp和IDEA都配置好后，就可以进行下断点调试了。需要注意的是，需要保持IDEA中的代码和你打包的插件的代码一致。

4. 顺便在这里再码一篇写的很棒的文章 https://blog.netspi.com/debugging-burp-extensions/
还有，官方资料都是最好的资料 https://portswigger.net/burp/extender#SampleExtensions

##### 三、Hello World
1. 首先我们创建一个IDEA工程文件，并且创建一个名叫burp的包。然后启动之前准备好的bat文件。并将burp里面的API接口文件导出到IDEA的burp包里面。再之后，新建一个class文件，名字为BurpExtender。然后写入以下代码。
![](https://i.imgur.com/vQbaPoM.png)
![](https://i.imgur.com/FGXpYSJ.png)


```java
package burp;

import java.io.PrintWriter;

public class BurpExtender implements IBurpExtender{
    //
    // implements IBurpExtender
    //

    @Override
    public void registerExtenderCallbacks(IBurpExtenderCallbacks callbacks) {
        // set our extension name
        callbacks.setExtensionName("Hello world extension");

        // obtain our output and error streams
        PrintWriter stdout = new PrintWriter(callbacks.getStdout(), true);
        PrintWriter stderr = new PrintWriter(callbacks.getStderr(), true);

        // write a message to our output stream
        stdout.println("This is output");

        // write a message to our error stream
        stderr.println("This is errors");

        // write a message to the Burp alerts tab
        callbacks.issueAlert("Hello alerts");

        // throw an exception that will appear in our error stream
        throw new RuntimeException("Hello exception");
    }
}

```

将项目打包为jar包然后从burp导入jar包
![](https://i.imgur.com/haxVbRN.png)

![](https://i.imgur.com/yzfKRrV.png)

![](https://i.imgur.com/WmaK7wB.png)

![](https://i.imgur.com/I02Bvjx.png)

![](https://i.imgur.com/aTTFNSy.png)

![](https://i.imgur.com/ZeLU69t.png)


最后成功输出结果
![](https://i.imgur.com/znkSSA6.png)

##### 关于Burp插件
对于Bug hunter来说。现有的burp插件足以应对99%的情况了，自己动手造一个burp插件，意义并不大。而学习burp插件开发，最主要的目的是对已有的burp插件进行微调(即把别人的轮子改成更适合自己的)。其实在这个修改轮子的过程中，写burp插件的能力也会越来越强。算是一个学习过程。而到了真有需要自己整一个完整burp插件的时候，也不会慌张了


### 3. XRAY
XRAY被动扫描，调用POC，手动添加POC。
扫描的时候建议将sql扫描模块关闭，sql检测模块特征太明显，容易被ban。
XRAY与BURP联动

### 4. 注意事项
别在登录状态下使用扫描器，别无脑上扫描器。

## 4. Hacktivity
1. 信息收集，收集到子域 `package.ketangpai.com`
2. 主站漏洞挖掘
3. 主站xss1, 主站xss2, 主站xss3
4. 主站sql注入
5. 旁站目录扫描, `.svn` 泄露全站源代码

## 5. CTF & Bug Bounty Hunter
### 1. 一定有解 || 可能无解
CTF一定有解，而挖SRC的时候目标站点并不一定存在漏洞
所以说CTF花上一天两天，就算实在做不出来。也有赛后wp可以复现，最终一定是可以看到一个明确的成果的。肯定是能收到积极的正反馈
而挖SRC，可能好几天，好几周，甚至好几个月都没有一点产出。这种情况可能会很打击自己。就不想挖了。

### 2. 各种绕过 || 简单利用
CTF中漏洞点很容易寻找，难在绕过过滤并触发漏洞，从而利用漏洞达到目的。而在实际环境当中，往往漏洞的利用会很简单，难点在于发现漏洞点。

### 3. 固定套路 || 脑洞大开
CTF打多了过后，思维固化。基本就是快速找到漏洞点，然后查询相关文章去学习如何利用漏洞。而在真实环境中，可能出现漏洞的地方千奇百怪。比如cookie里sql注入，比如添加一个header头都能产生漏洞。再比如根据各种地方的参数的命名规则，推测隐藏参数...

### 4. 快速学习 || 日积月累
ctf重在考察快速学习能力，而src的挖掘重在经验的积累
在ctf中，找到漏洞点，一般会花半天，一天的时间去快速学习，然后解题。学习难度过大的话，也会在拿到wp之后花一周左右把知识点处理完。
而src则更随意一些。日常字典的收集，各类参数名的收集，多看漏洞报告，收集可能产生漏洞的地方。对目标业务的跟进...


## 6. Source of knowledge
### 1. twitter 关注大牛
Bug bounty hunter [NahamSec](https://twitter.com/NahamSec)
Bug bounty hunter [stok](https://twitter.com/stokfredrik)

### 2. 多看漏洞报告
Hackerone 漏洞报告 [hacktivity](https://hackerone.com/hacktivity)
乌云漏洞库镜像 [Wooyun](https://w.hundan.org)

### 3. YouTube 看视频
>key words: Bug Bounty Tips

油管搜索视频 [YouTube](https://www.youtube.com)

### 4. Twitch看直播
nahamsec的直播频道 [nahamsec](https://www.twitch.tv/nahamsec)

### 5. 个人建议
个人觉得，挖掘SRC并不是一味的为了混赏金混积分。挖掘SRC更重要的是学习挖掘技巧。多看大牛的漏洞报告，首推hackerone。可以看到许多奇淫技巧。
初学者不能想着为了简单，去挖野站，比如补天公益。
建议newcomer将yahoo定为自己的首个目标
因为yahoo资产丰富，几乎囊括了所有行业。在yahoo里面，可以尝试挖掘任何类型的漏洞。很适合作为一个学习工具
在不断的挖掘中，总结漏洞出现规律，对其实现自动化。也是一个非常好的学习方法
这学期开始，各企业办了挺多挖洞比赛的，比如之前的BSRC办的大学生挖洞赛，还有双十一保卫战，以及越来越多的众测。小组挖src的师父又比较少，像之前D^3CTF的众测赛，参加的师父就只有几个人。我觉得大家在打CTF之外，也应该多了解一下怎么去挖SRC。


## 7. 最后
最后给大家分享一个p牛回答的问题

```
Q: 一直有想要进步，但是身为脚本小子有时挺满足的，请问如何脱离这种满足感？
A: 没事了多翻翻hackerone、各个SRC和众测的排行榜，你排不到前面，哪来的满足感……
```

