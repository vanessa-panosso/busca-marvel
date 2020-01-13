class HerosTable {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._listHero = new ListHero();
    const element = $('#heroView');
    this.view = new HerosView(element);
    this.view.update(this._listHero);
    this.pagination = Pagination;
  }

  findCharacters(event) {
    event.preventDefault();
    this.changePage(1);
  }
  changePage(page) {
    var request = new XMLHttpRequest();
    const value = form.search.value.toLowerCase();
    var url = 'https://kitsu.io/api/edge/characters?filter[name]=' + value + '&page[offset]=' + (page-1);
    request.open('GET', url, false);
    request.send();
    const result = JSON.parse(request.response);
    this._updateTable(result.data);
    this.pagination.Init(document.getElementById('pagination'), {
      size:  Math.ceil(result.meta.count / 10), // pages size
      page: page,  // selected page
      step: 3   // pages before and after current
  })
  }
  _updateTable(data) {
    this._listHero.add(data);
    this.view.update(this._listHero);
  }
}

