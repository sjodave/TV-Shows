import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ShowDetails from "./component/ShowDetails";
import NavigationBar from "./component/Navbar";
import ShowList from "./component/showList";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoading, setSortList } from "./redux/reducer";

function App() {
  const dispatch = useDispatch();
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
  const { Action, Crime, Drama, Thriller, Fantasy, SciFi } = useSelector(
    (state) => state.show
  );
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showDetails" element={<ShowDetails />} />
        <Route
          path="/Action"
          element={
            <ShowList
              className="element1"
              title="Action"
              showList={Action}
            ></ShowList>
          }
        />
        <Route
          path="/Crime"
          element={
            <ShowList
              className="element1" //for changing css
              title="Crime"
              showList={Crime}
            ></ShowList>
          }
        />
        <Route
          path="/Fantasy"
          element={
            <ShowList
              className="element1"
              title="Fantasy"
              showList={Fantasy}
            ></ShowList>
          }
        />
        <Route
          path="/Drama"
          element={
            <ShowList
              className="element1"
              title="Drama"
              showList={Drama}
            ></ShowList>
          }
        />
        <Route
          path="/Thriller"
          element={
            <ShowList
              className="element1"
              title="Thriller"
              showList={Thriller}
            ></ShowList>
          }
        />
        <Route
          path="/SciFi"
          element={
            <ShowList
              className="element1"
              title="SciFi"
              showList={SciFi}
            ></ShowList>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
