import Recipe from "./Recipe";

class Order {
    constructor(data = {}) {
        this.id = data.id || undefined;
        //=================================================
        this.recipes = data.recipes ? data.recipes.map((r) => new Recipe(r)) : [];
        this.markup = data.markup || 0;
        this.startTime = data.startTime || 0;
    }
}

export default Order;