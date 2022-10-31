import React from "react";
import "./App.css";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowDetails from "./component/ShowDetails";
import NavigationBar from "./component/Navbar";
import ShowList from "./component/showList";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoading, setSortList } from "./redux/reducer";

function App() {
  const dispatch = useDispatch();
  const {
    Action,
    Crime,
    Drama,
    Thriller,
    Fantasy,
    SciFi,
    searchedShow,
    showList,
    page,
  } = useSelector((state) => state.show);
  useEffect(() => {
    dispatch(setLoading(true));
    fetch(`https://api.tvmaze.com/shows?page=${page}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setSortList(data));
        dispatch(setLoading(false));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showDetails" element={<ShowDetails />} />
          <Route
            path="/All_Shows"
            element={
              <ShowList
                display="element1"
                title="All_Shows"
                showList={showList}
              ></ShowList>
            }
          />
          <Route
            path="/Action"
            element={
              <ShowList
                display="element1"
                title="Action"
                showList={Action}
              ></ShowList>
            }
          />
          <Route
            path="/Crime"
            element={
              <ShowList
                display="element1" //for changing css
                title="Crime"
                showList={Crime}
              ></ShowList>
            }
          />
          <Route
            path="/Fantasy"
            element={
              <ShowList
                display="element1"
                title="Fantasy"
                showList={Fantasy}
              ></ShowList>
            }
          />
          <Route
            path="/Drama"
            element={
              <ShowList
                display="element1"
                title="Drama"
                showList={Drama}
              ></ShowList>
            }
          />
          <Route
            path="/Thriller"
            element={
              <ShowList
                display="element1"
                title="Thriller"
                showList={Thriller}
              ></ShowList>
            }
          />
          <Route
            path="/SciFi"
            element={
              <ShowList
                display="element1"
                title="SciFi"
                showList={SciFi}
              ></ShowList>
            }
          />
          <Route
            path="/Search"
            element={
              <ShowList
                display="element1"
                title="Search Results"
                showList={searchedShow}
              ></ShowList>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
