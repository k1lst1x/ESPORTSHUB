let a = Math.random() * 5;
a = Math.floor(a);


window.addEventListener('load',()=>{
    let invo_voice;
    if (a == 0) {

        invo_voice = new Audio(staticUrl + 'sounds/enter/Invo_begin_01.mp3');
        invo_voice.volume = 0.06;
        invo_voice.play();
    } 
    else if (a == 1) {

        invo_voice = new Audio(staticUrl + 'sounds/enter/Invo_spawn_02.mp3');
        invo_voice.volume = 0.06;
        invo_voice.play();
    } 
    else if (a == 2) {
        invo_voice = new Audio(staticUrl + 'sounds/enter/Invo_spawn_03.mp3');
        invo_voice.volume = 0.06;
        invo_voice.play();
    } 
    else if (a == 3) {
        invo_voice = new Audio(staticUrl + 'sounds/enter/Invo_spawn_04.mp3');
        invo_voice.volume = 0.06;
        invo_voice.play();
    }
});

document.addEventListener("keypress", function (e) {

    //F - Invoke
    if (e.keyCode == 114) {

        //BEGINNING WITH QUAS
        if (update == "quas,quas,quas") {
            let b = Math.random() * 4;
            b = Math.floor(b);
            //Some code goes here...

            switch(b){

                case 0:  
                let invo_ability_voice = new Audio(staticUrl + 'sounds/cold-snap/Invo_ability_coldsnap_01.mp3');
                invo_ability_voice.volume = 0.06;
                invo_ability_voice.play();
                break;

                case 1:
                let invo_ability_voice1 = new Audio(staticUrl + 'sounds/cold-snap/Invo_ability_coldsnap_02.mp3');
                invo_ability_voice1.volume = 0.06;
                invo_ability_voice1.play();
                break;
                
                case 2:
                let invo_ability_voice2= new Audio(staticUrl + 'sounds/cold-snap/Invo_ability_coldsnap_03.mp3');
                invo_ability_voice2.volume = 0.06;
                invo_ability_voice2.play();
                break;

                case 3:
                let invo_ability_voice3 = new Audio(staticUrl + 'sounds/cold-snap/Invo_ability_coldsnap_04.mp3');
                invo_ability_voice3.volume = 0.06;
                invo_ability_voice3.play();
                break;

            }
        } 
        else if (update == "quas,quas,wex") {
            let b = Math.random() * 4;
            b = Math.floor(b);
            switch(b){

                case 0:  
                let invo_ability_voice = new Audio(staticUrl + 'sounds/ghost-walk/Invo_ability_ghostwalk_01.mp3');
                invo_ability_voice.volume = 0.06;
                invo_ability_voice.play();
                break;

                case 1:
                let invo_ability_voice1 = new Audio(staticUrl + 'sounds/ghost-walk/Invo_ability_ghostwalk_02.mp3');
                invo_ability_voice1.volume = 0.06;
                invo_ability_voice1.play();
                break;
                
                case 2:
                let invo_ability_voice2= new Audio(staticUrl + 'sounds/ghost-walk/Invo_ability_ghostwalk_03.mp3');
                invo_ability_voice2.volume = 0.06;
                invo_ability_voice2.play();
                break;

                case 3:
                let invo_ability_voice3 = new Audio(staticUrl + 'sounds/ghost-walk/Invo_ability_ghostwalk_04.mp3');
                invo_ability_voice3.volume = 0.06;
                invo_ability_voice3.play();
                break;

            }

        } 
        else if (update == "quas,wex,wex") {
            let b = Math.random() * 4;
            b = Math.floor(b);
            switch(b){

                case 0:  
                let invo_ability_voice = new Audio(staticUrl + 'sounds/tornado/Invo_ability_tornado_01.mp3');
                invo_ability_voice.volume = 0.06;
                invo_ability_voice.play();
                break;

                case 1:
                let invo_ability_voice1 = new Audio(staticUrl + 'sounds/tornado/Invo_ability_tornado_02.mp3');
                invo_ability_voice1.volume = 0.06;
                invo_ability_voice1.play();
                break;
                
                case 2:
                let invo_ability_voice2= new Audio(staticUrl + 'sounds/tornado/Invo_ability_tornado_03.mp3');
                invo_ability_voice2.volume = 0.06;
                invo_ability_voice2.play();
                break;

                case 3:
                let invo_ability_voice3 = new Audio(staticUrl + 'sounds/tornado/Invo_ability_tornado_04.mp3');
                invo_ability_voice3.volume = 0.06;
                invo_ability_voice3.play();
                break;

            }
        } 
        else if (update == "quas,quas,exort") {
            let b = Math.random() * 4;
            b = Math.floor(b);
            switch(b){

                case 0:  
                let invo_ability_voice = new Audio(staticUrl + 'sounds/ice-wall/Invo_ability_icewall_01.mp3');
                invo_ability_voice.volume = 0.06;
                invo_ability_voice.play();
                break;

                case 1:
                let invo_ability_voice1 = new Audio(staticUrl + 'sounds/ice-wall/Invo_ability_icewall_02.mp3');
                invo_ability_voice1.volume = 0.06;
                invo_ability_voice1.play();
                break;
                
                case 2:
                let invo_ability_voice2= new Audio(staticUrl + 'sounds/ice-wall/Invo_ability_icewall_03.mp3');
                invo_ability_voice2.volume = 0.06;
                invo_ability_voice2.play();
                break;

                case 3:
                let invo_ability_voice3 = new Audio(staticUrl + 'sounds/ice-wall/Invo_ability_icewall_04.mp3');
                invo_ability_voice3.volume = 0.06;
                invo_ability_voice3.play();
                break;

            }
        } 
        else if (update == "quas,exort,exort") {
           
            let b = Math.random() * 4;
            b = Math.floor(b);
            switch(b){

                case 0:  
                let invo_ability_voice = new Audio(staticUrl + 'sounds/forge-spirit/Invo_ability_forgespirit_01.mp3');
                invo_ability_voice.volume = 0.06;
                invo_ability_voice.play();
                break;

                case 1:
                let invo_ability_voice1 = new Audio(staticUrl + 'sounds/forge-spirit/Invo_ability_forgespirit_02.mp3');
                invo_ability_voice1.volume = 0.06;
                invo_ability_voice1.play();
                break;
                
                case 2:
                let invo_ability_voice2= new Audio(staticUrl + 'sounds/forge-spirit/Invo_ability_forgespirit_03.mp3');
                invo_ability_voice2.volume = 0.06;
                invo_ability_voice2.play();
                break;

                case 3:
                let invo_ability_voice3 = new Audio(staticUrl + 'sounds/forge-spirit/Invo_ability_forgespirit_04.mp3');
                invo_ability_voice3.volume = 0.06;
                invo_ability_voice3.play();
                break;

            }

        } 
        else if (update == "quas,wex,exort") {
            let b = Math.random() * 4;
            b = Math.floor(b);
            switch(b){

                case 0:  
                let invo_ability_voice = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_01.mp3');
                invo_ability_voice.volume = 0.06;
                invo_ability_voice.play();
                break;

                case 1:
                let invo_ability_voice1 = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_02.mp3');
                invo_ability_voice1.volume = 0.06;
                invo_ability_voice1.play();
                break;
                
                case 2:
                let invo_ability_voice2= new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_03.mp3');
                invo_ability_voice2.volume = 0.06;
                invo_ability_voice2.play();
                break;

                case 3:
                let invo_ability_voice3 = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_04.mp3');
                invo_ability_voice3.volume = 0.06;
                invo_ability_voice3.play();
                break;

            }

        } 
        else if (update == "quas,exort,wex") {
            let b = Math.random() * 4;
            b = Math.floor(b);
            switch(b){

                case 0:  
                let invo_ability_voice = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_01.mp3');
                invo_ability_voice.volume = 0.06;
                invo_ability_voice.play();
                break;

                case 1:
                let invo_ability_voice1 = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_02.mp3');
                invo_ability_voice1.volume = 0.06;
                invo_ability_voice1.play();
                break;
                
                case 2:
                let invo_ability_voice2= new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_03.mp3');
                invo_ability_voice2.volume = 0.06;
                invo_ability_voice2.play();
                break;

                case 3:
                let invo_ability_voice3 = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_04.mp3');
                invo_ability_voice3.volume = 0.06;
                invo_ability_voice3.play();
                break;

            }

        } 
        else if (update == "quas,exort,quas") {
            let b = Math.random() * 4;
            b = Math.floor(b);
            switch(b){

                case 0:  
                let invo_ability_voice = new Audio(staticUrl + 'sounds/ice-wall/Invo_ability_icewall_01.mp3');
                invo_ability_voice.volume = 0.06;
                invo_ability_voice.play();
                break;

                case 1:
                let invo_ability_voice1 = new Audio(staticUrl + 'sounds/ice-wall/Invo_ability_icewall_02.mp3');
                invo_ability_voice1.volume = 0.06;
                invo_ability_voice1.play();
                break;
                
                case 2:
                let invo_ability_voice2= new Audio(staticUrl + 'sounds/ice-wall/Invo_ability_icewall_03.mp3');
                invo_ability_voice2.volume = 0.06;
                invo_ability_voice2.play();
                break;

                case 3:
                let invo_ability_voice3 = new Audio(staticUrl + 'sounds/ice-wall/Invo_ability_icewall_04.mp3');
                invo_ability_voice3.volume = 0.06;
                invo_ability_voice3.play();
                break;

            }

        } 
        else if (update == "quas,wex,quas") {
            let b = Math.random() * 4;
            b = Math.floor(b);
            switch(b){

                case 0:  
                let invo_ability_voice = new Audio(staticUrl + 'sounds/ghost-walk/Invo_ability_ghostwalk_01.mp3');
                invo_ability_voice.volume = 0.06;
                invo_ability_voice.play();
                break;

                case 1:
                let invo_ability_voice1 = new Audio(staticUrl + 'sounds/ghost-walk/Invo_ability_ghostwalk_02.mp3');
                invo_ability_voice1.volume = 0.06;
                invo_ability_voice1.play();
                break;
                
                case 2:
                let invo_ability_voice2= new Audio(staticUrl + 'sounds/ghost-walk/Invo_ability_ghostwalk_03.mp3');
                invo_ability_voice2.volume = 0.06;
                invo_ability_voice2.play();
                break;

                case 3:
                let invo_ability_voice3 = new Audio(staticUrl + 'sounds/ghost-walk/Invo_ability_ghostwalk_04.mp3');
                invo_ability_voice3.volume = 0.06;
                invo_ability_voice3.play();
                break;

            }


        }


        //BEGINNING WITH WEX
        else if (update == "wex,wex,wex") {
            let b = Math.random() * 4;
            b = Math.floor(b);
            switch(b){

                case 0:  
                let invo_ability_voice = new Audio(staticUrl + 'sounds/emp/Invo_ability_emp_02.mp3');
                invo_ability_voice.volume = 0.06;
                invo_ability_voice.play();
                break;

                case 1:
                let invo_ability_voice1 = new Audio(staticUrl + 'sounds/emp/Invo_ability_emp_03.mp3');
                invo_ability_voice1.volume = 0.06;
                invo_ability_voice1.play();
                break;
                
                case 2:
                let invo_ability_voice2= new Audio(staticUrl + 'sounds/emp/Invo_ability_emp_04.mp3');
                invo_ability_voice2.volume = 0.06;
                invo_ability_voice2.play();
                break;

                case 3:
                let invo_ability_voice3 = new Audio(staticUrl + 'sounds/emp/Invo_ability_emp_05.mp3');
                invo_ability_voice3.volume = 0.06;
                invo_ability_voice3.play();
                break;

            }

        }
    
    else if (update == "wex,quas,quas") {
        let b = Math.random() * 4;
        b = Math.floor(b);
        switch(b){

            case 0:  
            let invo_ability_voice = new Audio(staticUrl + 'sounds/ghost-walk/Invo_ability_ghostwalk_01.mp3');
            invo_ability_voice.volume = 0.06;
            invo_ability_voice.play();
            break;

            case 1:
            let invo_ability_voice1 = new Audio(staticUrl + 'sounds/ghost-walk/Invo_ability_ghostwalk_02.mp3');
            invo_ability_voice1.volume = 0.06;
            invo_ability_voice1.play();
            break;
            
            case 2:
            let invo_ability_voice2= new Audio(staticUrl + 'sounds/ghost-walk/Invo_ability_ghostwalk_03.mp3');
            invo_ability_voice2.volume = 0.06;
            invo_ability_voice2.play();
            break;

            case 3:
            let invo_ability_voice3 = new Audio(staticUrl + 'sounds/ghost-walk/Invo_ability_ghostwalk_04.mp3');
            invo_ability_voice3.volume = 0.06;
            invo_ability_voice3.play();
            break;

        }

    } 
    else if (update == "wex,wex,exort") {
        let b = Math.random() * 4;
        b = Math.floor(b);
        switch(b){

            case 0:  
            let invo_ability_voice = new Audio(staticUrl + 'sounds/alacrity/Invo_ability_alacrity_01.mp3');
            invo_ability_voice.volume = 0.06;
            invo_ability_voice.play();
            break;

            case 1:
            let invo_ability_voice1 = new Audio(staticUrl + 'sounds/alacrity/Invo_ability_alacrity_02.mp3');
            invo_ability_voice1.volume = 0.06;
            invo_ability_voice1.play();
            break;
            
            case 2:
            let invo_ability_voice2= new Audio(staticUrl + 'sounds/alacrity/Invo_ability_alacrity_03.mp3');
            invo_ability_voice2.volume = 0.06;
            invo_ability_voice2.play();
            break;

            case 3:
            let invo_ability_voice3 = new Audio(staticUrl + 'sounds/alacrity/Invo_ability_alacrity_05.mp3');
            invo_ability_voice3.volume = 0.06;
            invo_ability_voice3.play();
            break;

        }

    } 
    else if (update == "wex,exort,exort") {
        let b = Math.random() * 4;
        b = Math.floor(b);
        switch(b){

            case 0:  
            let invo_ability_voice = new Audio(staticUrl + 'sounds/chaos-meteor/Invo_ability_chaosmeteor_01.mp3');
            invo_ability_voice.volume = 0.06;
            invo_ability_voice.play();
            break;

            case 1:
            let invo_ability_voice1 = new Audio(staticUrl + 'sounds/chaos-meteor/Invo_ability_chaosmeteor_02.mp3');
            invo_ability_voice1.volume = 0.06;
            invo_ability_voice1.play();
            break;
            
            case 2:
            let invo_ability_voice2= new Audio(staticUrl + 'sounds/chaos-meteor/Invo_ability_chaosmeteor_03.mp3');
            invo_ability_voice2.volume = 0.06;
            invo_ability_voice2.play();
            break;

            case 3:
            let invo_ability_voice3 = new Audio(staticUrl + 'sounds/chaos-meteor/Invo_ability_chaosmeteor_04.mp3');
            invo_ability_voice3.volume = 0.06;
            invo_ability_voice3.play();
            break;

        }

    } 
    else if (update == "wex,quas,exort") {
        let b = Math.random() * 4;
        b = Math.floor(b);
        switch(b){

            case 0:  
            let invo_ability_voice = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_01.mp3');
            invo_ability_voice.volume = 0.06;
            invo_ability_voice.play();
            break;

            case 1:
            let invo_ability_voice1 = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_02.mp3');
            invo_ability_voice1.volume = 0.06;
            invo_ability_voice1.play();
            break;
            
            case 2:
            let invo_ability_voice2= new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_03.mp3');
            invo_ability_voice2.volume = 0.06;
            invo_ability_voice2.play();
            break;

            case 3:
            let invo_ability_voice3 = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_04.mp3');
            invo_ability_voice3.volume = 0.06;
            invo_ability_voice3.play();
            break;

        }


    } 
    else if (update == "wex,exort,quas") {
        let b = Math.random() * 4;
            b = Math.floor(b);
            switch(b){

                case 0:  
                let invo_ability_voice = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_01.mp3');
                invo_ability_voice.volume = 0.06;
                invo_ability_voice.play();
                break;

                case 1:
                let invo_ability_voice1 = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_02.mp3');
                invo_ability_voice1.volume = 0.06;
                invo_ability_voice1.play();
                break;
                
                case 2:
                let invo_ability_voice2= new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_03.mp3');
                invo_ability_voice2.volume = 0.06;
                invo_ability_voice2.play();
                break;

                case 3:
                let invo_ability_voice3 = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_04.mp3');
                invo_ability_voice3.volume = 0.06;
                invo_ability_voice3.play();
                break;

            }

    } 
    else if (update == "wex,exort,wex") {
       
            let b = Math.random() * 4;
            b = Math.floor(b);
            switch(b){
    
                case 0:  
                let invo_ability_voice = new Audio(staticUrl + 'sounds/alacrity/Invo_ability_alacrity_01.mp3');
                invo_ability_voice.volume = 0.06;
                invo_ability_voice.play();
                break;
    
                case 1:
                let invo_ability_voice1 = new Audio(staticUrl + 'sounds/alacrity/Invo_ability_alacrity_02.mp3');
                invo_ability_voice1.volume = 0.06;
                invo_ability_voice1.play();
                break;
                
                case 2:
                let invo_ability_voice2= new Audio(staticUrl + 'sounds/alacrity/Invo_ability_alacrity_03.mp3');
                invo_ability_voice2.volume = 0.06;
                invo_ability_voice2.play();
                break;
    
                case 3:
                let invo_ability_voice3 = new Audio(staticUrl + 'sounds/alacrity/Invo_ability_alacrity_05.mp3');
                invo_ability_voice3.volume = 0.06;
                invo_ability_voice3.play();
                break;
    
            }

    } 
    else if (update == "wex,quas,wex") {
        let b = Math.random() * 4;
        b = Math.floor(b);
        switch(b){

            case 0:  
            let invo_ability_voice = new Audio(staticUrl + 'sounds/tornado/Invo_ability_tornado_01.mp3');
            invo_ability_voice.volume = 0.06;
            invo_ability_voice.play();
            break;

            case 1:
            let invo_ability_voice1 = new Audio(staticUrl + 'sounds/tornado/Invo_ability_tornado_02.mp3');
            invo_ability_voice1.volume = 0.06;
            invo_ability_voice1.play();
            break;
            
            case 2:
            let invo_ability_voice2= new Audio(staticUrl + 'sounds/tornado/Invo_ability_tornado_03.mp3');
            invo_ability_voice2.volume = 0.06;
            invo_ability_voice2.play();
            break;

            case 3:
            let invo_ability_voice3 = new Audio(staticUrl + 'sounds/tornado/Invo_ability_tornado_04.mp3');
            invo_ability_voice3.volume = 0.06;
            invo_ability_voice3.play();
            break;

        }

    }

    //BEGGINING WITH EXORT
    else if (update == "exort,exort,exort") {
        let b = Math.random() * 4;
        b = Math.floor(b);
        switch(b){

            case 0:  
            let invo_ability_voice = new Audio(staticUrl + 'sounds/sun-strike/Invo_ability_sunstrike_01.mp3');
            invo_ability_voice.volume = 0.06;
            invo_ability_voice.play();
            break;

            case 1:
            let invo_ability_voice1 = new Audio(staticUrl + 'sounds/sun-strike/Invo_ability_sunstrike_02.mp3');
            invo_ability_voice1.volume = 0.06;
            invo_ability_voice1.play();
            break;
            
            case 2:
            let invo_ability_voice2= new Audio(staticUrl + 'sounds/sun-strike/Invo_ability_sunstrike_03.mp3');
            invo_ability_voice2.volume = 0.06;
            invo_ability_voice2.play();
            break;

            case 3:
            let invo_ability_voice3 = new Audio(staticUrl + 'sounds/sun-strike/Invo_ability_sunstrike_04.mp3');
            invo_ability_voice3.volume = 0.06;
            invo_ability_voice3.play();
            break;

        }

    } 
    else if (update == "exort,exort,quas") {
        let b = Math.random() * 4;
            b = Math.floor(b);
            switch(b){

                case 0:  
                let invo_ability_voice = new Audio(staticUrl + 'sounds/forge-spirit/Invo_ability_forgespirit_01.mp3');
                invo_ability_voice.volume = 0.06;
                invo_ability_voice.play();
                break;

                case 1:
                let invo_ability_voice1 = new Audio(staticUrl + 'sounds/forge-spirit/Invo_ability_forgespirit_02.mp3');
                invo_ability_voice1.volume = 0.06;
                invo_ability_voice1.play();
                break;
                
                case 2:
                let invo_ability_voice2= new Audio(staticUrl + 'sounds/forge-spirit/Invo_ability_forgespirit_03.mp3');
                invo_ability_voice2.volume = 0.06;
                invo_ability_voice2.play();
                break;

                case 3:
                let invo_ability_voice3 = new Audio(staticUrl + 'sounds/forge-spirit/Invo_ability_forgespirit_04.mp3');
                invo_ability_voice3.volume = 0.06;
                invo_ability_voice3.play();
                break;

            }
    } 
    else if (update == "exort,quas,quas") {
        let b = Math.random() * 4;
        b = Math.floor(b);
        switch(b){

            case 0:  
            let invo_ability_voice = new Audio(staticUrl + 'sounds/ice-wall/Invo_ability_icewall_01.mp3');
            invo_ability_voice.volume = 0.06;
            invo_ability_voice.play();
            break;

            case 1:
            let invo_ability_voice1 = new Audio(staticUrl + 'sounds/ice-wall/Invo_ability_icewall_02.mp3');
            invo_ability_voice1.volume = 0.06;
            invo_ability_voice1.play();
            break;
            
            case 2:
            let invo_ability_voice2= new Audio(staticUrl + 'sounds/ice-wall/Invo_ability_icewall_03.mp3');
            invo_ability_voice2.volume = 0.06;
            invo_ability_voice2.play();
            break;

            case 3:
            let invo_ability_voice3 = new Audio(staticUrl + 'sounds/ice-wall/Invo_ability_icewall_04.mp3');
            invo_ability_voice3.volume = 0.06;
            invo_ability_voice3.play();
            break;

        }

    } 
    else if (update == "exort,exort,wex") {
        let b = Math.random() * 4;
        b = Math.floor(b);
        switch(b){

            case 0:  
            let invo_ability_voice = new Audio(staticUrl + 'sounds/chaos-meteor/Invo_ability_chaosmeteor_01.mp3');
            invo_ability_voice.volume = 0.06;
            invo_ability_voice.play();
            break;

            case 1:
            let invo_ability_voice1 = new Audio(staticUrl + 'sounds/chaos-meteor/Invo_ability_chaosmeteor_02.mp3');
            invo_ability_voice1.volume = 0.06;
            invo_ability_voice1.play();
            break;
            
            case 2:
            let invo_ability_voice2= new Audio(staticUrl + 'sounds/chaos-meteor/Invo_ability_chaosmeteor_03.mp3');
            invo_ability_voice2.volume = 0.06;
            invo_ability_voice2.play();
            break;

            case 3:
            let invo_ability_voice3 = new Audio(staticUrl + 'sounds/chaos-meteor/Invo_ability_chaosmeteor_04.mp3');
            invo_ability_voice3.volume = 0.06;
            invo_ability_voice3.play();
            break;

        }

    } 
    else if (update == "exort,wex,wex") {
        let b = Math.random() * 4;
        b = Math.floor(b);
        switch(b){

            case 0:  
            let invo_ability_voice = new Audio(staticUrl + 'sounds/alacrity/Invo_ability_alacrity_01.mp3');
            invo_ability_voice.volume = 0.06;
            invo_ability_voice.play();
            break;

            case 1:
            let invo_ability_voice1 = new Audio(staticUrl + 'sounds/alacrity/Invo_ability_alacrity_02.mp3');
            invo_ability_voice1.volume = 0.06;
            invo_ability_voice1.play();
            break;
            
            case 2:
            let invo_ability_voice2= new Audio(staticUrl + 'sounds/alacrity/Invo_ability_alacrity_03.mp3');
            invo_ability_voice2.volume = 0.06;
            invo_ability_voice2.play();
            break;

            case 3:
            let invo_ability_voice3 = new Audio(staticUrl + 'sounds/alacrity/Invo_ability_alacrity_05.mp3');
            invo_ability_voice3.volume = 0.06;
            invo_ability_voice3.play();
            break;

        }

    } 
    else if (update == "exort,quas,wex") {
        let b = Math.random() * 4;
        b = Math.floor(b);
        switch(b){

            case 0:  
            let invo_ability_voice = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_01.mp3');
            invo_ability_voice.volume = 0.06;
            invo_ability_voice.play();
            break;

            case 1:
            let invo_ability_voice1 = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_02.mp3');
            invo_ability_voice1.volume = 0.06;
            invo_ability_voice1.play();
            break;
            
            case 2:
            let invo_ability_voice2= new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_03.mp3');
            invo_ability_voice2.volume = 0.06;
            invo_ability_voice2.play();
            break;

            case 3:
            let invo_ability_voice3 = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_04.mp3');
            invo_ability_voice3.volume = 0.06;
            invo_ability_voice3.play();
            break;

        }

    } 
    else if (update == "exort,wex,quas") {
        let b = Math.random() * 4;
        b = Math.floor(b);
        switch(b){

            case 0:  
            let invo_ability_voice = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_01.mp3');
            invo_ability_voice.volume = 0.06;
            invo_ability_voice.play();
            break;

            case 1:
            let invo_ability_voice1 = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_02.mp3');
            invo_ability_voice1.volume = 0.06;
            invo_ability_voice1.play();
            break;
            
            case 2:
            let invo_ability_voice2= new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_03.mp3');
            invo_ability_voice2.volume = 0.06;
            invo_ability_voice2.play();
            break;

            case 3:
            let invo_ability_voice3 = new Audio(staticUrl + 'sounds/def-blast/Invo_ability_deafeningblast_04.mp3');
            invo_ability_voice3.volume = 0.06;
            invo_ability_voice3.play();
            break;

        }

    } 
    else if (update == "exort,wex,exort") {
        let b = Math.random() * 4;
        b = Math.floor(b);
        switch(b){

            case 0:  
            let invo_ability_voice = new Audio(staticUrl + 'sounds/chaos-meteor/Invo_ability_chaosmeteor_01.mp3');
            invo_ability_voice.volume = 0.06;
            invo_ability_voice.play();
            break;

            case 1:
            let invo_ability_voice1 = new Audio(staticUrl + 'sounds/chaos-meteor/Invo_ability_chaosmeteor_02.mp3');
            invo_ability_voice1.volume = 0.06;
            invo_ability_voice1.play();
            break;
            
            case 2:
            let invo_ability_voice2= new Audio(staticUrl + 'sounds/chaos-meteor/Invo_ability_chaosmeteor_03.mp3');
            invo_ability_voice2.volume = 0.06;
            invo_ability_voice2.play();
            break;

            case 3:
            let invo_ability_voice3 = new Audio(staticUrl + 'sounds/chaos-meteor/Invo_ability_chaosmeteor_04.mp3');
            invo_ability_voice3.volume = 0.06;
            invo_ability_voice3.play();
            break;

        }

    } 
    else if (update == "exort,quas,exort") {
        let b = Math.random() * 4;
        b = Math.floor(b);
        switch(b){

            case 0:  
            let invo_ability_voice = new Audio(staticUrl + 'sounds/forge-spirit/Invo_ability_forgespirit_01.mp3');
            invo_ability_voice.volume = 0.06;
            invo_ability_voice.play();
            break;

            case 1:
            let invo_ability_voice1 = new Audio(staticUrl + 'sounds/forge-spirit/Invo_ability_forgespirit_02.mp3');
            invo_ability_voice1.volume = 0.06;
            invo_ability_voice1.play();
            break;
            
            case 2:
            let invo_ability_voice2= new Audio(staticUrl + 'sounds/forge-spirit/Invo_ability_forgespirit_03.mp3');
            invo_ability_voice2.volume = 0.06;
            invo_ability_voice2.play();
            break;

            case 3:
            let invo_ability_voice3 = new Audio(staticUrl + 'sounds/forge-spirit/Invo_ability_forgespirit_04.mp3');
            invo_ability_voice3.volume = 0.06;
            invo_ability_voice3.play();
            break;

        }

    }




}
});