import React from "react";
import { useParams } from "react-router-dom";

import ShowMainData from "../Components/Shows/ShowMainData";
import Details from "../Components/Shows/Details";
import Seasons from "../Components/Shows/Seasons";
import Cast from "../Components/Shows/Cast";
import { ShowPageWrapper, InfoBlock } from "./Show.styled";
import { useShow } from "../misc/customHooks";

function Show() {
  const { id } = useParams();

  const { show, isLoading, error } = useShow(id);
  console.log(show);

  if (isLoading) {
    return <div>Data is loading</div>;
  }
  if (error) {
    return <div>Error occured:{error}</div>;
  }
  return (
    <ShowPageWrapper>
      <ShowMainData
        image={show.image}
        name={show.name}
        summary={show.summary}
        rating={show.rating}
        tags={show.genres}
      />
      <InfoBlock>
        <h1>Details</h1>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>
      <InfoBlock>
        <h1>Seasons</h1>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>
      <InfoBlock>
        <h1>Cast</h1>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
}

export default Show;
