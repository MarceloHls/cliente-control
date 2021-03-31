import data from './dataRequest'

const axios = require("axios")

const url = data.url + "device/get/list/"

function GetClientListDevices(id){
    
    return new Promise((resolve,reject)=>{
        axios.default.get(url + id)
        .then(data => resolve(data))
    })
}

export default {GetClientListDevices}