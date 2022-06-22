import React, { useEffect } from "react";
import "./App.css";
import Search from "./component/search";
import ShowList from "./component/showList";
import { setLoading, setSortList, sortListItem } from "./redux/reducer";
import { useSelector, useDispatch } from "react-redux";
import Category from "./component/Category";
import Loading from "./Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./component/Navbar";

function Home() {
  useEffect(() => {
    dispatch(setLoading(true));
    fetch("https://api.tvmaze.com/shows")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setSortList(data));
        dispatch(setLoading(false));
      });
  }, []);

  const sortList = (sortedShowList) => {
    dispatch(sortListItem(sortedShowList));
  };

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
    <div
      style={{
        marginLeft: "10px",
        marginTop: "80px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Tv Shows</h1>
      <div className="flex">
        <Search showList={showList} sortList={sortList}></Search>
        <Category showList={showList} sortList={sortList}></Category>
      </div>
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
