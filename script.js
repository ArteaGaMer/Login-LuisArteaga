/* En este script creamos la función que vamos a utilizar para hacer las validaciones*/
/*utilizamos let para traer por el id a usua y contra */
function form(){
let username = document.getElementById("usua").value;
let password = document.getElementById("contra").value; 
	if ( username != "Luis"){
		alert("usuario invalido");
		return;
	}
	/*Aquí utilizamos dos if para validar el usuario y la contraseña, como podemos ver, si el usuario no es Luis entonces no 
	nos dejara logearnos*/
	if( password == ""){
		alert("Debe de ingresar una contraseña");
		return;
	}
	/*El siguiente comando es para encriptar la contraseña utilizando el getElementById y la carpeta que descargamos
	desde internet */
	document.getElementById("vale").textContent = CryptoJS.MD5(password);
}