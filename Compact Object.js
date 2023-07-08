function compactObject(obj) {
    if (Array.isArray(obj)) return obj.filter(v => v).map(v => typeof v == 'object' ? compactObject(v) : v);

    for (const key of Object.keys(obj)) {
        const val = obj[key];

        if (!val) {
            delete obj[key];
        } else if (typeof val == 'object') {
            obj[key] = compactObject(val);
        } 
    }

    return obj;
};
