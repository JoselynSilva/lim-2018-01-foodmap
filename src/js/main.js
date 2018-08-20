const searchFoodsy = document.getElementById('type-foodsy'),
    containerRestaurant = document.getElementById('container'),
    mensajeError = document.getElementById('msj-error');

searchFoodsy.addEventListener('keyup', () => {
        inputFoodsy = searchFoodsy.value;
        filterFoodsy(foodsyRestaurants, inputFoodsy);
});