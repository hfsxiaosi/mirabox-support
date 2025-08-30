<template><div><h2 id="下载-craft-安装包" tabindex="-1"><a class="header-anchor" href="#下载-craft-安装包"><span>** 下载 Craft 安装包**</span></a></h2>
<div class="downloadBtn" @click="download">下载 Craft installation package</div>
<h2 id="window-历史版本" tabindex="-1"><a class="header-anchor" href="#window-历史版本"><span><strong>Window 历史版本</strong></span></a></h2>
<div class="version-info">
    <ul class='ul'>
        <li class='li'><strong>名称</strong></li>
        <li class='li'><strong>版本</strong></li>
        <li class='li'><strong>发布日期</strong></li>
        <!-- <li class='li'><strong>Package</strong></li> -->
        <li class='li'><strong>日志文件</strong></li>
    </ul>
</div>
<div v-for="entry in windowList" :key="entry.version" class='version-info'>
    <ul class='ul'>
        <li class='li'>{{ entry.name }}</li>
        <li class='li'>{{ entry.version }}</li>
        <li class='li'>{{ entry.release_time }}</li>
        <!-- <li class='li'><a v-if="entry.download" :href="entry.download">Download</a></li> -->
        <li class='li'><a v-if="entry.download" :href="entry.download_log">View log</a></li>
    </ul>
</div>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h4>
<h4 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span></span></a></h4>
<h2 id="mac-历史版本" tabindex="-1"><a class="header-anchor" href="#mac-历史版本"><span><strong>Mac 历史版本</strong></span></a></h2>
<div class="version-info">
    <ul class='ul'>
        <li class='li'><strong>名称</strong></li>
        <li class='li'><strong>版本</strong></li>
        <li class='li'><strong>发布日期</strong></li>
        <!-- <li class='li'><strong>Package</strong></li> -->
        <li class='li'><strong>日志文件</strong></li>
    </ul>
</div>
<div v-for="entry in macList" :key="entry.version" class='version-info'>
    <ul class='ul'>
        <li class='li'>{{ entry.name }}</li>
        <li class='li'>{{ entry.version }}</li>
        <li class='li'>{{ entry.release_time }}</li>
        <!-- <li class='li'><a v-if="entry.download" :href="entry.download">Download</a></li> -->
        <li class='li'><a v-if="entry.download" :href="entry.download_log">View log</a></li>
    </ul>
</div>
</div></template>


<script setup>
import axios from 'axios';
import {ref,onBeforeMount} from 'vue'

onBeforeMount(async ()=>{
    await fetchFirmware();
})

async function fetchFirmware() {
  try {
    const res = await axios.get('https://cdn1.key123.vip/StreamDock/log/softwareVersionList.json'); 
    if(res.data){
        windowList.value = res.data.CraftWinList
        macList.value = res.data.CraftMacList
    }
  } catch (err) {
    console.error(' 请求失败:', err);
  }
}

const windowList = ref([
    
])

const macList = ref([
 
])

const download = () => {
  window.open("https://cdn1.key123.vip/Craft/historicalVersion/MiraBox_Craft-HistoryDownloader.exe");  // 替换为实际文件URL 
};
</script>
<style scoped>
  .version-box{
    width:100%;
    height:auto;
    border-radius:12px;
  }
  .version-info{
    width:100%;
    height:50px;
    border-radius:12px;
    margin-top:32px;
  }
  .ul{
    width:100%;
    height:100%;
    display:flex;
    justify-content: start;
    align-items:start;
    border-bottom: 1px solid ;
    /* border-image: linear-gradient(to right, #000 10%, transparent 70%) 1; 渐变边框 */
    border-image: linear-gradient(to right, transparent, rgba(128, 128, 128, 0.5), transparent) 1; 
  }
  .li{
    width:23%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items:center;
  }
  .downloadBtn{
    /* width: 220px; */
    cursor: pointer;
    height: 50px;
    background-color: #3eb893;
    margin: 0px auto;
    margin-top:20px;
    margin-bottom:60px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 15px;
  }
</style>