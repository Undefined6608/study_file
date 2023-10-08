<template>
  <head-component/>
  <div class="main">
    <div class="left">
      <div class="label" v-for="(item1, index1) in fileList" :key="index1">
        <label class="title"><span>{{ item1[0].type }}</span></label>
        <ul class="item_ul">
          <li :class="selectItem[0]===index1&&selectItem[1]===index2?'select_li':'item_li'"
              v-for="(item2, index2) in item1" :key="index2" @click="updateItem(index1,index2)"><span>{{
              item2.fileName
            }}</span></li>
        </ul>
      </div>
    </div>
    <div class="right">
      <iframe class="obj" type="text/x-scriptlet" :src="pageUrl"></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import store from "../store";
import HeadComponent from "../components/HeadComponent.vue";
import {reactive} from "vue";
// 进行vuex里的请求
store.dispatch('getStoreFile', '')
// 获取vuex里的fileList
const fileList = computed(() => {
  return store.getters.getStoreFile
})

watch(fileList,()=>{
  updateItem(0,0)
})
// 设置选择项方法
const selectItem = reactive([0, 0]);
const updateItem = (index1: number, index2: number) => {
  selectItem[0] = index1;
  selectItem[1] = index2;
  updatePageUrl(index1, index2)
}
// 定义右边显示的内容地址,和修改方法
const pageUrl = ref("");
const updatePageUrl = (index1: number, index2: number) => {
  for (let i = 0; i < fileList.value.length; i++) {
    if (i === index1) {
      for (let j = 0; j < fileList.value[i].length; j++) {
        if (j === index2) {
          if(i===1&&j===0){
            location.href=fileList.value[i][j].fileUrl
            return;
          }
          pageUrl.value = fileList.value[i][j].fileUrl;
          // console.log(pageUrl.value)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  width: 90%;
  height: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: var(--div-back-color);
  box-shadow: 0 5px 20px #aaa;
  border-radius: 10px;

  .left {
    width: 25%;
    height: 95%;
    background-color: #d6ecf0;
    border-radius: 20px;
    box-shadow: 0 5px 20px #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .label {
      width: 90%;
      height: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        width: 100%;
        text-align: center;
        background-color: #b35c44;
        line-height: 30px;
        border-radius: 15px;
        color: #fff;
      }

      .item_ul {
        width: 100%;
        padding: 0;
        height: 90%;
        margin: 20px 0 0 0;
        overflow: auto;

        .item_li {
          width: 100%;
          list-style: none;
          text-align: center;
          margin-bottom: 10px;
          line-height: 30px;
          font-size: 15px;
        }

        .select_li {
          width: 100%;
          list-style: none;
          text-align: center;
          margin-bottom: 10px;
          line-height: 30px;
          font-size: 15px;
          background-color: #eacd76;
          border-radius: 15px;
        }
      }
    }
  }

  .right {
    width: 70%;
    height: 95%;
    background-color: #fcefe8;
    border-radius: 20px;
    box-shadow: 0 5px 20px #ccc;
    overflow: hidden;

    .obj {
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
}
</style>