import { connect } from 'react-redux'
import './style.css'

import Card from './Card/index'

function ListDevice({ listDevice, dispatch }) {
let key = 0
    return (
        <div className="list-Device">
            {listDevice.map(device => <Card device={device} key={++key}/>)}
        </div>
    )
}

export default connect(state => ({ listDevice: state.data.listDevice }))(ListDevice);

