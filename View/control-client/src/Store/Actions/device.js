function UpdateListDevice(listDevice){

    return{
        type:'set_list_device',
        listDevice
    }
}

function UpdateDevice(device){
    return{
        type:"set_device",
        device
    }
}

export default {UpdateListDevice,UpdateDevice};