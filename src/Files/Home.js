import React,{useState} from "react"
import Mainpages from "../Components/Mainpages"
import { apiGet } from "../misc/config"


function Home() {
    const [input,setInput]=useState("")
    const [results,setResults]=useState(null)

    const onInputChange=(e)=>{
           setInput(e.target.value)
    }
    const onKeyPress=(e)=>{
        if(e.keyCode===13)
        onSearch()
 }
    const onSearch=()=>{
       apiGet(`/search/shows?q=${input}`)
        .then(result=>
            {setResults(result);
            console.log(result)}
        )}
        const renderResults=()=>{
            if(results && results.length===0){
                return <div>No data Found</div>
            }
            if(results && results.length>0){
                return <div>{results.map(item=><div key={item.show.id}>{item.show.name}</div>)}</div>
            }
        }
    return (
        <Mainpages>
           <input type="text" value={input} onChange={onInputChange} onKeyDown={onKeyPress} placeholder="Search for movie or actor"/>
           <button onClick={onSearch}>Search</button>
          {renderResults()}
        </Mainpages>
    )
}

export default Home
