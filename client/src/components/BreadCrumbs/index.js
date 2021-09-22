import React from "react";
import "./style.css";

function BreadCrumbs() {
  return (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">FAQs</li>
        </ol>
    </nav>
  )
}

export default BreadCrumbs;