import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import { apiGet } from '../misc/config'

function Show() {
    const {id} = useParams()
    const [show,setShow]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(() => {
        let isMounted=true
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
        .then(results=>{
            if(isMounted){
                setIsLoading(false);
                setShow(results)}
        }).
        catch(error=>{
            if(isMounted){
                setIsLoading(false);
                setError(error.message)
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
          welcome to the show
        </div>
    )
}

export default Show
