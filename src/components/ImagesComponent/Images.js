import React from "react";

const Images = props => (
  <div className="col-xs-12 col-md-2">
    <div className="card mb-4 mx-auto">
      <img
        className="card-img-top"
        src={props.src}
        alt={props.alt}
        onClick={props.onClickHandler}
        id={props.id}
      />
    </div>
  </div>
);

export default Images;
