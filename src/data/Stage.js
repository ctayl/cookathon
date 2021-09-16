import { ACTIONS, STATE } from "./Enums";
import Pantry from "./Pantry";

class Stage {
    constructor(data = {}) {
        this.pantries = data.pantries ? data.pantries.map((p) => new Pantry(p)) : [];
        this.quantity = data.quantity || 0;
        this.state = data.state || STATE.RAW;
        this.prepClicks= data.prepClicks || 0;
        this.cookTime = data.cookTime || 0;
        this.order = data.order || 0;
        this.action = data.action || ACTIONS.NOTHING;
    }
}

export default Stage;