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

function showCity(prop, asc) {
    listCity = listCity.sort(function(a, b) {
        if (asc) {
            return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        } else {
            return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
    });
    showCity();
}

showCity('id', true);

// function challangeCity(jsonObj) {
//   var london = document.getElementById('01');
//   london.textContent = jsonObj['city'];
//
//   var tokio = document.getElementById('02');
//   tokio.textContent = jsonObj['city'];
//
//   var kyiv = document.getElementById('03');
//   kyiv.textContent = jsonObj['city'];
//
// }

console.log(london);

// let name = [];
// for (let i=0; i < listCity.length; i++){
//   for ( let key in listCity[i]) {
//     if (name.indexOf(key) === -1) {
//       name.push(key);
//       console.log(name.id[09]);
//     }
//   }
// }
