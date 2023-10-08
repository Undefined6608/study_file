<script setup lang="ts">
  import store from "../store/index";
  import router from "../router";
  // 获取vuex里的标题
  const title= computed(()=>{
    return store.getters.getStoreTitle;
  })

  // 登录跳转方法
  const login = ()=>{
    router.push({path:'/login'});
  }
</script>

<template>
  <div id="head">
    <img id="logo" src="/public/img/icon.jpg" alt="icon">
    <span id="title">{{ title }}</span>
    <button id="login" @click="login">登录</button>
  </div>
</template>

<style lang="less" scoped>
  #head{
    width: 90vw;
    height: 8vh;
    background-color: var(--div-back-color);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    border-radius: 4vh;
    box-shadow: 0 5px 20px #aaa;

    #logo{
      width: 5vh;
      height: 5vh;
      border-radius: 5vw;
      margin-left: 2vw;
    }

    #title{
      font-size: 15px;
      font-weight: bold;
      color: var(--button-color);
    }

    #login{
      width: 15vw;
      height: 5vh;
      margin-right: 2vw;
      border-radius: 2.5vh;
      font-weight: bold;
      background-color: var(--button-back-color);
      color: var(--button-color);
      border: 2px solid var(--back-color);
      box-shadow: 0 0 20px #ccc;
    }
  }
</style>