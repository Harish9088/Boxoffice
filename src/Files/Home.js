import React, { useState } from "react";
import Mainpages from "../Components/Mainpages";
import { apiGet } from "../misc/config";
import Showgrid from "../Components/Shows/ShowGrid";
import Actorgrid from "../Components/Actors/ActorGrid";
import { useLastQuery } from "../misc/customHooks";
import {
  SearchInput,
  RadioInputsWrapper,
  SearchButtonWrapper
} from "./Home.styled";
import CustomRadio from "../Components/customRadio";

function Home() {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState("");
  const [searchOption, setSearchOption] = useState("shows");

  const isShowSearch = searchOption === "shows";

  function onSearch() {
    apiGet(`/search/${searchOption}?q=${input}`).then((res) => {
      setResults(res);
      // console.log(res);
    });
  }

  const onRadioChange = (e) => {
    setSearchOption(e.target.value);
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <Showgrid data={results} />
      ) : (
        <Actorgrid data={results} />
      );
    }
    return null;
  };

  return (
    <Mainpages>
      <SearchInput
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
          // console.log(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            onSearch();
          }
        }}
        value={input}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="Shows"
            checked={isShowSearch}
            onChange={onRadioChange}
          />
        </div>
        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowSearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </Mainpages>
  );
}
export default Home;
