const car = {
    name : 'Merceds Benz',
    colour : 'Red nd Black',
    isrunning :true,
    currentspeed : 0,

    startengine:()=>{
        car.isrunning = true;
    },

    stopengine:()=>{
        car.startengine=false;
    },
    incresepeed :()=>{
        car.currentspeed = car.currentspeed+10;
    },

    printcardetails:()=>{
        console.log(`
        name = ${car.name},
        colour = ${car.colour},
        isrunning = ${car.isrunning},
        speed = ${car.currentspeed},

        `)
    },
};
console.log(`car details`,car);
car.startengine();
car.incresepeed();
car.incresepeed();
car.incresepeed();
car.incresepeed();
car.incresepeed();
car.incresepeed();
car.incresepeed();




car.printcardetails();

console.log(`car total speed ${car['currentspeed']}`);

/*function reduceCarSpeed() {
    car.currentSpeed = car.currentSpeed - 10;
}

const car = {
  // Properties
  name: 'BWM',
  year: 2022,
  isRunning: false,
  currentSpeed: 0,

  // Methods ()
  startEngine: function () {
    car.isRunning = true;
  },
  stopEngine: () => {
    car.isRunning = false;
  },
  increaseSpeed: () => {
    car.currentSpeed = car.currentSpeed + 10;
  },
  decreaseSpeed: reduceCarSpeed,

  printDetails: () => {
    console.log(`
      Car Detail info 
      ----------------------------
      Name: ${car.name}
      Year: ${car.year}
      Running: ${car.isRunning}
      Speed: ${car.currentSpeed}
  `)
  }
}

console.log(`Car Details`, car);
car.printDetails();

car.startEngine();
car['printDetails']();

car.increaseSpeed();
car.increaseSpeed();
car.increaseSpeed();
car.printDetails();

car.decreaseSpeed()
car.decreaseSpeed();
car['printDetails']();

console.log(`Car Current Speed is ${car['currentSpeed']}`);*/
