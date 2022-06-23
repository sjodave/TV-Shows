import React from "react";
import "../App.css";
import Show from "./show";
function ShowList(props) {
  const { showList } = props;
  return (
    <>
      <h5 className="row text-primary">{props.title}</h5>
      <div className={props.className ? props.className : "element"}>
        {showList.map((show) => {
          return (
            <div className="col-sm-2 col-3">
              <Show shows={show}></Show>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShowList;
