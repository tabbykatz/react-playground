import React, { useState } from 'react';
import './App.css';

function Cat() {
    const [ url, setUrl ] = useState('')

    function fetch_data(){
        fetch('https://api.thecatapi.com/v1/images/search').then(res=>{
            if(res.ok){
                return res.json();
            }
            throw new Error('Request failed.');
        },networkError=> console.log(networkError.message)
        ).then(jsonRes=>{
            setUrl(jsonRes[0].url)
            // console.log(jsonRes[0])
        })
    }
    return (
        <div className="cat">
            <div><button className='catbtn' onClick={fetch_data}>Moar Cats!</button></div>
            <div><img alt='random cats' src={url || 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGl0dGxlJTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'}className='catimg' /></div>
            
        </div>
    )
}
export default Cat;