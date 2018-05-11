import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../bench_actions";
import * as ApiUtil from "../../util/bench_api_util";

import { testBenches, newBench } from "../../testUtil/bench_helper";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("simple action creators", () => {
  test("I NEED ALL THE BENCHES STAT.",() =>{
    let action = actions.receiveBenches();
    expect(action.type).toEqual("RECEIVE_BENCHES");
  });
  test("I made a bench. Do you want it?",() =>{
    let action = actions.receiveBench();
    expect(action.type).toEqual("RECEIVE_BENCH");
  });
});

describe("async action creators", () => {

test("fetchBenches creates RECEIVE_BENCHES after fetching benches", () => {

  const expectedActions = [
    {
    type: actions.RECEIVE_BENCHES,
    benches: testBenches
    }
  ];


    ApiUtil.fetchBenches = jest.fn(() => {
      return Promise.resolve(testBenches);
    });

    const store = mockStore({ benches: {} });

    // you are making a call to a make store => expect results
    // to be fetched benches
    return store.dispatch(actions.fetchBenches()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
// Explanation of what Promise.resolve does:

// var promise1 = Promise.resolve([1, 2, 3]);

// promise1.then(function (value) {
//   console.log(value);
//   // expected output: Array [1, 2, 3]
// });
