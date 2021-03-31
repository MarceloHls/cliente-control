import ActionPage from '../Store/Actions/page'

function setPageCurrent(dispatch,page){
    dispatch(ActionPage.UpdatePage(page))
}

export default {setPageCurrent}