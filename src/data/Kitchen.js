class Kitchen {
    constructor(data = {}) {
        this.id = data.id || undefined;
        //=================================================
        this.prepStations = data.prepStations || 0;
        this.cookStations = data.cookStations || 0;
        this.servingStations = data.servingStations || 0;
    }
}

export default Kitchen;