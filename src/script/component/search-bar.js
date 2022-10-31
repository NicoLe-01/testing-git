class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchName").value;
  }

  render() {
    this.innerHTML = `
      <form class="flex items-center justify-center pt-10">
      <div class="flex border-2 border-gray-200 rounded">
        <input
          type="search"
          class="px-4 py-2 w-80"
          placeholder="Search Food"
          id="searchName"
        />
        <button id="searchButton" 
          class="px-4 text-white bg-gray-600 border-l hover:bg-gray-800 rounded"
        >
          Search
        </button>
      </div>
    </form>

      `;
    this.querySelector("#searchButton").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
