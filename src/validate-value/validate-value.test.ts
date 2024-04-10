import { ValidateValue } from "./valiate-value";

describe("validateValue", () => {
	test("normal", () => {
		expect(ValidateValue(50)).toBe(true);
	});
	test("edge 0", () => {
		expect(ValidateValue(0)).toBe(true);
	});
	test("edge 100", () => {
		expect(ValidateValue(100)).toBe(true);
	});
	test("incorrect 150", () => {
		expect(ValidateValue(150)).toBe(false);
	});
	test("incorect -50", () => {
		expect(ValidateValue(-50)).toBe(false);
	});
});