import {connect} from 'react-redux'

import './style.css'


function SearchResult({state}){
   
    return(
        <div className='search-result'>
         SearchResult
        </div>
    );
}

export default connect(state => ({state}))(SearchResult);