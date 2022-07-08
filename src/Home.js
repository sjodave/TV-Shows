import React from "react";
import "./App.css";
import ShowList from "./component/showList";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";

function Home() {
  const { loading, showList, Action, Crime, Fantasy, SciFi, Thriller } =
    useSelector((state) => state.show);
  console.log("home");
  return (
    <>
      <h1 style={{ textAlign: "center" }}>📺 Tv Shows 🎥</h1>
      <Loading loading={loading}></Loading>

      <ShowList
        className="allShows"
        // id="20vh"
        title="All_Shows"
        showList={showList}
      ></ShowList>
      <ShowList title="Action" showList={Action}></ShowList>
      <ShowList title="Crime" showList={Crime}></ShowList>
      <ShowList title="Thriller" showList={Thriller}></ShowList>
      <ShowList title="SciFi" showList={SciFi}></ShowList>
      <ShowList title="Fantasy" showList={Fantasy}></ShowList>
    </>
  );
}
export default Home;
