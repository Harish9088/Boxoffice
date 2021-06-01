import React from 'react'
import Title from './Title'
import Navs from "./Navs"

function Mainpages() {
    return (
        <div>
           <Title /> 
           <Navs />
           <input type="text" placeholder="search for movie or character"/>
           <label htmlFor="shows">Shows<input type="radio" value="shows"/></label>
           <label htmlFor="actors">Actors<input type="radio" value="actors"/></label>
            <button>Search</button>
        </div>
    )
}

export default Mainpages
