import React, { Component } from "react";
import { connect } from "react-redux";
import { PLAY_GAME } from "../redux/constants/xucXacConstants";

class KetQua extends Component {
  renderKetQua = () => {
    let count = 0;
    this.props.mangXucXac.forEach((item) => {
      count += item.giaTri;
    });
    return count >= 11 ? `Tài - ${count}` : ` Xỉu -  ${count}`;
  };
  render() {
    return (
      <div className="text-white text-center" style={{ fontSize: "26px" }}>
        {this.props.luaChon && <p>Bạn chọn: {this.props.luaChon}</p>}
        <p>Kết quả: {this.renderKetQua()}</p>
        <p>
          Số bàn thắng:{" "}
          <span className="text-success">{this.props.soLuotThang}</span>
        </p>
        <p>
          Số lượt chơi:{" "}
          <span className="text-danger">{this.props.soLuotChoi}</span>
        </p>
        <button
          className="btn btn-success mt-5"
          onClick={() => {
            this.props.handlePlayGame();
          }}
        >
          Play Game
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    luaChon: state.xucXacReducer.luaChon,
    soLuotChoi: state.xucXacReducer.soLuotChoi,
    soLuotThang: state.xucXacReducer.soLuotThang,
    mangXucXac: state.xucXacReducer.mangXucXac,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePlayGame: () => {
      dispatch({
        type: PLAY_GAME,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KetQua);
