

function validateForm(){
	
	var nombre = document.getElementById("name").value;
	if (nombre == ""|| nombre == null){
		alert ("Digite el usuario");
		return false ;
	}
	if (!(/^[A-Z][a-zA-Z]*$/g.test (document.getElementById('name').value))){
		alert ("Caracteres invalidos o la primera letra  no es mayúscula");
		return false;
	}

	var apellido = document.getElementById("lastname").value;
	if (apellido == ""|| apellido == null){
		alert ("Digite su apellido");
		return false ;
	}

	if (!(/^[A-Z][a-zA-Z]*$/g.test(document.getElementById('lastname').value))){
		alert ("Caracteres invalidos o la primera letra no es mayuscula");
		return false;
	}

    var email = document.getElementById("input-email").value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !expr.test(email) ){
        alert("Error: La dirección de correo " + email + " es incorrecta.");
    }
	var contra = document.getElementById("input-password").value;
		if(contra.length < 6 ){
			alert("Contraseña al menos de 6 caracteres");
		}else if(contra == "123456" || contra =="password" || contra == "098754"){
			alert("Por favor escriba otra contraseña");
		}
	if (document.getElementsByTagName("select")[0].value == 0){
		alert("Selecciona tu tipo de bici");
	}
}

