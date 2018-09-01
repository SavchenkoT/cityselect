function getCityList() {
  return [
    {
      "id": "01",
      "city": "London"
    },
    {
      "id": "02",
      "city": "Tokio"
    },
    {
      "id": "03",
      "city": "Kyiv"
    },
    {
      "id": "04",
      "city": "New York"
    },
    {
      "id": "05",
      "city": "Paris"
    },
    {
      "id": "06",
      "city": "Madrid"
    },
    {
      "id": "07",
      "city": "Toronto"
    },
    {
      "id": "08",
      "city": "Mexico"
    },
    {
      "id": "09",
      "city": "Berlin"
    },
    {
      "id": "10",
      "city": "Amsterdam"
    }
  ]
}

function cloneObject(objectToClone) {
    return JSON.parse(JSON.stringify(objectToClone));
}

function findCityById(searchId) {
    return getCityList().reduce(function (foundCity, checkedCity) {
        if (checkedCity.id === searchId) {
            foundCity = cloneObject(checkedCity);
        }

        return foundCity;
    }, false);
}

function showCityById(cityId) {
    let city = findCityById(cityId);
    let cityIsFound = city !== false;
    let textToShow = cityIsFound
        ? city.city
        : 'Город не найден';

    let textContainer = document.getElementById('selectedCityResult');
    textContainer.textContent = textToShow;
}

function showDefaultCity() {
    showCityById("01");
}