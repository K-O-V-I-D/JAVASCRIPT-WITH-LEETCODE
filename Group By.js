/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    
    return this.reduce((res, cur) => {
        const item = fn(cur);
        const curArr = res[item] || [];
        curArr.push(cur);
        res[item] = curArr;
        return res;
    },{})
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
