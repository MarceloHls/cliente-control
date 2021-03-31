import data from './dataRequest'

const axios = require("axios")

const url = data.url + "client/list"

function getListClient(){
    return new Promise(async (resolve,reject)=>{
        await axios.default.get(url)
        .then(data => resolve(data))
    })
}

export default {getListClient}