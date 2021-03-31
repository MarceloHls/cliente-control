import { Provider } from 'react-redux'
import Store from '../Store'


import './style.css'

import Header from './Header/index'
import Main from './Main/index'
import Menu from './Menu/index'
import Footer from './Footer/index'


function App() {

    return (
        <div className="app">
            <Provider store={Store}>
                <Header />
                <Menu />
                <Main />
            </Provider>
            <Footer />
        </div>
    )
}

export default App;