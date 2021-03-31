import { connect } from 'react-redux'

import './style.css'

import SetClient from '../../../../../../Business/setClient'



function Card(state) {
    const { client, data, dispatch } = state

    const { name, numberOfDevices } = client

    return (
        <div className='card' onClick={() => {
            SetClient.SetClient(client,dispatch)
        }}>
            <div className={'box'}>
                <p>Nome</p>
                <p>{name}</p>
            </div>
            <div className={'box'}>
                <p>Aparelhos</p>
                <p>{numberOfDevices}</p>
            </div>

        </div>
    );
}

export default connect(state => state)(Card);