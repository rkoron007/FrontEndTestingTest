import BenchesReducer from "../benches_reducer";
import { testBenches, newBench } from "../../testUtil/bench_helper";
import * as BenchActions from "../../actions/bench_actions";

describe("This is one sick reducer you got here.", ()=>{
    test("give no action it does nothing", () => {
      expect(BenchesReducer(undefined, {})).toEqual({});
    });
});

describe("Let's take that reducer for a whirl.", ()=>{
    test("should have benches and stuff", () => {
      let action = {
        type: BenchActions.RECEIVE_BENCHES,
        benches: testBenches
      };
      expect(BenchesReducer({}, action)).toEqual(testBenches);
    });

    test("NO! DO NOT MODIFY THAT STATE", () => {
      let action = {
        type: BenchActions.RECEIVE_BENCH,
        bench: newBench
      };

      let state = {apple:"apple"};
      BenchesReducer(state, action);
      expect(state).toEqual({apple:"apple"});
    });
});

/*
NOTE: Our frontend state shape looks like this:
{
  benches: {
    1: {
        id: 1,
        description: "...",
        lat: 0.0,
        lng: 0.0
      },
    2: {
      id: 2,
      description: "...",
      lat: 0.0,
      lng: 0.0
    },
    ...
  }
  ...
}
*/
