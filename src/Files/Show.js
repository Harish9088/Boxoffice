import React,{useEffect,useReducer} from 'react'
import { useParams } from 'react-router'
import { apiGet } from '../misc/config'
import ShowMainData from "../Components/Shows/ShowMainData"
import Details from "../Components/Shows/Details"
import Seasons from "../Components/Shows/Seasons"
import Cast from "../Components/Shows/Cast"

function Show() {
    const {id} = useParams()
    
    
    const initialState={show:null,isLoading:true,error:null}

    const reducer=(state,action)=>{
          switch(action.type){
              case "FETCH_SUCCESS":
                  return {isLoading:false,error:null,show:action.show}
               case "FETCH_FAIL":
                   return {...state,isLoading:false,error:action.error}
                   default:
                       return state
                }
    }
     
    const [{show,isLoading,error}, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        let isMounted=true
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
        .then(results=>{
            if(isMounted){
                dispatch({type:"FETCH_SUCCESS",show:results});
               }
            }).catch(error=>{
            if(isMounted){
                dispatch({type:"FETCH_FAIL",error:error.message})
                }
           
        })
        return ()=>{isMounted=false;}
        
    }, [id])

    if(isLoading){
        return <div>Page is being Loading</div>
    }
    if(error){
        return <div>Error occured:{error}</div>
    }
    return (
        <div>
        <ShowMainData
        image={show.image}
        name={show.name}
        summary={show.summary}
        rating={show.rating}
        tags={show.genres}
      />
        <div>
            <h2>Details</h2>
            <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
        </div>
        <div>
            <h2>Seasons</h2>
            <Seasons seasons={show._embedded.seasons} />
        </div>
        <div>
            <h2>Cast</h2>
            <Cast cast={show._embedded.cast} />
        </div>
         </div>
    )
}

export default Show
