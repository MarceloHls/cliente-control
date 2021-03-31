import {connect} from 'react-redux'
import './style.css'

import setPageCurrent from '../../../../../Business/setPageCurrent'

function toCreateDevice(dispatch){
    setPageCurrent.setPageCurrent(dispatch,"createdevice")
}

function DataOfClient({client,dispatch}){
    
    return(
        <div className="data-of-client">
          <dir className="box">
              <p>Nome</p>
              <p>{client.name}</p>
          </dir>
          <dir className="box">
              <p>Telefone</p>
              <p>{client.phone}</p>
          </dir>
          <dir className="box">
              <p>Email</p>
              <p>{client.email}</p>
          </dir>
          <dir className="box">
              <p>Numero de aparelhos</p>
              <p>{client.numberOfDevices}</p>
          </dir>
          <button onClick={()=> toCreateDevice(dispatch)}>Adicionar Aparelho</button>
        </div>
    )
}

export default connect(state => ({client:state.data.client}))(DataOfClient);

