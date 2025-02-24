let str = 16; // Base strength
let agi = 14; // Base agility
let int = 16 // Base intelligence
let base_dmg = 38; // every lvl gives him +4 dmg
let bonus_dmg = 0;
let bonus_str = 0;
let bonus_agi = 0;
let bonus_int = 0;
let bonus_armor = 0;
let movement_speed = 280;
let hp_regen = 1.7;
let mana_regen = 1.2;
let armor = 1.33;
let health = 520;
let mana = 267;
let quas_lvl = 0;
let wex_lvl = 0;
let exort_lvl = 0;
let levelup_button = document.querySelector('.level-up');
let str_container = document.querySelector('.str'); 
let agi_container = document.querySelector('.agi'); 
let int_container = document.querySelector('.int'); 
let dmg_container = document.querySelector('.dmg');   
let armor_container = document.querySelector('.armor'); 
let ms_container = document.querySelector('.movement-speed'); //movement speed

let hp_container = document.querySelector('.hp-bar');
let mana_container = document.querySelector('.mana-bar');


let hp_regen_container = document.querySelector('.hp-regen');
let mana_regen_container = document.querySelector('.mana-regen');
window.onload = function(){
    //Creating containers to put stats into them 

    


let level = document.querySelector('#level').innerHTML; // 1 lvl



//Putting stats into containers

dmg_container.innerHTML = base_dmg + '<span style="color:green">+' + bonus_dmg + '</span>' + 
    '&nbsp<img src="' + staticUrl + 'css/img/dmg.png" style="width:30%;">';

armor = Math.floor(armor);
armor_container.innerHTML = '&nbsp' + armor + '<span style="color:green">+' + bonus_armor + '</span>' + 
    '&nbsp&nbsp<img src="' + staticUrl + 'css/img/armor.png" style="width:25%;">';

ms_container.innerHTML = '&nbsp' + movement_speed + '&nbsp<img src="' + staticUrl + 'css/img/western.png" style="width:35%;">';

str_container.innerHTML = str + '<span style="color:green">+' + bonus_str + '</span>' + 
    '&nbsp<img src="' + staticUrl + 'css/img/str.png" style="width:30%;">';

agi_container.innerHTML = agi + '<span style="color:green">+' + bonus_agi + '</span>' + 
    '&nbsp<img src="' + staticUrl + 'css/img/agi.png" style="width:30%;">';

int_container.innerHTML = int + '<span style="color:green">+' + bonus_int + '</span>' + 
    '&nbsp<img src="' + staticUrl + 'css/img/int.png" style="width:30%;">';

hp_container.innerHTML = health + "&nbsp/&nbsp" + health + '<span class="hp-regen">+' + hp_regen + '</span>';

mana_container.innerHTML = mana + "&nbsp/&nbsp" + mana + '<span class="mana-regen">+' + mana_regen + '</span>';


}



levelup_button.addEventListener('click',function(){

str = str + 2.2;
str = Math.floor(str);
agi = agi + 2;
if (level == 5){
    agi = agi - 1;
}
if (level == 16){
    agi = agi - 1;
}



int = int + 4;
base_dmg = base_dmg + 4;

health = health + 40;
if(level == 5){
    health = health + 20;
}
if(level == 15){
    health = health + 20;
}
if(level == 10){
    health = health + 20;
}
if(level == 20){
    health = health + 20;
}

mana = mana + 48;


switch(level+1){
case 1:
case 2:
case 3:
armor=1;
    break;

case 4:
case 5:
case 6:
    armor=2;
        break;
    
case 7:
case 8:
case 9:
    armor=3;
        break;
    
case 10:
case 11:
case 12:
    armor=4;
        break;
    
case 13:
case 14:
case 15:
    armor=5;
        break;
    
case 16:
case 17:
case 18:
    armor=6;
        break;
    
case 19:
case 20:
case 21:
case 22:
    armor=7;
        break;
    
case 23:
case 24:
case 25:
    armor=8;
        break;
    



    
}

switch(level+1){
    case 1:
    case 2:
    case 3:
    case 4:
    hp_regen=1.7;
    break;


    case 5:
    case 6:
    case 7:
    case 8:
    hp_regen=1.8;
    break;

    case 9:
    case 10:
    case 11:
    case 12:
        hp_regen=1.9;
            break;
        
    case 13:
    case 14:
    case 15: 
    case 16:
    case 17:
    hp_regen=2.0;
    break;
    case 18:
       
        
    case 19:
    case 20:
    case 21:
    hp_regen=2.1;
    break;

    case 22:
    case 23:
    case 24:
    case 25:
        hp_regen=2.2;
            break;
           
    }

    switch(level+1){
        case 1:
        mana_regen=1.2;
        break;

        case 2:
        case 3:
        mana_regen=1.3;
        break;

        case 4:
        mana_regen=1.4;
        break;


        case 5:
        case 6:
        mana_regen=1.5;
        break;

        case 7:
        mana_regen=1.6;
        break;

        case 8:
        mana_regen=1.7;
        break;
    
        case 9:
        case 10:
        mana_regen=1.8;
        break;
    
        case 11:
        mana_regen=1.9;
        break;
    
        case 12:
        case 13:
        mana_regen=2.0;
        break;
    
        case 14:
        mana_regen=2.1;
        break;
    
        case 15: 
        mana_regen=2.2;
        break;
    
        case 16:
        case 17:
        mana_regen=2.3;
        break;
        case 18:
        mana_regen=2.4;
        break;
    
            
        case 19:
        case 20:
        mana_regen=2.5;
        break;

        case 21:
        mana_regen=2.6;
        break;
    
        case 22:
        mana_regen=2.7;
        break;
        case 23:
        case 24:
        mana_regen=2.8;
        break;
      
        case 25:
        mana_regen=2.9;
        break;
      
     
        }








        str_container.innerHTML = str + '<span style="color:green">+' + bonus_str + '</span>' + 
        '&nbsp<img src="' + staticUrl + 'css/img/str.png" style="width:30%;">';
    
    agi_container.innerHTML = agi + '<span style="color:green">+' + bonus_agi + '</span>' + 
        '&nbsp<img src="' + staticUrl + 'css/img/agi.png" style="width:30%;">';
    
    int_container.innerHTML = int + '<span style="color:green">+' + bonus_int + '</span>' + 
        '&nbsp<img src="' + staticUrl + 'css/img/int.png" style="width:30%;">';
    
    dmg_container.innerHTML = base_dmg + '<span style="color:green">+' + bonus_dmg + '</span>' + 
        '&nbsp<img src="' + staticUrl + 'css/img/dmg.png" style="width:30%;">';
    
    armor_container.innerHTML = '&nbsp' + armor + '<span style="color:green">+' + bonus_armor + '</span>' + 
        '&nbsp&nbsp<img src="' + staticUrl + 'css/img/armor.png" style="width:25%;">';
    
    hp_container.innerHTML = health + "&nbsp/&nbsp" + health + 
        '<span class="hp-regen">+' + hp_regen + '</span>';
    
    mana_container.innerHTML = mana + "&nbsp/&nbsp" + mana + 
        '<span class="mana-regen">+' + mana_regen + '</span>';    





});