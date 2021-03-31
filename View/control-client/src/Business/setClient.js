import Device from '../Models/Device';

import ActionClient from '../Store/Actions/client';
import ActionDevice from '../Store/Actions/device';
import ActionPage from '../Store/Actions/page';
import ActionUpdates from '../Store/Actions/updates';

import GetListClient from './Request/listClient'
import ClientDeviceList from './Request/clienteDeviceList'
import CreateClient from './Request/createCliente'



async function SetClient(client, dispatch) {
    console.log(client)
    ClientDeviceList.GetClientListDevices(client.id)
        .then(data => {
            const devices = data.data
            console.log(devices)
            dispatch(ActionClient.Client(client))
            dispatch(ActionDevice.UpdateListDevice(devices))
            dispatch(ActionPage.UpdatePage("client"))
        })


}



async function SetListClient(updates, dispatch) {
    const updatesCurrent = updates
    GetListClient.getListClient()
        .then(data => {
            updatesCurrent.listClient = true
            const listClient = data.data
            dispatch(ActionClient.ListClient(listClient))
            dispatch(ActionUpdates.SetUpdates(updatesCurrent))


        })

}

async function CreateClientAction(client,dispatch,updates){
    const updatesCurrent = updates
    CreateClient.CreateClient(client)
    .then(data => {
       alert("Cliente Criado Com Sucesso")
       updatesCurrent.listClient = false
       dispatch(ActionUpdates.SetUpdates(updatesCurrent))
       dispatch(ActionPage.UpdatePage("listClient"))
       
    })
}

export default { SetClient, SetListClient,CreateClientAction };