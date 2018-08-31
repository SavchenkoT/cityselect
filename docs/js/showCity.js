function showCity() {
  let listCity = [
    {
      "id": "01",
      "city": "London",
    },
    {
      "id": "02",
      "city": "Tokio",
    },
    {
      "id": "03",
      "city": "Kyiv",
    },
    {
      "id": "04",
      "city": "New York",
    },
    {
      "id": "05",
      "city": "Paris",
    },
    {
      "id": "06",
      "city": "Madrid",
    },
    {
      "id": "07",
      "city": "Toronto",
    },
    {
      "id": "08",
      "city": "Mexico",
    },
    {
      "id": "09",
      "city": "Berlin",
    },
    {
      "id": "10",
      "city": "Amsterdam",
    },
  ]
}

let name = [];
for (let i=0; i < listCity.length; i++){
  for ( let key in listCity[i]) {
    if (name.indexOf(key) === -1) {
      name.push(key);
      console.log(name.id[09]);
    }
  }
}
