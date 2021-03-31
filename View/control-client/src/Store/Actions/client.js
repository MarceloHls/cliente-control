function Client(client){
    return{
        type:'set_client',
        client
    }
}

function ListClient(listClient){
    return{
        type:'set_list_client',
        listClient
    }
}

export default {Client,ListClient};