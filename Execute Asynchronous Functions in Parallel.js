let promiseAll = async (functions) => {
    return new Promise((resolve, reject) => {
        const n = functions.length, results = new Array(n);
        let resolved = 0, rejected = 0;
        functions.forEach(async (fn, i) => {
            try {
                results[i] = await fn();
                if (++resolved === n) {
                    resolve(results);
                }
            }
            catch (e) {
                if (++rejected === 1) {
                    reject(e);
                }
            }
        });
    });
};
