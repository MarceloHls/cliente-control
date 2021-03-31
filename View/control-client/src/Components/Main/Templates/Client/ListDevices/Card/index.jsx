import { connect } from 'react-redux'
import setDevice from '../../../../../../Business/setDevice';

import './style.css'



function toDevice(device,dispatch){
    setDevice.SetDevice(device,dispatch)
}

function Card(state) {
  
  
  const {device,dispatch} = state

    return (
        <div className='card' onClick={()=> toDevice(device,dispatch)}>
            <div className={'box'}>
                <p>Marca</p>
                <p>{device.brand}</p>
            </div>
            <div className={'box'}>
                <p>Modelo</p>
                <p>{device.model}</p>
            </div>
            <div className={'box'}>
                <p>Tipo</p>
                <p>{device.type}</p>
            </div>
            <div className={'box'}>
                <p>Defeito</p>
                <p>{device.defeito}</p>
            </div>
      
        </div>
    );
}

export default connect(state =>( {state:state}))(Card);