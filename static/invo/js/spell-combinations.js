	/*
	Invoker's spell combinations

	1.QQQ - Cold Snap
	2.QQW - Ghost Walk
	3.QWW - Tornado
	4.QQE - Ice Wall
	5.QEE - Forge Spirit
	6.QWQ - Ghost Walk
	7.QEQ - Ice Wall
	8.QWE - Deafening Blast
	9.QEW - Deafening Blast
	
	1.WWW - E.M.P
	2.WWQ - Tornado
	3.WQQ - Ghost Walk
	4.WWE - Alacrity
	5.WEE - Chaos Meteor
	6.WEW - Alacrity
	7.WQW - Tornado
	8.WQE - Deafening Blast
	9.WEQ - Deafening Blast

	1.EEE - Sun Strike
	2.EEQ - Forge Spirit
	3.EQQ - Ice Wall 
	4.EEW - Chaos Meteor
	5.EWW - Alacrity
	6.EWE - Chaos Meteor
	7.EQE - Forge Spirit
	8.EQW - Deafening Blast
	9.EWQ - Deafening Blast
	*/
	
	let show_combos_btn = document.querySelector('.show-spell-combos');
	let combos = document.querySelector('.spell-combos-hide');
	let show_names_btn = document.querySelector('.show-spell-names-off');
	let combos_names = document.querySelector('.spell-combos-names-hide');
	
	

	show_combos_btn.addEventListener('click',function(){


	combos.classList.toggle('spell-combos-show');
	combos.classList.toggle('spell-combos-hide');
	
	if(combos.className == "spell-combos-show"){

		show_names_btn.classList.add('show-spell-names-on');
	}
	if(combos.className == "spell-combos-hide"){

		show_names_btn.classList.remove('show-spell-names-on');

	}
	if(combos_names.className == 'spell-combos-names-show'){

		combos_names.classList.remove('spell-combos-names-show');
		combos_names.classList.add('spell-combos-names-hide');

		combos.classList.add('spell-combos-hide');
		combos.classList.remove('spell-combos-show');

		show_names_btn.innerHTML = "Показать названия заклинаний";

		show_names_btn.classList.remove('show-spell-names-on');
		show_names_btn.classList.add('show-spell-names-off');

	}
	});


	show_names_btn.addEventListener('click',function(){

		combos_names.classList.toggle('spell-combos-names-show');
		combos_names.classList.toggle('spell-combos-names-hide');


		if(combos_names.className == 'spell-combos-names-show'){
			combos.classList.add('spell-combos-hide');
			combos.classList.remove('spell-combos-show');
			show_names_btn.innerHTML="Скрыть названия заклинаний";
		}
		if(combos_names.className == 'spell-combos-names-hide'){
			combos.classList.remove('spell-combos-hide');
			combos.classList.add('spell-combos-show');
			show_names_btn.innerHTML="Показать названия заклинаний";
		}
		

	});





	