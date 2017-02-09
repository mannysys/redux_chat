
import { expect } from "chai"
import { v1 } from "uuid"
import { fromJS,Map,List } from "immutable"
import {
  addRoom,
  removeRoom
} from "../../src/server/core.js"


describe("rooms", () => {

  it("能够添加房间：addRoom", () => {
    var firstRoom = {name:"first room", id:v1(), owner:"eisneim"} //初始数据，owner创建房间的用户
    const nextState = addRoom(undefined, firstRoom) //调用添加房间的函数，undefined是初始的state，添加到state中
    const rooms = nextState.get("rooms")  //然后再获取出房间数据
    expect(rooms).to.be.ok   //检查这个房间是否存在
    expect(rooms.get(0)).to.equal(Map(firstRoom)) //检查第一个对象是不是firstRoom这个对象

    const nextNextState = addRoom(nextState,{ //再添加一下state
      name:"second room",owner:"terry"
    })
    //再次检查，getIn是获取生成的数据，获取数组中第2个房间数据
    expect(nextNextState.getIn(["rooms",1,"name"])).to.equal("second room")

  })

})