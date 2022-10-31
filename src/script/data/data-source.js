class DataSource {
    static searchFood(name) {
      return fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          if (responseJson.strMeal) {
            return Promise.resolve(responseJson.strMeal);
          } else {
            return Promise.reject(`${name} is not found`);
          }
        });
    }
  }
  
  export default DataSource;
  