import { Square } from "./square";

afterEach(() => {
	jest.clearAllMocks();
  });

describe("Square", () => {
	test("normal", () => {
		expect(Square(2)).toBe(4);
		expect(Square(2)).not.toBe(6);
		expect(Square(2)).toBeLessThan(5);
		expect(Square(2)).toBeGreaterThan(3);
		expect(Square(2)).not.toBeUndefined();
	});

	test("pow 1", () => {
		const spymathPow = jest.spyOn(Math, "pow");
		Square(2);
		expect(spymathPow).toHaveBeenCalledTimes(1);
	});

	test("pow 0", () => {
		const spymathPow = jest.spyOn(Math, "pow");
		Square(1);
		expect(spymathPow).toHaveBeenCalledTimes(0);
	});

});