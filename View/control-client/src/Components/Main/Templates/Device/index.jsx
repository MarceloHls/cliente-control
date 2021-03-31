import { connect } from 'react-redux'
import SetPageCurrent from '../../../../Business/setPageCurrent'
import './style.css'


function toEditClient(dispatch){
    SetPageCurrent.setPageCurrent(dispatch,"editdevice")
}

function Device(state) {
    const { data, dispatch } = state
    const { device, client } = data

    return (
        <div className="device">
            <div className="box">
                <p>Cliente</p>
                <p>{client.name}</p>
            </div>
            <div className="box">
                <p>Marca</p>
                <p>{device.brand}</p>
            </div>
            <div className="box">
                <p>Modelo</p>
                <p>{device.model}</p>
            </div>
            <div className="box">
                <p>Tipo</p>
                <p>{device.type}</p>
            </div>
            <div className="box">
                <p>Defeito</p>
                <p>{device.defect}</p>
            </div>
            <div className="box">
                <p>Dia Recebido</p>
                <p>{device.dayReceipt}</p>
            </div>
            <div className="box">
                <p>Dias para entregar</p>
                <p>{device.deadline}</p>
            </div>
            <div className="box">
                <p>Valor de custo</p>
                <p>{device.costValue}</p>
            </div>
            <div className="box">
                <p>Valor pago</p>
                <p>{device.receivedValue}</p>
            </div>
            <div className="box">
                <p>Dia de entrega</p>
                <p>{device.payDay}</p>
            </div>
            <div className="box">
                <p>Guarantia</p>
                <p>{device.guarantee}</p>
            </div>
            <button onClick={()=> toEditClient(dispatch)}>Editar </button>
        </div>
    )
}

export default connect(state => state)(Device);

