

let numberIteration = 0;
let cars = [];
let brandsCars;
let modelsCars;
let yearsCras;

function car(_brand, _model, _year) {
    this.brand = _brand;
    this.model = _model;
    this.year = _year;
}

document.getElementById("form-loops").addEventListener("submit", function (event) {
    event.preventDefault();

    brandsCars = (document.getElementById("brands").value).split(', ');
    modelsCars = (document.getElementById("models").value).split(', ');
    yearsCars = (document.getElementById("years").value).split(', ');
    numberIteration = document.getElementById("lot").value;

    startProccessList();
    document.getElementById("form-loops").reset();
});

function startProccessList() {
    let i = 0;

    while( i < numberIteration) {
        let limitBrnds = brandsCars.length - 1;
        limitBrnds = Math.floor(Math.random() * (0, limitBrnds) + 0 );

        let limitModels = modelsCars.length - 1;
        limitModels = Math.floor(Math.random() * (0, limitModels) + 0 );


        let limitYears = yearsCars.length - 1;
        limitYears = Math.floor(Math.random() * (0, limitYears) + 0 );

        const newCar = new car(brandsCars[limitBrnds], modelsCars[limitModels], yearsCars[limitYears]);
        const tr = `<tr>
          <td>${i+1}</td>
          <td>${newCar.brand}</td>
          <td>${newCar.model}</td>
          <td>${newCar.year}</td>
        </tr>`;
        document.getElementById('tbody-list').innerHTML += tr;
        cars.push(newCar);
        i++;
    }
    
}


