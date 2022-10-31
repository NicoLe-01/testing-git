class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navBar flex list-none bg-green-500 items-center justify-between">
        <div class="flex pl-10">
          <h2 class="text-2xl font-bold py-5 px-5 font-serif">Wareg</h2>
        </div>
        <div class="flex text-2xl font-sans">
          <li class="flex-auto w-32 hover:font-bold hover:cursor-pointer">
            Home
          </li>
          <li class="flex-auto w-32 hover:font-bold hover:cursor-pointer">
            About
          </li>
          <li class="flex-auto w-32 hover:font-bold hover:cursor-pointer">
            Contact
          </li>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
