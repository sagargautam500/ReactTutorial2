import React from "react";

function Container({children}) {
  return (
    <>
      <div className="card" style={{width: "50%", textAlign:"center"}}>
        <div className="card-body">
          {children}
        </div>
      </div>
    </>
  );
}

export default Container;
