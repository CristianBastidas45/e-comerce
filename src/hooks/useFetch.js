import axios from "axios"
import { useState } from "react"

const useFetch = () => {

    const [infoApi, setInfoApi] = useState()

    const getApi = (url, getConfig={}) => {
        axios.get(url,getConfig)
        .then(res => setInfoApi(res.data))
        .catch(err => console.log(err))
    }

    return [ infoApi, getApi]

}

export default useFetch