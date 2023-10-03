function iniciarSesion() { 

	let done 	 = 0; 
	var usuario  = document.login.usuario.value; 
	var password = document.login.password.value; 

	if (usuario == "admin" && password == "123") { 
		window.location.replace("editarProducto.html"); 
	} 


} 