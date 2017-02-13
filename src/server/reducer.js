/**
 * Created by zhoujialin on 2017/2/10.
 */
import {
  addRoom,
  removeRoom
} from "./core.js"

//分配事件处理
export default function reducer(state, action){
  switch(action.type){
    case "ADD_ROOM":
      return addRoom(state, action.room)
    case "REMOVE_ROOM":
      return removeRoom(state, action.payload)
  }

  return state
}

