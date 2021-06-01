import React from 'react'
import Actorcard from "./ActorCard"
import IMAGE_NOT_FOUND from"../../Images/not-found.png"


function ActorGrid({data}) {
    return (
        <div>
             {data.map(({ person }) => (
        <Actorcard
          key={person.id}
          name={person.name}
          gender={person.gender}
          birthday={person.birthday}
          deathday={person.deathday}
          country={person.country ? person.country.name : null}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
        </div>
    )
}

export default ActorGrid
