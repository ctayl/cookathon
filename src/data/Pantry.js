import STATE from "./Enums";

class Pantry {
    constructor(data = {}) {
        this.id = data.id || undefined;
        //=================================================
        this.name = data.name || 'unnamed';
        this.state = data.state || STATE.RAW;
        this.image = data.image || EMPTY_STATE.IMAGE;
        this.value = data.value || 0;
        this.burnTime = data.burnTime || 0;
    }
}

export default Pantry;