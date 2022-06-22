import React from "react";
import { searchShows } from "../redux/reducer";
import { useSelector, useDispatch } from "react-redux";

function Search(props) {
  const handleSearch = (ip) => {
    const sortedShowList = props.showList.filter((show) => {
      return show.name.toLowerCase().includes(ip.toLowerCase());
    });
    props.sortList(sortedShowList);
  };

  const dispatch = useDispatch();
  const { inputValue } = useSelector((state) => state.show);
  return (
    <>
      <input
        placeholder="Search Show"
        onChange={(event) => {
          dispatch(searchShows(event.target.value));
          handleSearch(inputValue);
        }}
      ></input>
    </>
  );
}
export default Search;
