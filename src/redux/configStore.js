// File quan ly tat ca state cua ung dung
import {combineReducers, createStore} from 'redux';

import {GioHangReducer} from '../redux/GioHangReducer'

const rootReducer = combineReducers({
    // Cac state sau nay khai bao tai day
    stateGioHang: GioHangReducer
})

// Tao cac store chua rootReducer (Xem nhu state cua ung dung)
export const store = createStore(rootReducer);