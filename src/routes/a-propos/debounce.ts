export const debounce = (callback, tick: number = 400) => {
	let timeout = null;
	let last_call = Date.now();
	return (...args) => {
		const now = Date.now();

		const invoke = () => {
			last_call = now;
			callback(...args);
		};

		clearTimeout(timeout);

		if (now - last_call >= tick) {
			invoke();
		} else {
			timeout = setTimeout(invoke, tick - (now - last_call));
		}
	};
};
