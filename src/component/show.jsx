import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setCurrentShow, setCrewData } from "../redux/reducer";
import { useDispatch } from "react-redux";
function Show(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { original } = props.shows.image;
  return (
    <>
      <div
        className="showGrid"
        value={props}
        onClick={(e) => {
          // fetch crew details
          fetch(`https://api.tvmaze.com/shows/${props.shows.id}/cast`)
            .then((resp) => {
              return resp.json();
            })
            .then((crewData) => {
              dispatch(setCrewData(crewData));
            });
          dispatch(setCurrentShow(props.shows));
          navigate("/showDetails");
        }}
      >
        <img
          src={original}
          alt=""
          style={{
            height: "250px",
            width: "250px",
            borderRadius: "5px",
          }}
        />
      </div>
    </>
  );
}
export default Show;
