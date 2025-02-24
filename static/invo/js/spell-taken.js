	let container = document.getElementById("elements-taken");
	let update = [];
	let spell;
	let spells_invoked = [];
	let spells_container = document.querySelector('.spells-invoked');
	spells_invoked.push('empty', 'empty');

	let invoke_sound = new Audio(`${staticUrl}sounds/Invoke.mp3`);
	invoke_sound.volume = .1;

	let quas_key = 'q';  // Quas
	let wex_key = 'w';   // Wex
	let exort_key = 'e'; // Exort
	let invoke_key = 'r'; // Invoke

	document.addEventListener("keypress", function (e) {

				let element = document.createElement('div');
				//A - Quas
				if (e.keyCode == 113) {


					element.className = "quas";
					update.push('quas');
					container.appendChild(element);
				}
				//S - Wex
				if (e.keyCode == 119) {

					element.className = "wex";
					update.push('wex');
					container.appendChild(element);
				}
				//D - Exort
				if (e.keyCode == 101) {

					element.className = "exort";
					update.push('exort');
					container.appendChild(element);

				}









				//F - Invoke
				if (e.keyCode == 114) {

					invoke_sound.currentTime = 0;
					invoke_sound.play();
					//BEGINNING WITH QUAS
					if (update == "quas,quas,quas") {
						spell = "Cold Snap";
						spells_invoked.shift();
						spells_invoked.push('cold-snap');
						let div = document.createElement('div');
						div.className = "cold-snap";



						if (spells_container.childNodes.length >= 2) {
							spells_container.removeChild(spells_container.childNodes[0]);
						}
						
						spells_container.appendChild(div);
					} else if (update == "quas,quas,wex") {

						spell = "Ghost Walk";
						spells_invoked.shift();
						spells_invoked.push('ghost-walk');
						spells_container.removeChild(spells_container.childNodes[0]);
						let div = document.createElement('div');
						div.className = "ghost-walk";

						spells_container.appendChild(div);

						if (spells_container.childNodes.length > 2) {
							spells_container.removeChild(spells_container.childNodes[0]);
						}
					} else if (update == "quas,wex,wex") {
						spell = "Tornado";
						spells_invoked.shift();
						spells_invoked.push('tornado');
						spells_container.removeChild(spells_container.childNodes[0]);
						let div = document.createElement('div');
						div.className = "tornado";

						spells_container.appendChild(div);

						if (spells_container.childNodes.length > 2) {
							spells_container.removeChild(spells_container.childNodes[0]);
						}

					} else if (update == "quas,quas,exort") {
						spell = "Ice Wall";
						spells_invoked.shift();
						spells_invoked.push('ice-wall');
						let div = document.createElement('div');
						div.className = "ice-wall";

						spells_container.appendChild(div);

						if (spells_container.childNodes.length > 2) {
							spells_container.removeChild(spells_container.childNodes[0]);
						}
					} else if (update == "quas,exort,exort") {
						spell = "Forge Spirit";
						spells_invoked.shift();
						spells_invoked.push('forge-spirit');
						let div = document.createElement('div');
						div.className = "forge-spirit";

						spells_container.appendChild(div);

						if (spells_container.childNodes.length > 2) {
							spells_container.removeChild(spells_container.childNodes[0]);
						}
					 } else if (update == "quas,wex,exort") {
							spell = "Deafening Blast";
							spells_invoked.shift();
							spells_invoked.push('def-blast');
							let div = document.createElement('div');
							div.className = "def-blast";

							spells_container.appendChild(div);

							if (spells_container.childNodes.length > 2) {
								spells_container.removeChild(spells_container.childNodes[0]);
							}
						} else if (update == "quas,exort,wex") {
							spell = "Deafening Blast";
							spells_invoked.shift();
							spells_invoked.push('def-blast');
							let div = document.createElement('div');
							div.className = "def-blast";

							spells_container.appendChild(div);

							if (spells_container.childNodes.length > 2) {
								spells_container.removeChild(spells_container.childNodes[0]);
							}
						 } else if (update == "quas,exort,quas") {
								spell = "Ice Wall";
								spells_invoked.shift();
								spells_invoked.push('ice-wall');
								let div = document.createElement('div');
								div.className = "ice-wall";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
							} else if (update == "quas,wex,quas") {
								spell = "Ghost Walk";
								spells_invoked.shift();
								spells_invoked.push('ghost-walk');
								let div = document.createElement('div');
								div.className = "ghost-walk";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}

							}


							//BEGINNING WITH WEX
							else if (update == "wex,wex,wex") {
								spell = "E.M.P.";
								spells_invoked.shift();
								spells_invoked.push('emp');
								let div = document.createElement('div');
								div.className = "emp";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
							} else if (update == "wex,wex,quas") {
								spell = "Tornado";
								spells_invoked.shift();
								spells_invoked.push('tornado');
								let div = document.createElement('div');
								div.className = "tornado";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
								if (div == spells_container[1]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
								if (div == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[0]);
									spells_container.appendChild(div);
								}
								if (spells_container[1] == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
							} else if (update == "wex,quas,quas") {
								spell = "Ghost Walk";
								spells_invoked.shift();
								spells_invoked.push('ghost-walk');
								let div = document.createElement('div');
								div.className = "ghost-walk";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
								if (div == spells_container[1]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
								if (div == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[0]);
									spells_container.appendChild(div);
								}
								if (spells_container[1] == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
							} else if (update == "wex,wex,exort") {
								spell = "Alacrity";
								spells_invoked.shift();
								spells_invoked.push('alacrity');
								let div = document.createElement('div');
								div.className = "alacrity";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
								if (div == spells_container[1]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
								if (div == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[0]);
									spells_container.appendChild(div);
								}
								if (spells_container[1] == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
							} else if (update == "wex,exort,exort") {
								spell = "Chaos Meteor";
								spells_invoked.shift();
								spells_invoked.push('chaos-meteor');
								let div = document.createElement('div');
								div.className = "chaos-meteor";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
								if (div == spells_container[1]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
								if (div == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[0]);
									spells_container.appendChild(div);
								}
								if (spells_container[1] == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
							} else if (update == "wex,quas,exort") {
								spell = "Deafening Blast";
								spells_invoked.shift();
								spells_invoked.push('def-blast');
								let div = document.createElement('div');
								div.className = "def-blast";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
								if (div == spells_container[1]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
								if (div == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[0]);
									spells_container.appendChild(div);
								}
								if (spells_container[1] == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}

							} else if (update == "wex,exort,quas") {
								spell = "Deafening Blast";
								spells_invoked.shift();
								spells_invoked.push('def-blast');
								let div = document.createElement('div');
								div.className = "def-blast";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
								if (div == spells_container[1]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
								if (div == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[0]);
									spells_container.appendChild(div);
								}
								if (spells_container[1] == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
							} else if (update == "wex,exort,wex") {
								spell = "Alacrity";
								spells_invoked.shift();
								spells_invoked.push('alacrity');
								let div = document.createElement('div');
								div.className = "alacrity";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
								if (div == spells_container[1]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
								if (div == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[0]);
									spells_container.appendChild(div);
								}
								if (spells_container[1] == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
							} else if (update == "wex,quas,wex") {
								spell = "Tornado";
								spells_invoked.shift();
								spells_invoked.push('tornado');
								let div = document.createElement('div');
								div.className = "tornado";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
								if (div == spells_container[1]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
								if (div == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[0]);
									spells_container.appendChild(div);
								}
								if (spells_container[1] == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
							}

							//BEGGINING WITH EXORT
							else if (update == "exort,exort,exort") {
								spell = "Sun Strike";
								spells_invoked.shift();
								spells_invoked.push('sun-strike');
								let div = document.createElement('div');
								div.className = "sun-strike";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
								if (div == spells_container[1]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
								if (div == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[0]);
									spells_container.appendChild(div);
								}
								if (spells_container[1] == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
							} else if (update == "exort,exort,quas") {
								spell = "Forge Spirit";
								spells_invoked.shift();
								spells_invoked.push('forge-spirit');
								let div = document.createElement('div');
								div.className = "forge-spirit";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}

								if (div == spells_container[1]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
								if (div == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[0]);
									spells_container.appendChild(div);
								}
								if (spells_container[1] == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
							} else if (update == "exort,quas,quas") {
								spell = "Ice Wall";
								spells_invoked.shift();
								spells_invoked.push('ice-wall');
								let div = document.createElement('div');
								div.className = "ice-wall";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
								if (div == spells_container[1]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
								if (div == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[0]);
									spells_container.appendChild(div);
								}
								if (spells_container[1] == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
							} else if (update == "exort,exort,wex") {
								spell = "Chaos Meteor";
								spells_invoked.shift();
								spells_invoked.push('chaos-meteor');
								let div = document.createElement('div');
								div.className = "chaos-meteor";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
								if (div == spells_container[1]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
								if (div == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[0]);
									spells_container.appendChild(div);
								}
								if (spells_container[1] == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
							} else if (update == "exort,wex,wex") {
								spell = "Alacrity";
								spells_invoked.shift();
								spells_invoked.push('alacrity');
								let div = document.createElement('div');
								div.className = "alacrity";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
								if (div == spells_container[1]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
								if (div == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[0]);
									spells_container.appendChild(div);
								}
								if (spells_container[1] == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
							} else if (update == "exort,quas,wex") {
								spell = "Deafening Blast";
								spells_invoked.shift();
								spells_invoked.push('def-blast');
								let div = document.createElement('div');
								div.className = "def-blast";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
								if (div == spells_container[1]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
								if (div == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[0]);
									spells_container.appendChild(div);
								}
								if (spells_container[1] == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
							} else if (update == "exort,wex,quas") {
								spell = "Deafening Blast";
								spells_invoked.shift();
								spells_invoked.push('def-blast');
								let div = document.createElement('div');
								div.className = "def-blast";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
								if (div == spells_container[1]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
								if (div == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[0]);
									spells_container.appendChild(div);
								}
								if (spells_container[1] == spells_container[0]) {

									spells_container.removeChild(spells_container.childNodes[1]);
									spells_container.appendChild(div);
								}
							} else if (update == "exort,wex,exort") {
								spell = "Chaos Meteor";
								spells_invoked.shift();
								spells_invoked.push('chaos-meteor');
								let div = document.createElement('div');
								div.className = "chaos-meteor";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}

							} else if (update == "exort,quas,exort") {
								spell = "Forge Spirit";
								spells_invoked.shift();
								spells_invoked.push('forge-spirit');
								let div = document.createElement('div');
								div.className = "forge-spirit";

								spells_container.appendChild(div);

								if (spells_container.childNodes.length > 2) {
									spells_container.removeChild(spells_container.childNodes[0]);
								}
							}

						}




						if (update.length == 4) {
							update.shift();  // Удаляем первый элемент из массива update
							if (container.firstChild) {
								container.removeChild(container.firstChild);  // Удаляем первый элемент из elements-taken
							}
						}
						



					}, false);