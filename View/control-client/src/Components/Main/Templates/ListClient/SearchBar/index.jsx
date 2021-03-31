import { connect } from 'react-redux'

import './style.css'

import SearchResult from './SearchResult/index'


function SearchBar({ state }) {
    return (
        <div className='search-bar'>
            <dir className='search'>
                <input type="text" />
                <button>Pesquisar</button>
            </dir>

            <button>Criar Cliente</button>
            <SearchResult />
        </div>
    );
}

export default connect(state => ({ state }))(SearchBar);