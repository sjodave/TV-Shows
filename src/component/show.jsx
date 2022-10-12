import React from "react";
import { useNavigate } from "react-router-dom";
import { setCurrentShow, setCrewData } from "../redux/reducer";
import { useDispatch } from "react-redux";
function Show(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="showGrid"
        onClick={(e) => {
          // fetch crew details
          console.log(props.shows);
          fetch(`https://api.tvmaze.com/shows/${props.shows.id}/cast`)
            .then((resp) => {
              return resp.json();
            })
            .then((crewData) => {
              dispatch(setCrewData(crewData));
            })
            .catch((err) => console.log(err));
          dispatch(setCurrentShow(props.shows));
          navigate("/showDetails");
        }}
      >
        <img
          className="w-100 zoom"
          src={props.shows.image ? props.shows.image.medium : "notfound.png"}
          alt=""
          style={{
            height: "32vh",
            cursor: "pointer",
            margin: "5px",
          }}
        />
      </div>
    </>
  );
}
export default Show;
