import service from "./request";

export function getFile(){
    return new Promise((resolve,reject)=>{
        // service.get("/getscript?type=webgl&v=1.0&ak=14ZvFGaYcCZ5CumCQliNQTW83ZYCNwMi&services=&t=20230407191641").then((res)=>{
        service.get("/file").then((res)=>{
            resolve(res);
        })
    })
}