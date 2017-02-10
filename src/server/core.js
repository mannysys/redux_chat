import { Map,List,fromJS } from "immutable"
import { v1 } from "uuid"

//初始状态
export const INITIAL_STATE = fromJS({
  rooms: []
})
//添加房间
export function addRoom(state=INITIAL_STATE, room){
  //如果添加的房间不存在就什么都不做，直接返回对象state
  if(!room || !room.owner) return state

  //调用update更新数据，将新数据push进去
  return state.update( "rooms", rooms => rooms.push(Map({
    id: room.id || v1(),
    name: room.name || "no name",
    owner: room.owner,
  })) )

}

export function removeRoom(state, {id, user}){
  const rooms = state.get("rooms")
  var index = rooms.findIndex( r => r.get("id") === id )
  if(index == -1 || rooms.getIn([index, "owner"]) !== user){
    console.log("非房间创建者，不能删除该房间")
    return state
  }
  //将房间删除
  return state.update("rooms", rooms => rooms.splice(index,1))
}












