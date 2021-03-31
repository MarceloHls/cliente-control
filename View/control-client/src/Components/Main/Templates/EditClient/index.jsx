import { connect } from 'react-redux'
import './style.css'

function EditClient({ state }) {
    

    return (
        <div className="edit-client">
            EditClient
        </div>
    )
}

export default connect(state => ({ state: state }))(EditClient);

