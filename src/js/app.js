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
            <div class="card hoverable">
                <div class="card-image waves-effect waves-block waves-light" >
                    <img class="activator imagen" src="${photo}">
                </div>
                <div class="card-content">
                    <a class="card-title titulo activator grey-text text-darken-4">${name}<span class="btn-floating blue accent-3 pulse right"><i class="material-icons">+</i></span></a>
                </div>
                <div class="card-action">
                <p><a href="${link}" target="_blank" style="color: #2979FF ">Ir a la pagina</a></p>
                </div>
                <div class="card-reveal justify-align">
                    <span class="card-title blue-text text-accent-3">${name}<span class="btn-floating waves-effect waves-light blue accent-3 right"><i class="fas fa-times-circle"></i></span></span>
                    <br>
                    <p class="grey-text text-darken-3">${address} - ${district}</p>
                    <br>
                    <p class="blue-text text-accent-4">${schedule}</p>
                    <br>
                    <p class="grey-text text-darken-3">${description}</p>
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