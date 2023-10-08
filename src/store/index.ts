import { createStore } from "vuex";
import {getFile} from "../api/api";
export default createStore({
    state: {
        title:"淄博职业学院 张杰 整理(笔记)",
        file:[],
    },
    mutations:{
        setStoreFile(state,payload){
            state.file = payload;
        }
    },
    actions:{
        async getStoreFile(context,payload){
            getFile().then((res)=>{
                // console.log(res);
                context.commit('setStoreFile',res)
            })
        }
    },
    getters:{
        getStoreTitle(state){
            return state.title;
        },
        getStoreFile(state){
            return state.file;
        }
    }
})