import {connect} from 'react-redux'
import './style.css'

import DataOfClient from './DataOfClient/index'
import ListDevices from './ListDevices/index'


function Client({state}){

    return(
        <div className="client">
            <DataOfClient/>
            <ListDevices/>
            
        </div>
    )
}

export default connect(state => ({state:state}))(Client);

