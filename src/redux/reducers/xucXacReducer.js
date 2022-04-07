import { randomIntFromInterval } from "../../utils/randomNumber";
import { PLAY_GAME, TAI, XIU } from "../constants/xucXacConstants";

let initialState = {
  luaChon: null,
  soLuotChoi: 0,
  soLuotThang: 0,
  mangXucXac: [
    {
      hinhAnh: "./gameXucXacImg/1.png",
      giaTri: 1,
    },
    {
      hinhAnh: "./gameXucXacImg/1.png",
      giaTri: 1,
    },
    {
      hinhAnh: "./gameXucXacImg/1.png",
      giaTri: 1,
    },
  ],
};

export const xucXacReducer = (state = initialState, action) => {
  switch (action.type) {
    case XIU: {
      return { ...state, luaChon: XIU };
    }

    case TAI: {
      return { ...state, luaChon: TAI };
    }
    case PLAY_GAME: {
      let cloneState = { ...state };
      let count = 0;
      let newMangXucXac = cloneState.mangXucXac.map((xucXac) => {
        let random = randomIntFromInterval(1, 6);
        count += random;
        return {
          hinhAnh: `./gameXucXacImg/${random}.png`,
          giaTri: random,
        };
      });
      cloneState.luaChon === TAI && count >= 11 && cloneState.soLuotThang++;
      cloneState.luaChon === XIU && count < 11 && cloneState.soLuotThang++;
      cloneState.soLuotChoi++;
      return { ...cloneState, mangXucXac: newMangXucXac };
    }

    default:
      return { ...state };
  }
};
