import React from "react";
import Showcard from "./ShowCard";
import { FlexGrid } from "../styled";
import IMAGE_NOT_FOUND from "../../Images/not-found.png";
import { useShows } from "../../misc/customHooks";

function Showgrid({ data }) {
  const [starredShows, dispatchStarred] = useShows();

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        function onStarClick() {
          if (isStarred) {
            dispatchStarred({ type: "REMOVE", showId: show.id });
          } else {
            dispatchStarred({ type: "ADD", showId: show.id });
          }
        }
        return (
          <Showcard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
}

export default Showgrid;
