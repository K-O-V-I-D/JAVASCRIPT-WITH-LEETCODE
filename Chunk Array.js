var chunk = function(arr, size) {
    const result = [];
    let curr = [];
    for(let i = 0;i < arr.length; i++) {
        curr.push(arr[i])
        if(curr.length == size) {
            result.push(curr);
            curr = [];
        }
    }

    if(curr.length > 0) result.push(curr);
    return result;
};
