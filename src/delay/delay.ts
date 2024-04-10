export { delay };

const delay = (callback: Function, ms: number) => {
	return new Promise((resolve) => {
		setTimeout(()=> {
			resolve(callback());
		}, ms);
	})
}
