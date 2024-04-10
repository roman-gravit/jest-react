import { delay } from "./delay";

describe("delay", () => {
	test("normal", async () => {
		const sum = await delay(()=> 5 + 5, 1000);
		expect(sum).toBe(10);
	});


});