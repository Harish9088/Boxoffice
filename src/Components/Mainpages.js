import React from 'react'
import Title from './Title'
import Navs from "./Navs"

function Mainpages({children}) {
    return (
        <div>
           <Title title="BoxOffice" subtitle="Are you looking for a movie or a character"/> 
           <Navs />
           {children}
        </div>
    )
}

export default Mainpages
