import React from "react";

export default function Footer({year,fullname,studentId}){
    return (
    <div className="mt-3">
    <p className="text-secondary text-center">
      copyright © {year} {fullname} {studentId}
    </p>
  </div>
  )
}