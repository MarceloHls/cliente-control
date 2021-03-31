import { useState } from 'react'
import { connect } from 'react-redux'
import SetDevice from '../../../../Business/setDevice'
import './style.css'

function toSendDevice(brand,model,type,defect,costValue,guarantee,dispatch){

}


function EditDevice(state) {
    const { data, dispatch } = state
    const { device, client } = data

    const [brand, setBrand] = useState();
    const [model, setModel] = useState();
    const [type, setType] = useState();
    const [defect, setDefect] = useState();
    const [costValue, setCostValue] = useState();
    const [guarantee, setGuarantee] = useState(device.guarantee);

    return (
        <div className="device">
            <div className="box">
                <p>Cliente</p>
                <p>{client.name}</p>
            </div>
            <div className="box">
                <p>Marca</p>
              <input type="text" onChange={e => setBrand(e.target.value)}/>
            </div>
            <div className="box">
                <p>Modelo</p>
                <input type="text" onChange={e => setModel(e.target.value)}/>
            </div>
            <div className="box">
                <p>Tipo</p>
                <input type="text" onChange={e => setType(e.target.value)}/>
            </div>
            <div className="box">
                <p>Defeito</p>
                <input type="text" onChange={e => setDefect(e.target.value)}/>
            </div>
            <div className="box">
                <p>Dia Recebido</p>
                <p>{device.dayReceipt}</p>
            </div>
            <div className="box">
                <p>Valor de custo</p>
                <input type="text" onChange={e => setCostValue(e.target.value)}/>
            </div>
            <div className="box">
                <p>Guarantia</p>
                <p>{guarantee?"SIM":"Não"}</p>
            </div>
            <button onClick={() => toSendDevice(brand,model,type,defect,costValue,guarantee,dispatch)}> Salvar </button>
        </div>
    )
}

export default connect(state => state)(EditDevice);

