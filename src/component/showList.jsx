import React from "react";
import "../App.css";
import Show from "./show";
function ShowList(props) {
  const { showList } = props;
  return (
    <div className="showListRow">
      <h6 className="category-title">{props.title}</h6>
      <div className={props.className ? props.className : "element"}>
        {showList.map((show) => {
          return (
            <div className="col-sm-2 col-4">
              <Show shows={show}></Show>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowList;
