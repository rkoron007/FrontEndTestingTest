import { sum, screamify, quietfy} from "../practice.js";

describe("practice functions", ()=>{
    test("sum of two numbers", () => {
      expect(sum(2,3)).toEqual(5);
    });

    test("YEALLING", () => {
      expect(screamify("hello")).toEqual("HELLO");
    });
    test("..nooo...", () => {
      expect(quietfy("NO")).toEqual("no");
    });

});
