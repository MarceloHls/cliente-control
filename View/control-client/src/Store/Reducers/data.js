import ClientExample from '../../Models/Client'

const initialState = {
    pagePrevis: "",
    pageCurrent: "listClient",
    client: ClientExample,
    listClient: [],
    device: {},
    listDevice: [],
    updates:{
        listClient:false
    }

}
var a = 0;

function Data(state = initialState, action) {
    const { type } = action;
    switch (type) {
        case "set_client": {
            const { client } = action;
            return { ...state, client };
        }
        case "set_list_client": {
            const { listClient } = action;
            return { ...state, listClient };
        }
        case "set_list_device": {
            const { listDevice } = action;
            return { ...state, listDevice };

        }
        case "set_device": {
            const { device } = action;
            return { ...state, device };

        }
        case "set_page": {
            const { pageCurrent } = action;
            return { ...state, pageCurrent };

        }
        case "set_updates": {
            const { updates } = action;
            console.log(updates)
            console.log("updates")

            return { ...state, updates };

        }
        default:
            break;
    }

    return state;
}

export default Data;
