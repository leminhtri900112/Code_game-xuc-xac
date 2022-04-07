import React, { Component } from "react";
import { connect } from "react-redux";
import { TAI, XIU } from "../redux/constants/xucXacConstants";

let styles = {
  btnXucXac: {
    width: "150px",
    height: "150px",
  },
};

class XucXac extends Component {
  render() {
    return (
      <div className="p-5 container">
        <p style={{ textAlign: "center" }} className="display-4">
          Kết quả trò chơi
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <button
            onClick={() => {
              this.props.setLuaChon(TAI);
            }}
            style={styles.btnXucXac}
            className="btn btn-danger"
          >
            Tài
          </button>
          <div className="d-flex">
            {this.props.mangXucXac.map((item) => {
              return (
                <img
                  src={item.hinhAnh}
                  style={{ width: "50px", height: "50px" }}
                ></img>
              );
            })}
          </div>
          <button
            onClick={() => {
              this.props.setLuaChon(XIU);
            }}
            style={styles.btnXucXac}
            className="btn btn-dark"
          >
            Xỉu
          </button>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    mangXucXac: state.xucXacReducer.mangXucXac,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setLuaChon: (luaChon) => {
      dispatch({
        type: luaChon,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
