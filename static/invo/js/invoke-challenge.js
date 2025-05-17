// let start_btn = document.querySelector('.start-challenge');
// let spell_container = document.querySelector('.spell-to-invoke');

// let time_container = document.querySelector('.time');
// let rank_container = document.querySelector('.rank');
// let spell_to_invoke;
// let points = 0;
// let spells = ['Alacrity','Chaos Meteor','Cold Snap','Deafening Blast','EMP','Forge Spirit','Ghost Walk','Ice Wall','Sun Strike','Tornado'];
// let k;
// let challenge_time = 5; // - 1 minute, 30 seconds
// let time_left = 9;
// let rank;
// let invoke_challenge = document.querySelector('.invoke-challenge-hide');
// let invoke_challenge_btn = document.querySelector('.invoke-challenge-button');

// invoke_challenge_btn.addEventListener('click',function(){
// invoke_challenge.classList.toggle('invoke-challenge');
// invoke_challenge.classList.toggle('invoke-challenge-hide');
// });


// function progress(timeleft, timetotal, $element) {
//     var progressBarWidth = timeleft * $element.width() / timetotal;
//     $element.find('div').animate({ width: progressBarWidth }, timeleft == timetotal ? 0 : 1000, 'linear');
//     if(timeleft > 0) {
//         setTimeout(function() {
//             progress(timeleft - 1, timetotal, $element);
//         }, 1000);
//     }
// };






// //COUNTDOWN BAR


//   //adjust these numbers to match time set
//   //must be in seconds

  
  

    

//   start_btn.addEventListener('click',function(){
   
// //Initiate game

// k = Math.random()*10;
// k = Math.floor(k);
// spell_container.textContent= spells[k];
// spell_to_invoke = spells[k];
// progress(5, 5, $('#progressBar'));
//   let interval =  window.setInterval(
//         function(){
        
          
         








//             time_left = time_left - 1;
//             time_container.innerHTML = "Time left: " + time_left + " seconds";
//             challenge_time = challenge_time - 1;
            
//             if(time_left <= 0) {
//                 k = Math.random()*10;
//                 k = Math.floor(k);
//                 spell_to_invoke = spells[k];
//                 spell_container.innerHTML= spells[k];
//                time_left = 9;
//             //    progress(9, 9, $('#progressBar'));
//                 points = points - 100;
//                rank_container.innerHTML= points+" points";
              
//             }
           
         
//             if(challenge_time==0){
//                 clearInterval(interval);
//                 time_left = 0;
//                 if(points<3000){
//                     rank = 'c1';
//                 }   
//                 if(points >3000){
//                     rank='l5';
//                 }
              
//                 spell_container.innerHTML= 'Challenge Finished';
//                 time_container.innerHTML = 'Youre invoking like: ';
//                 rank_container.innerHTML = '<img src="css/img/ranks/' + rank + '.png" alt="Rank">';
//                }
//         }, 1000);
//         document.addEventListener('keypress',function(e){
//             if (e.keyCode == 102) {
//                 if(spell == spell_to_invoke){
//                     // progress(9, 9, $('#progressBar'));

//                     points = points + (100 * time_left);
//                     k = Math.random()*10;
//                     k = Math.floor(k);
//                     spell_to_invoke = spells[k];
//                     spell_container.innerHTML= spells[k];
                   
//                    time_left = 9;
                
                    
//                    rank_container.innerHTML= points+" points";
//                 }
//                 if(spell != spell_to_invoke){
//                     // progress(9, 9, $('#progressBar'));
//                     k = Math.random()*10;
//                     k = Math.floor(k);
//                     spell_to_invoke = spells[k];
//                     points = points - 200;
                   
//                     spell_container.innerHTML= spells[k];
                    
//                    time_left = 9;
                  
                    
//                    rank_container.innerHTML= points+" points";
                   
//                 }
               



//             }


           
          
//         });
        
//         start_btn.classList.remove('start-challenge');
//         start_btn.classList.add('start-challenge-hide');
 
//         rank_container.innerHTML= points+" points";
     

//   });

let start_btn = document.querySelector('.start-challenge');
let spell_container = document.querySelector('.spell-to-invoke');
let time_container = document.querySelector('.time');
let rank_container = document.querySelector('.rank');

let spell_to_invoke;
let points = 0;
let spells = ['Alacrity', 'Chaos Meteor', 'Cold Snap', 'Deafening Blast', 'E.M.P.', 'Forge Spirit', 'Ghost Walk', 'Ice Wall', 'Sun Strike', 'Tornado'];
let k;
let challenge_time = 15; // Длительность игры
let time_left = 15;
let rank;
let interval;
let isGameActive = false;

let invoke_challenge = document.querySelector('.invoke-challenge-hide');
let invoke_challenge_btn = document.querySelector('.invoke-challenge-button');

invoke_challenge_btn.addEventListener('click', function () {
    invoke_challenge.classList.toggle('invoke-challenge');
    invoke_challenge.classList.toggle('invoke-challenge-hide');
});

function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, timeleft == timetotal ? 0 : 1000, 'linear');
    if (timeleft > 0) {
        setTimeout(function () {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    }
}

function startGame() {
    isGameActive = true;
    points = 0;
    challenge_time = 15;
    time_left = 15;
    rank_container.innerHTML = "0 points";

    // Показываем новый заклинание
    k = Math.floor(Math.random() * 10);
    spell_container.textContent = spells[k];
    spell_to_invoke = spells[k];

    progress(14, 14, $('#progressBar'));

    interval = setInterval(function () {
        time_left--;
        time_container.innerHTML = "Time left: " + time_left + " seconds";
        challenge_time--;

        if (time_left <= 0) {
            k = Math.floor(Math.random() * 10);
            spell_to_invoke = spells[k];
            spell_container.innerHTML = spells[k];
            time_left = 9;
            points -= 100;
            rank_container.innerHTML = points + " points";
        }

        if (challenge_time == 0) {
            endGame();
        }
    }, 1000);

    start_btn.classList.add('start-challenge-hide');
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function endGame() {
    clearInterval(interval);
    isGameActive = false;

    let rank;
    
    if (points < 0) {
        rank = 'golovach'; // Если очки отрицательные
    } else if (points < 1000) {
        rank = 'h' + Math.floor(points / 200); // h0-h5
    } else if (points < 2000) {
        rank = 'g' + Math.floor((points - 1000) / 200); // g0-g5
    } else if (points < 3000) {
        rank = 'c' + Math.floor((points - 2000) / 200); // c0-c5
    } else if (points < 4000) {
        rank = 'a' + Math.floor((points - 3000) / 200); // a0-a5
    } else if (points < 5000) {
        rank = 'l' + Math.floor((points - 4000) / 200); // l0-l5
    } else if (points < 6000) {
        rank = 'aa' + Math.floor((points - 5000) / 200); // aa0-aa5
    } else if (points < 7000) {
        rank = 'll' + Math.floor((points - 6000) / 200); // ll0-ll5
    } else if (points < 8000) {
        rank = 'b1';
    } else if (points < 9000) {
        rank = 'b2';
    } else if (points < 10000) {
        rank = 'b3';
    } else {
        rank = 'miracle'; // Самый топ
    }

    fetch('/game/save_score/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')  // обязательно!
        },
        body: JSON.stringify({ score: points/100 })
    });    

    spell_container.innerHTML = 'Испытание завершено';
    time_container.innerHTML = 'Ты применяешь заклинания как:';
    rank_container.innerHTML = `<img src="${staticUrl}css/img/ranks/${rank}.png" alt="Rank">`;

    // Останавливаем обработку клавиатуры
    document.removeEventListener('keypress', handleKeyPress);

    start_btn.classList.remove('start-challenge-hide');
}

function handleKeyPress(e) {
    if (!isGameActive) return;

    if (e.keyCode == 114) {  // Нажата клавиша 'f'
        if(spell == spell_to_invoke){
                
            points = points + 500;
            
        
            
            rank_container.innerHTML= points+" points";
        }
        if(spell != spell_to_invoke){
            points = points - 500;
            
            
        }

        // Генерируем новое заклинание
        k = Math.floor(Math.random() * 10);
        spell_to_invoke = spells[k];
        spell_container.innerHTML = spells[k];

        rank_container.innerHTML = points + " points";
    }
}

start_btn.addEventListener('click', function () {
    startGame();
    document.addEventListener('keypress', handleKeyPress);
});
