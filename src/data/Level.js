import Kitchen from "./Kitchen";
import Order from "./Order";

class Level {
    constructor(data = {}) {
        this.id = data.id || undefined;
        //=================================================
        this.name = data.name || 'unnamed';
        this.kitchen = data.kitchen ? new Kitchen(data.kitchen) : {};
        this.orders = data.orders ? data.orders.map((o) => new Order(o)) : [];
        this.goal = data.goal || 0;
    }
}

export default Level;