import React, { Component } from "react";
import KetQua from "./KetQua";
import XucXac from "./XucXac";
import bgGame from "../assets/GameXucXac/bgGame.png";

export default class GameContainer extends Component {
  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${bgGame})`,
        }}
        className="bg-game"
      >
        <XucXac />
        <KetQua />
      </div>
    );
  }
}
