class DataSource {
  static searchFood(name) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${name} is not found`);
        }
      });
  }
}

export default DataSource;
