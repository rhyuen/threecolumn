import React, { Component } from "react";
import data from "./quizdata.js";
import styled from "styled-components";

export default class Quiz extends Component {
  state = data;
  render() {
    return <div>{data.choices["choice-1"].choice}</div>;
  }
}
