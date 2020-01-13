class HeroDetail {

    constructor() {
        var id = location.search.split("?")[1];
        var request = new XMLHttpRequest();
        var url = 'https://kitsu.io/api/edge/characters/' + id;
        request.open('GET', url, false);
        request.send();
        const result = JSON.parse(request.response);        
        let $ = document.querySelector.bind(document);
        this._element = $('#detail');
        this.update(result.data);
    }

    template(character) {

        return `
        <div class="row aligh-center">
            <img src="${character.attributes.image.original}" class="image" alt="Avatar"\>
        </div>
        <div class="atribute">
        <div class="row">
            <span><b>Código: </b></span>
            <span>${character.id}</span>
        </div>
        <div class="row">
            <span><b>Personagem: </b></span>
            <span>${character.attributes.name}</span>
        </div>
        <div class="row">
            <span><b>Outros nomes: </b></span>
            <span>${character.attributes.otherNames}</span>
        </div>
        <div class="row">
            <span><b>Descrição: </b><\span>
            <span>"${character.attributes.description}</span>
        </div>                
        `;
    }

    update(character) {
        this._element.innerHTML = this.template(character);
    }
}
