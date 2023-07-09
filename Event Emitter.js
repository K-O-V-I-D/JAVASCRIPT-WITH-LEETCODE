class EventEmitter {
    events = new Map();

    subscribe(event, cb) {
        if (!this.events.has(event)) this.events.set(event, new Set());
        this.events.get(event).add(cb);
        return {
            unsubscribe: () => (this.events.get(event).delete(cb), undefined)
        };
    }

    emit(event, args = []) {
        const results = [];
        if (this.events.has(event))
            for (const cb of this.events.get(event))
                results.push(cb(...args));
        return results;
    }
}
