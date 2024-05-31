var box = document.getElementById("box");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    // console.log(json);
    json.forEach((humus) => {

      console.log(humus);
      box.innerHTML +=  `<div class="box-start"><p>${humus.name}</p> <p>${humus.company.name}</p> <p>${humus.email}</p> <p>${humus.address.suite} ${humus.address.street} street ${humus.address.city} ${humus.address.zipcode} <p>${humus.phone}</p> <p>${humus.website}</p></p></div>`;
    });
  });
