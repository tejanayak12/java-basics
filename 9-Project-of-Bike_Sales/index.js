import readline from 'readline-sync';
import chalk from 'chalk';
console.log(chalk.bgRed('Welcome To Bajaj_Bikes World'));

const Pulsar = 'Pulsar'

const Discover = 'Discover'

const Avenger = 'avenger'

const Platina = 'platina'


const Menu_of_Bikes = [
    Pulsar,
    Discover,
    Avenger,
    Platina
];
const Pulsar_bikes = ['Pulsar 125cc = Rs.58000',
    'Pulsar 150cc = Rs.85000',
    'Pulsar Ns 200 = Rs.1.85Lakh',
];
const Discover_bikes = ['Discover100cc = Rs.65000 ',
    'Discover 125cc = Rs.75000',
    'Discover 150cc = Rs.85000']

const Avenger_Bikes = ['Avenger 100cc = Rs.85000',
    'Avenger 125cc = Rs.95000',
    'Avenger 180cc = Rs.1.25Lakh']

const Platina_Bikes = ['Platina 100cc = Rs.65000',
    'Platina 110cc = Rs.78000',
    'Platina 125cc = Rs.82000'
];

const Bike_Items = {
    'Pulsar' :Pulsar_bikes,
    'Discover': Discover_bikes,
    'Avenger ': Avenger_Bikes,
    'Platina': Platina_Bikes
};



const userindex = readline.keyInSelect(Menu_of_Bikes);
const userinput = Menu_of_Bikes[userindex];
console.log(`check it ${userinput}`);

const userselected = Bike_Items[userinput];

displaymenuiteams(userinput);

function displaymenuiteams (category){
    const menu = Bike_Items [category];
    if (menu){
        const userindex = readline.keyInSelect(menu);
        const user_Input =menu[userindex];
        console.log(chalk.redBright(`thanks for buying ${user_Input}`));
    }else{
        notselectedanyoption()
   }

};

function notselectedanyoption(){
    console.log(chalk.bgRed('sorry bike was not available'))
};

