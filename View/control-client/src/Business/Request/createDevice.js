import data from './dataRequest'

const axios = require("axios")

const url = data.url + "device/create"

function CreateDevice(device){
    return new Promise((resolve,reject)=>{
        axios.default.post(url,device)
        .then(data => resolve(data))
    })
   
}

export default {CreateDevice}
