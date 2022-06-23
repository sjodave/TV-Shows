import React from "react";
import "./App.css";

import ShowList from "./component/showList";
import { setLoading, setSortList, sortListItem } from "./redux/reducer";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";

function Home() {
  const dispatch = useDispatch();
  const {
    loading,
    showList,
    sortedShowList,
    Action,
    Crime,
    Fantasy,
    SciFi,
    Thriller,
  } = useSelector((state) => state.show);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Tv Shows</h1>
      <Loading loading={loading}></Loading>
      <ShowList title="All Shows" showList={sortedShowList}></ShowList>
      <ShowList title="Action" showList={Action}></ShowList>
      <ShowList title="Crime" showList={Crime}></ShowList>
      <ShowList title="Thriller" showList={Thriller}></ShowList>
      <ShowList title="Sci-Fi" showList={SciFi}></ShowList>
      <ShowList title="Fantasy" showList={Fantasy}></ShowList>
    </div>
  );
}
export default Home;
