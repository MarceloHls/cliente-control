const axios = require("axios")

function teste() {
    axios.default.get("https://localhost:5001/client/list")
        .then(a => {
            console.log(a)
        })

}

export default teste;