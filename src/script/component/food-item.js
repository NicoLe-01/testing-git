class FoodItem extends HTMLElement {
  constructor() {
    super();
  }

  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div
      class="container-item flex-col max-w-lg my-10 border border-slate-200 rounded-xl mx-auto p-5 shadow-md"
    >
      <img
        src="${this._food.strMealThumb}"
        class="img-items w-full h-44 object-cover"
      />
      <div class="font-sans pt-3">
        <h3 class="nama font-bold">${this._food.strMeal}</h3>
        <h3 class="asal font-semibold font-mono">${this._food.strArea}</h3>
        <p class="deskripsi font-thin text-sm">
          ${this._food.strInstructions}
        </p>
      </div>
    </div>`;
  }
}

customElements.define("food-item", FoodItem);
