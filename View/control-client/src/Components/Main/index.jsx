import './style.css'

import { connect } from 'react-redux'

import Client from './Templates/Client/index'
import CreateClient from './Templates/CreateClient/index'
import CreateDevice from './Templates/CreateDevice/index'
import Device from './Templates/Device/index'
import EditClient from './Templates/EditClient/index'
import EditDevice from './Templates/EditDevice/index'

import ListClient from './Templates/ListClient/index'

import SetClient from '../../Business/setClient'
import setClient from '../../Business/setClient'



function Main(state) {


    const { pageCurrent } = state
    var component;
    switch (pageCurrent) {
        case "client":
            component = <Client />
            break;
        case "createclient":
            component = <CreateClient />
            break;
        case "createdevice":
            component = <CreateDevice />
            break;
        case "editclient":
            component = <EditClient />
            break;
        case "listClient":
            component = <ListClient />
            break;
        case "device":
            component = <Device />
            break;
        case "editdevice":
            component = <EditDevice />
            break;
        default:
            component = <Client />
            break;

    }


    return (
        <div className="main">
            {component}
        </div>
    )


}

export default connect(state => state.data)(Main);