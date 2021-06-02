import React, { useEffect, useState } from "react";
import Mainpages from "../Components/Mainpages";
import { apiGet } from "../misc/config";
import { useShows } from "../misc/customHooks";
import Showgrid from "../Components/Shows/ShowGrid";
function Starred() {
  const [starred] = useShows();
  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map((showId) => apiGet(`/shows/${showId}`));
      Promise.all(promises)
        .then((apiData) => apiData.map((show) => ({ show })))
        .then((results) => {
          setShows(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);
  return (
    <Mainpages>
      {isLoading && <div>Shows are still loading</div>}
      {error && <div>Error occured:{error}</div>}
      {!isLoading && !shows && <div>No shows are added</div>}
      {!isLoading && shows && !error && <Showgrid data={shows} />}
    </Mainpages>
  );
}
export default Starred;
