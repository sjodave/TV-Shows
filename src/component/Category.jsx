import React from "react";
import { Link } from "react-router-dom";
export default function Category(props) {
  return (
    // <Link to="/shows/{props.title}">
    <select
      onClick={(event) => {
        const sortedShow = props.showList.filter((show) => {
          return show.genres.includes(event.target.value);
        });
        {
          event.target.value
            ? props.sortList(sortedShow)
            : props.sortList(props.showList);
        }
      }}
    >
      <option value="">Category</option>
      <option href="/{event.target.value}" value="Crime">
        Crime
      </option>
      <option value="Action">Action</option>
      <option value="Drama">Drama</option>
      <option value="Fantasy">fantasy</option>
    </select>
    // </Link>
  );
}
