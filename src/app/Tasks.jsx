import React from "react";

export default function Tasks({id,title,isDone}){
    return (
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span style={{textDecoration: isDone? "line-through": "none"}}>
            {title}
          </span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
    )
}