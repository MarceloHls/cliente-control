import {connect} from 'react-redux'
import './style.css'

import List from './List/index'
import SearchBar from './SearchBar/index'
import setPageCurrent from '../../../../Business/setPageCurrent'


function toCreateClient(dispatch){
   setPageCurrent.setPageCurrent(dispatch,"createclient")
 
}

function ListClient(state){
    const {dispatch} = state
    
   
   
    return(
        <div className="list-client">
            <SearchBar/>
            <List/>
            <button onClick={()=> toCreateClient(dispatch)}>Criar Cliente</button>
        </div>
    )
}

export default connect(state => state)(ListClient);

