/**   - FERNANDO GOMEZ - 
 Si es la residencia es de buenos aires consultar por confirm si pertenece a la zona de amba. <br>
Si la persona es mayor de 60, no importa la profesión que tenga, el mensaje a mostrar es : No puede transitar, es persona de riesgo quédese en su casa. <br>
 Si la persona es Médico y menor de 25 : Usted es muy joven para ser médico<br>
Si la persona es enfermero o almacenero entre 27 y 60 años: Usted puede transitar<br>
Si la persona es entrenador, profesor, abogado o programador y reside en la zona de amba y tiene entre 20 y 60 años, el mensaje es : Solo salí para compras esenciales.<br>
Si la persona es menor de 15 años, no importa donde resida, y tiene una profesión distinta a ser alumno: Es muy chico para tener una profesión<br>
Si la persona es menor de 15 años, no importa donde resida, y es alumno: Respeta y colabora en tu casa, ya pronto volveremos a la escuela<br>
Si la persona es mayor de 15 años y reside en otro lugar q no sea el amba: Usa el barbijo para transitar!<br></p>
 */
function probarEjercicio()
{
   
	 let edad ;
	 let profesion ;
	 let provincia;
	 let amba; 
	
	 edad = parseInt(document.getElementById("edadTxtId").value);
	 profesion = document.getElementById("profesionSelectId").value;
	 provincia = document.getElementById("residenciaSelectId").value;
     amba = (provincia == "Buenos Aires");
	 
	 
	 if (edad>=60){
		 alert ("No puede transitar, es persona de riesgo quédese en su casa.");
	 }
	 else if (profesion == "Medico" && edad<25){
		 alert ("Usted es muy joven para ser médico");
	 }
	 else if (profesion=="Enfermero" && edad>=27 && edad<60){
		 alert ("Usted Puede Transitar");			 
		        }else if(profesion=="Almacenero" && edad>=27 && edad<60){
			       alert ("Usted Puede Transitar");
	}
	else  if (( amba && edad >= 20 && edad<60) && (profesion == "Entrenador" || profesion=="Profesor" || profesion == "Abogado" || profesion == "Programador")){
					amba= prompt("¿Usted recide en zona de AMBA?"); 
			
		   				 if (amba == null || amba == "no") {
				 				alert ("Volve a introducir los datos");
						}else {
								alert("Solo salí para compras esenciales");
							 } 
	}
	else if (edad<=15 && profesion == "Alumno"){
		alert ("Respeta y colabora en tu casa, ya pronto volveremos a la escuela");
	}
	else if (edad>15 && provincia != "Buenos Aires" ){
		alert ("Usa el barbijo para transitar!");
	}
	
	
	

}

		 
	 

