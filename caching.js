function addTo80(n) {
	return n + 80;
}

let cache = {
	// 5: 85
};
function memoisedAddTo80(n) {
	if (n in cache) {
		return cache[n];
	} else {
		console.log("long time");
		cache[n] = n + 80;
		return cache[n];
	}
}

// if addTo80(5) occurs several times and it takes long time, you can memoise.
// addTo80(5);
// addTo80(5);
// addTo80(5);

memoisedAddTo80(5);
