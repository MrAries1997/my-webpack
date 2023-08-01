import React from "react";
import './reactBabel.css';
import './reactBabel.less';
import dogImg from '../imgs/dog.jpeg';

export default function ReactBabel() {
  return (
    <div className="react_babel_css">
      React Babel Test
      <img src={dogImg} />
    </div>
  )
}