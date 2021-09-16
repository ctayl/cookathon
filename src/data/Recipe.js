import { EMPTY_STATE } from "./Enums";
import Stage from "./Stage";

class Recipe {
    constructor(data = {}) {
        this.id = data.id || undefined;
        //=================================================
        this.name = data.name || 'unnamed';
        this.image = data.image || EMPTY_STATE.IMAGE;
        this.stages = data.stages ? data.stages.map((s) => new Stage(s)) : [];
    }
}

export default Recipe;