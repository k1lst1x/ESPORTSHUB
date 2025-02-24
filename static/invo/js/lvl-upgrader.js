let level_container = document.querySelector('#level'); // 1 lvl
//Buttons
let lvlup_button = document.querySelector('.level-up');
let refresh_level_btn = document.querySelector('.refresh-lvl');
let level = 1;

level_container.innerHTML = level;
let talent_sound = new Audio(`${staticUrl}sounds/Talent.mp3`);

lvlup_button.addEventListener('click',function(){


    
    if(level == 9){

        talent_sound.volume = 0.06;
        talent_sound.play();

    }
    if(level == 14){
        talent_sound.volume = 0.06;
        talent_sound.play();
    }
    if(level == 19){
        talent_sound.volume = 0.06;
        talent_sound.play();

    }
    if(level == 24){
        lvlup_button.disabled = true;
        lvlup_button.innerHTML = "Max level!";
        level_container.style.border = '3px solid #d5aa77';
        talent_sound.volume = 0.06;
        talent_sound.play();

    }
level++;
level_container.innerHTML = level;
    

});

