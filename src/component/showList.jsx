import React from "react";
import "../App.css";
import Show from "./show";
import { useSelector } from "react-redux";

function ShowList(props) {
  const { showList } = props;
  const className = props.className ? props.className : "element";
  const { loading } = useSelector((state) => state.show);
  return (
    <div className="showListRow">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h6 className="category-title">{loading ? null : props.title}</h6>
        <a href={props.title}>Expand</a>
      </div>
      <div className={className}>
        {showList.map((show, index) => {
          return (
            <div className="col-sm-2 col-4" key={index}>
              <Show shows={show}></Show>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowList;
