import { useEffect, useState } from "react"
import {getGif} from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    
    const [state, setstate] = useState({
        data:[],
        loagding:true
    });

    useEffect( () => {

        getGif( category )
            .then( imgs => {
                    setstate({
                        data: imgs,
                        loagding: false
                    });
            });


    }, [category])

    return state;
}
