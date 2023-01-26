import readline from 'readline-sync';
import chalk from 'chalk';;

let friends = ['likith' , 'Narendra'];

let Show_firends = 'show friends';
let add_friends = 'add ur frnd name';

let user_actions = [
  Show_firends,
  add_friends
];
let runprogram = true;


while(runprogram){
  let user_input = readline.keyInSelect(user_actions);
  console.log(`user selected option is `,user_input);
  if(user_input === -1){
    console.log(chalk.bgRed(`Stoping the programe`));
    runprogram = false;
  }else{
    let user_seleted_option = user_actions[user_input];
    console.log(`user seleted option`,user_seleted_option);
    if(user_seleted_option === Show_firends){
      console.log(friends);
    }else{
      let add_friend = readline.question(`please add ur frnd name `);
      friends.push(add_friend)
    }

  }
};