import { calculateBasketTotal } from "./logic";

describe("logic", () => {
  describe("calculateBasketTotal", () => {
    it("should return the correct total when given a list of products", () => {
      const products = [
        {
          id: 1,
          name: "ps5",
          price: 500.0,
        },
        {
          id: 2,
          name: "shirt",
          price: 13.5,
        },
      ];

      expect(calculateBasketTotal(products)).toEqual(513.5);
    });
  });
});
