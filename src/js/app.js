const filterFoodsy = (foodsyRestaurants, inputFoodsy) => {
    containerRestaurant.innerHTML = '';

    foodsyRestaurants.filter(objeto => {
        if (objeto.type.toUpperCase().includes(inputFoodsy.toUpperCase())) {
            printFoodsy(objeto.name, objeto.address, objeto.district, objeto.photo, objeto.description, objeto.schedule, objeto.link)
        }
    });
};

const printFoodsy = (name, address, district, photo, description, schedule, link) => {
    let templateRestaurant = '';
    templateRestaurant +=
        `<div class="col m4">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light" >
                    <img class="activator imagen" src="${photo}">
                </div>
                <div class="card-content">
                    <span class="card-title titulo activator grey-text text-darken-4">${name}<i class="material-icons right">info</i></span>
                    <p><a href="${link}" target="_blank">Ir a la pagina</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${name}<i class="material-icons right">X</i></span>
                    <br>
                    <p>${address} - ${district}</p>
                    <br>
                    <p>${schedule}</p>
                    <br>
                    <p>${description}</p>
                </div>
            </div>
        </div>`;

    containerRestaurant.innerHTML += templateRestaurant;
};

fetch('../data/foodsy.json')
    .then(data => data.json())
    .then(result => {
        foodsyRestaurants = result;
        foodsyRestaurants.map(objFoodsy => {
            printFoodsy(objFoodsy.name, objFoodsy.address, objFoodsy.district, objFoodsy.photo, objFoodsy.description, objFoodsy.schedule, objFoodsy.link)
        });
    })
    .catch(error => console.log(error));

