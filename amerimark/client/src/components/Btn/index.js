import React from "react";

function Btn(props) {
  return (
    <button type="button" {...props} className="btn btn-warning" tabIndex="0">
      Submit
    </button>
  );
}
export default Btn;
