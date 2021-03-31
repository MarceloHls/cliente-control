import data from './dataRequest'

const axios = require("axios")

const url = data.url + "client/create"

function CreateClient(client){
    return new Promise((resolve,reject)=>{
        axios.default.post(url,client)
        .then(data => resolve(data))
    })
   
}

export default {CreateClient}

