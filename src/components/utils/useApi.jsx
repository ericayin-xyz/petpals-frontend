import { useEffect, useState } from "react"
import axios from "axios"


const useApi = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(url)
            .then((res) => res.data)
            .then((json) => {
                setData(json)
            })

        // axios.get(url)
        //     .then((res) => res.data)
        //     .then((json) => {
        //         setData(json)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }, [])
    return [data]
}

export default useApi

