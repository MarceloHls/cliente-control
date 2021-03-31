import ActionDevice from '../Store/Actions/device'
import ActionPage from '../Store/Actions/page'
import createDevice from './Request/createDevice'

import CreateDevice from './Request/createDevice'
import SetClient from './setClient'

function SetDevice(device,dispatch){
    dispatch(ActionDevice.UpdateDevice(device))
    dispatch(ActionPage.UpdatePage("device"))
}



function CreateDeviceAction(device,dispatch,client){
    createDevice.CreateDevice(device)
    .then(data =>{
        SetClient.SetClient(client,dispatch)
    })
}

export default {SetDevice,CreateDeviceAction}