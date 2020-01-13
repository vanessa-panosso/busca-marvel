class ListHero {
    
    constructor() {
        this._heros = [];
    }
    
    add(heros) {
        this._heros = heros;
    }
    
    get heros() {
        
        return [].concat(this._heros);
    }
}