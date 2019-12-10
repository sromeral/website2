function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function moverhoriz(objeto) {
	var inicio = parseFloat(window.getComputedStyle(document.getElementById(objeto)).getPropertyValue("margin-left")), i = inicio, maximo = (window.innerWidth - 100);
	for (;;) {
		// Mover a la izquierda
		while (i < maximo) {
			document.getElementById(objeto).style.marginLeft = i + "px";
			await sleep(1);
			i++;
		}
		// Mover a la derecha
		while (i > 0) {
			document.getElementById(objeto).style.marginLeft = i + "px";
			await sleep(1);
			i--;
		}
	}
}

async function moververt(objeto) {
	var inicio = parseFloat(window.getComputedStyle(document.getElementById(objeto)).getPropertyValue("margin-top")), i = inicio, maximo = (window.innerHeight - 100);
	for (;;) {
		// Mover hacia abajo
		while (i < maximo) {
			document.getElementById(objeto).style.marginTop = i + "px";
			await sleep(1);
			i++;
		}
		// Mover hacia arriba
		while (i > 0) {
			document.getElementById(objeto).style.marginTop = i + "px";
			await sleep(1);
			i--;
		}
	}
}

moverhoriz("pelota");
moververt("pelota");
moverhoriz("verde");
moververt("verde");
moverhoriz("roja");
moververt("roja");
moverhoriz("azul");
moververt("azul");