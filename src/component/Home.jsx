import React from "react";
import ShowList from "./showList";
import { useSelector } from "react-redux";
import FeaturedShows from "./featuredShows";
import Pages from "./Pages";

function Home() {
  const { showList, Action, Crime, Fantasy, SciFi, Thriller } = useSelector(
    (state) => state.show
  );
  return (
    <>
      <FeaturedShows></FeaturedShows>
      <ShowList
        className="allShows"
        title="All_Shows"
        showList={showList}
      ></ShowList>
      <ShowList title="Action" showList={Action}></ShowList>
      <ShowList title="Crime" showList={Crime}></ShowList>
      <ShowList title="Thriller" showList={Thriller}></ShowList>
      <ShowList title="SciFi" showList={SciFi}></ShowList>
      <ShowList title="Fantasy" showList={Fantasy}></ShowList>
      <Pages></Pages>
    </>
  );
}
export default Home;
