import React,{useState} from "react"
import ActorGrid from "../Components/Actors/ActorGrid"
import Mainpages from "../Components/Mainpages"
import ShowGrid from "../Components/Shows/ShowGrid"
import { apiGet } from "../misc/config"


function Home() {
    const [input,setInput]=useState("")
    const [results,setResults]=useState(null)
    const [searchOption,setSearchOption]=useState("shows")

    const isSearchOption=searchOption==="shows"

    const onInputChange=(e)=>{
           setInput(e.target.value)
    }
    const onKeyPress=(e)=>{
        if(e.keyCode===13)
        onSearch()
 }
    const onSearch=()=>{
       apiGet(`/search/${searchOption}?q=${input}`)
        .then(result=>
            {setResults(result);
            console.log(result)}
        )}

      const onRadioChange=(e)=>{
          setSearchOption(e.target.value)
      }
        
        const renderResults=()=>{
            if(results && results.length===0){
                return <div>No data Found</div>
            }
            if(results && results.length>0){
                return results[0].show?<ShowGrid data={results}/>:<ActorGrid data={results}/>
                
            }
        }
    return (
        <Mainpages>
           <input type="text" value={input} onChange={onInputChange} onKeyDown={onKeyPress} placeholder="Search for movie or actor"/>
           <div>
               <label htmlFor="shows-search">Shows <input id="shows-search" onChange={onRadioChange} type="radio" value="shows" checked={isSearchOption}/></label>
               <label htmlFor="actors-search">Actors <input id="actors-search" onChange={onRadioChange} type="radio" value="people" checked={!isSearchOption}/></label>
           </div>
           <button onClick={onSearch}>Search</button>
          {renderResults()}
        </Mainpages>
    )
}

export default Home
