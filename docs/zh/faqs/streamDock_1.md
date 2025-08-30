---
title: streamDock系列问题
---

# **streamDock系列问题**

## Mirabox — 固件更新

固件更新为 Stream Dock 提供最新的改进和错误修复。

**注意：** 执行固件更新时，确保更新不中断至关重要。更新时，请确保满足以下条件：

- **⚠️ 请勿关闭计算机。**
- **⚠️ 请勿断开 Stream Dock。**
- **⚠️ 请勿关闭或退出 Stream Dock 应用程序。**

------

### 1. 固件更新步骤

------

1） 确保已安装最新的 Stream Dock 软件

- 检查 Stream Dock 软件中的更新
- 从 [https://miraboxdemo.key123.vip/downloads](https://miraboxdemo.key123.vip/downloads) 下载最新版本

<img src="../../images/faqs/streamDock/streamDock_new.png" alt="Mirabox" width="100%">

2） 通过单击软件左上角商店按钮旁边的设置齿轮打开设置。

<img src="../../images/faqs/streamDock/setting.png" alt="Mirabox">

3） 单击 **“更新固件”** 来进行更新。请勿在固件更新过程中断开 Stream Dock 的连接或关闭计算机。在设备重启的更新过程中，设备的按键可能会闪烁。

<img src="../../images/faqs/streamDock/startUp.png" alt="Mirabox" width="100%">

4） 等到更新完成，然后像往常一样使用 Stream Dock。

<img src="../../images/faqs/streamDock/completeUp.png" alt="Mirabox" width="100%">


## 如何将开发好的插件或其他产品集合到stream Dock中运行

许多用户开发好了专署产品却不知道如何将其放到StreamDock中运行自己的产品，这对于这个问题在这里将进行详细分步骤讲解

*当您借组开发文档SDK开发好了您的专署产品，可以将打包好的文件夹放到plugin文件夹中，重启软件即可*

------

### 1. 个人开发好的产品集合到软件运行的具体步骤


1）打开软件点击左上角设置按钮

<img src="../../images/faqs/streamDock/setting.png" alt="Mirabox">

------


2）选择弹出框的头部导航**通用**选项，并点击**打开应用文件夹**


<img src="../../images/faqs/streamDock/open_folder.png" alt="Mirabox" width="100%">

------

3）之后会弹出一个文件交互页面，找到相应开发产品类型的文件夹，插件对应的是plugins，图标库对应的是icons


*软件的产品存储路径默认是 C:\Users\OptiPlex\AppData\Roaming\HotSpot\StreamDock*

***⚠️ 警示：请不要修改文件存储路径，因为这可能会导致stream Dock软件无法正常运行***

<img src="../../images/faqs/streamDock/file_interaction.png" alt="Mirabox" width="100%">

------

**4）将开发好的产品文件夹放到相应产品类型目录下，这里以plugin为例**


***⚠️ 注意：文件命名必须是反域名命名格式，用于标识软件包或应用程序的唯一性***

例：com.mirabox.streamdock.calendar.sdPlugin

- **com**: 这通常是指公司或组织的域名的顶级域名（TLD）。在这里，"com" 表示商业组织（commercial），通常用于商业目的的软件包命名。

- **mirabox**: 这是公司或组织的名称或者域名的一部分。它可以是公司名、品牌名或者域名的一部分。

- **streamdock**: 这是产品或服务的名称，即对应软件名称。

- **calendar**: 您所开发的产品的名称。

- **sdPlugin**: 这标识您的产品为插件类型（plugin）。

- **sdIconPack**: 这标识您的产品为图标类型 (icon)。


<img src="../../images/faqs/streamDock/plugin_folder.png" alt="Mirabox" width="100%">

------

## 某些设备在软件中无法显示的问题

**当您下载并完成 Steam Dock 软件安装，部分设备型无法一次性行展示所有设备的列表**

*某些版本型号会存在这个现象，这可能是针对每个不同版本软件的具体设计*

<img src="../../images/faqs/streamDock/device.png" alt="Mirabox" width="100%">

**解决方式：**

1）尝试重启软件

2）点击重置数据

<img src="../../images/faqs/streamDock/resetData.png" alt="Mirabox" width="100%">

3）连接到相应硬件设备后重启重启软件

<img src="../../images/faqs/streamDock/device_all.png" alt="Mirabox" width="100%">


- 使用以上方法如仍无法解决，或存在其他任何疑惑，可以随时[联系我们](https://bbs.key123.vip/#/)



## 如何正确使用场景模块

### 1. 场景简介

场景的出现让stream Dock的可用性和便捷性大大提升，用户的体验感受有了质的的飞跃。

**stream Dock可以有多个场景**，对此用户可以自定义自己的专属场景，包括场景的增加、删除、设计、导入、导出、命名等；场景之间可以来回切换，这对于Stream Dock的重度使用者非常友好。

### 2. 最新场景

在最新的Stream Dock 2.10.179.426 版本中默认内置了四个场景，分别是 Windos控制场景、常用网站场景、信息看板场景、音乐控制太场景

- **Windows控制场景**

<img src="../../images/faqs/streamDock/scene.png" alt="Mirabox" width="100%">

------

- **常用网站场景**

<img src="../../images/faqs/streamDock/scene2.png" alt="Mirabox" width="100%">

------

- **信息看板场景**

<img src="../../images/faqs/streamDock/scene3.png" alt="Mirabox" width="100%">

------

- **音乐控制太场景**

<img src="../../images/faqs/streamDock/scene4.png" alt="Mirabox" width="100%">


### 3. 新增场景

1）在场景列表区域或设置页面中点击添加图标便可创建一个新的场景

<img src="../../images/faqs/streamDock/addScene.png" alt="Mirabox" width="100%">

2）新增场景后用户遍可以根据自己喜好随意设计专属场景

<img src="../../images/faqs/streamDock/setScene.png" alt="Mirabox" width="100%">


### 4. 删除场景

选中需要删除的场景后，在场景列表区域或设置页面中点击删除图标便可删除当前选中的场景删除，也可以在设置页面中直接右键场景选择删除

<img src="../../images/faqs/streamDock/removeScene.png" alt="Mirabox" width="100%">


<img src="../../images/faqs/streamDock/clickScene.png" alt="Mirabox" width="100%">


### 5. 场景重命名

双击或右击场景便可进行重命名

<img src="../../images/faqs/streamDock/reSceenName.png" alt="Mirabox">

### 6. 场景自动切换

场景的自动切换功能对于许多用户来说，知名度并不高；但如果您了解到此功能，它的实用性将会非常大，也许你将会对它爱不释手。

自动切换的作用：当您给某个场景选中对应的应用程序后，以后在你使用改应用程序时，stream Dock将会自动切换到该场景

**尝试一下:**

1）这里以将选中Chrome应用程序绑定到我的场景中,绑定后将在场景对应列表项右边显示程序图标


<img src="../../images/faqs/streamDock/bindScene.png" alt="Mirabox" width="100%">

------

<img src="../../images/faqs/streamDock/bindedScene.png" alt="Mirabox" width="100%">

2）切换到其他场景

3）打开Chrome后，重新切回Stream Dock 将会自动选中Chrome所绑定的场景

<img src="../../images/faqs/streamDock/myScene.png" alt="Mirabox" width="100%">

### 7. 场景的导入导出

当您设计了一套适合的场景想要保存起来，或者想将改场景分享给朋友在其他电脑上使用，可以使用导入导出功能

<img src="../../images/faqs/streamDock/importScene.png" alt="Mirabox" width="100%">

可以将设计好的场景一件导出，以文件的形式存在本地中,保存格式是.streamDockProfile的二进制文件，导入也选中相应格式的文件导入便可

<img src="../../images/faqs/streamDock/streamDockProfile.png" alt="Mirabox" width="100%">







