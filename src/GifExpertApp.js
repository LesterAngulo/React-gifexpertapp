import React, {useState} from 'react';
import  AddCategories  from './components/AddCategories.js';
import { GifGrid } from './components/GifGrid.js';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['One Punch']) 

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategories setCategories={ setCategories }/>
            <hr/>
        
            <ol>
                { 
                categories.map( category => 
                    <GifGrid 
                    key={category}                    
                    category ={category}
                    />
                ) 
                }
            </ol>
        </>
    )
}
