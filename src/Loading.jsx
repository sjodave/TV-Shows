import React from "react";
export default function Loading(props) {
  return (
    <div style={{ display: "flex" }}>
      {props.loading ? (
        <div class="loader">
          <div class="inner one"></div>
          <div class="inner two"></div>
          <div class="inner three"></div>
        </div>
      ) : null}
    </div>
  );
}
