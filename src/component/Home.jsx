import React from "react";
import ShowList from "./showList";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import FeaturedShows from "./featuredShows";
import Pages from "./Pages";

function Home() {
  const { loading, showList, Action, Crime, Fantasy, SciFi, Thriller } =
    useSelector((state) => state.show);
  if (loading) return <Loading loading={loading}></Loading>;
  return (
    <>
      <Loading loading={loading}></Loading>
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
