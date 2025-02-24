
let key_settings = document.querySelector('.keys-settings-off');
let show_settings_btn = document.querySelector('.keys-settings');

//Elements vars

let quas_bind = document.querySelector('.quas-key');
let wex_bind = document.querySelector('.wex-key');
let exort_bind = document.querySelector('.exort-key');
let invoke_bind = document.querySelector('.invoke-key');
let new_quas;
let new_wex;
let new_exort;
let new_invoke;

show_settings_btn.addEventListener('click',function(){
 
    key_settings.classList.toggle('keys-settings-on');
    key_settings.classList.toggle('keys-settings-off');

    show_settings_btn.innerHTML="Close keys settings";

    
    if(key_settings.className=="keys-settings-off"){
        show_settings_btn.innerHTML="Keys settings";
        }
});




function getKey(event){
    new_key = String.fromCharCode(event.keyCode);
   
}

function bindCommand( name ) {
   document.querySelector( `.${ name }-key` ).addEventListener( 'click', ( ) => {
     const bindElement = document.querySelector( `.${ name }-binded` );
   
   document.addEventListener( 'keypress', function bindKeypress( evt ) {
       bindElement.textContent = evt.key;
     
     document.removeEventListener( 'keypress', bindKeypress );
   } );
   
   bindElement.textContent = '<press new key>';
 } );
}

function bindCommands( names ) {
   names.forEach( bindCommand );
}

bindCommands( [ 'quas', 'wex', 'exort', 'invoke' ] );

// If you're webdeveloper and you're
// reading this right now, check pls GitHub page of this great man https://github.com/Comandeer
// Thank you so much Commandeer for help with this case. 