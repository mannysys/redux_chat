import {expect} from "chai"
import {fromJS,Map,List} from "immutable"
import {v1} from "uuid"

import coreReducer from "../../src/server/reducer"

describe("server端核心Reducer", () => {

  it("可以当做一个reducer", () => {
    var id = v1()
    //定义动作数据
    var actions = [
      {type:"ADD_ROOM",room:{id,name:"1",owner:"eisneim"}},
      {type:"ADD_ROOM",room:{name:"2",owner:"terry"}},
      {type:"ADD_ROOM",room:{name:"3",owner:"eisneim"}},
      {type:"REMOVE_ROOM",payload:{id:id,user:"eisneim"}},
    ]
    const finalState = actions.reduce(coreReducer, undefined)
    console.log(finalState)

    //检查，最后剩下的房间数量是否是2个
    expect(finalState.get("rooms").size).to.equal(2)
    //检查，第一个房间所有者是谁
    expect(finalState.getIn(["rooms",0,"owner"])).to.equal("terry")
  })


})