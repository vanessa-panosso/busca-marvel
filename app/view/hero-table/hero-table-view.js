class HerosView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template(model) {

        return `
        <table id="table-hero">
            <thead>
                <tr>
                    <th class="first-column">Personagem</th>
                    <th>Descrição</th>
                </tr>
            </thead>

            <tbody>
                ${model.heros.map(n => `

                    <tr class="tr-line" ondblclick="openDetail(${n.id})">
                        <td class="first-column">
                        <div style="height: 72px; overflow:hidden; z-index: 100;">
                            <img src="${n.attributes.image.original}" class="table-img" alt="Avatar"\>${n.attributes.name}
                        </div>
                        </td>
                        <td>
                        <div style="height: 72px; overflow:hidden;">
                            ${n.attributes.description}
                        </div>
                        </td>
                    </tr>

                `).join('')}
            </tbody>
        </table>

        <div id="pager"></div>
        `;
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }
}
