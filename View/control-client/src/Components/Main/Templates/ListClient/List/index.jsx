import {connect} from 'react-redux'


import './style.css'

import Card from './Card/index'

import SetClient from '../../../../../Business/setClient'


function List(state){
    var key = 0
  
    const {data,dispatch} = state
    const {listClient,updates} = data
    console.log(updates.listClient)

    if(updates.listClient){
     
    }else{
       SetClient.SetListClient(updates,dispatch)
    }
   
    
    return(
        <div className='list'>
           {listClient.map(client =>  <Card key={++key} client={client} /> )}



        </div>
    );
}

export default connect(state => state)(List);