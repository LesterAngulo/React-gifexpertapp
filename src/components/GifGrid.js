import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data: images, loagding} = useFetchGifs(category);
    

    return (
    <>
        <h3 className="animate__animated animate__heartBeat">{category}</h3>

        {loagding && <p className="animate__animated animate__flash">Loading</p> }
        
        <div className="card-Grid">
            
                { images.map( img => 
                 <GifGridItem 
                 key={img.id}
                 {...img}
                 /> 
                 )}    
            
        </div>
    </>
    )
}
