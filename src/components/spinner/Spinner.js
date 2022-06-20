import React from "react";
import spinner from "../../assets/spinner.gif"

let Spinner = () => {
    return(
        <React.Fragment>
            <div className="container-fluid text-center">
        <img src={spinner} alt="" />
            </div>
        </React.Fragment>
    )
};

export default Spinner;