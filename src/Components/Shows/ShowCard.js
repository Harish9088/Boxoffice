import React from 'react'
import {Link} from "react-router-dom"

function ShowCard({id,name,image,summary}) {
    const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";

    return (
        <div>
           <div>
               <img src={image} alt="show"/>
           </div> 
           <h1>{name}</h1>
           <p>{summaryAsText}</p>
           <div className="btns">
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button">Star me
          {/* <Star active={isStarred} /> */}
        </button>
      </div>
        </div>
    )
}

export default ShowCard
