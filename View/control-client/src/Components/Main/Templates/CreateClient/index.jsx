import { connect } from 'react-redux'
import { useState } from 'react'

import './style.css'

import FormClient from '../Shared/FormClient/FormClient'


import CreateClientAction from '../../../../Business/setClient'

function toCreateCliente(name,phone,email,dispatch,updates){
    const client = {
        name,
        phone,
        email
    }
    CreateClientAction.CreateClientAction(client,dispatch,updates)
}

function CreateClient(state) {
    const {dispatch,data } = state
    const {updates} = data

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
   

    return (
        <div className="create-client">
            <div className="form client">
                <div id="name" className="box form" onChange={e => setName(e.target.value)}>
                    <p>Nome</p>
                    <input type="text" />
                </div>
                <div id="phone" className="box form" onChange={e => setPhone(e.target.value)}>
                    <p>Celular </p>
                    <input type="text" />
                </div>
                <div id="email" className="box form" onChange={e => setEmail(e.target.value)}>
                    <p>E-mail </p>
                    <input type="text" />
                </div>
            </div>
            <button onClick={()=> toCreateCliente(name,phone,email,dispatch,updates)}>Criar</button>
        </div>
    )
}

export default connect(state => state)(CreateClient);

