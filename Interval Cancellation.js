/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function(fn, args, t) {
    fn(...args)
    const itervalId = setInterval(() => fn(...args), t)

    return clearInterval.bind(null, itervalId)
}
