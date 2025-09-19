class State {
    constructor(data) {
        this.data = data;
        this.observers = [];
    }
    setState(data){
        this.data = data;
        this.#notify(data);
    }
    #notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
    addSubscriber(observer) {
        this.observers.push(observer);
        return () => {
            this.observers = this.observers.filter(ob => ob !== observer);
        };
    }
}
class StatefulHTMLElement extends HTMLElement {
    update(data) {
        throw new Error("update(data) not implemented");
    }
}

export {State, StatefulHTMLElement};