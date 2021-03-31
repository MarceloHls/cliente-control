import { useState } from 'react';
import { connect } from 'react-redux'
import './style.css'

import CreateDeviceAction from '../../../../Business/setDevice'

function toCreateDevice(clientId,brand, model, type, dispatch, client){
    const device ={
        clientId,
        brand,
        model,
        type
    }

    CreateDeviceAction.CreateDeviceAction(device,dispatch,client)
}

function CreateDevice(state) {
    const { dispatch, data } = state
    const { updates,client } = data

    const [brand, setbrand] = useState();
    const [model, setmodel] = useState();
    const [type, settype] = useState();


    return (
        <div className="create-device">
            <div className="form device">
                <div id="client" className="box form">
                    <p>Cliente</p>
                    <p>{client.name}</p>
                </div>
                <div id="brand" className="box form" onChange={e => setbrand(e.target.value)}>
                    <p>Marca </p>
                    <input type="text" />
                </div>
                <div id="model" className="box form" onChange={e => setmodel(e.target.value)}>
                    <p>Modelo </p>
                    <input type="text" />
                </div>
                <div id="type" className="box form" onChange={e => settype(e.target.value)}>
                    <p>Tipo </p>
                    <input type="text" />
                </div>
            </div>
            <button onClick={() => toCreateDevice(client.id,brand, model, type, dispatch,client)}>Criar</button>
        </div>
    )
}

export default connect(state => state)(CreateDevice);

