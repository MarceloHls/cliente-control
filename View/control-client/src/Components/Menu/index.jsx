import {connect} from 'react-redux'
import './style.css'


function Menu({store}) {
    return (
        <div className="menu">
            Menu
        </div>
    )

}

export default connect(store => ({store:store}))(Menu);