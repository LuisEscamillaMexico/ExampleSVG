/*Funciones para Menu*/
/*Inico*/
const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar() {
	sidebar.classList.toggle('close')
	toggleButton.classList.toggle('rotate')

	closeAllSubMenus()
}

function toggleSubMenu(button) {

	if (!button.nextElementSibling.classList.contains('show')) {
		closeAllSubMenus()
	}

	button.nextElementSibling.classList.toggle('show')
	button.classList.toggle('rotate')

	if (sidebar.classList.contains('close')) {
		sidebar.classList.toggle('close')
		toggleButton.classList.toggle('rotate')
	}
}

function closeAllSubMenus() {
	Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
		ul.classList.remove('show')
		ul.previousElementSibling.classList.remove('rotate')
	})
}

/*Fin*/

function nextQuestion(current) {
	document.getElementById('question' + current).classList.remove('active');
	document.getElementById('question' + (current + 1)).classList.add('active');
	if (current === 4) {
		document.getElementById('question99').classList.remove('active');
	}
	else {
		document.getElementById('question99').classList.add('active');
	}
}

function prevQuestion(current) {
	document.getElementById('question' + current).classList.remove('active');
	document.getElementById('question' + (current - 1)).classList.add('active');
	if (current === 6) {
		document.getElementById('question99').classList.remove('active');
	} else {
		document.getElementById('question99').classList.add('active');
	}
}

function mostrar99(current) {
	document.getElementById('question99').classList.add('active');
}

function esconder99(current) {
	document.getElementById('question99').classList.remove('active');
}

function submitSurvey() {
	alert('Encuesta enviada. ¡Gracias por participar!');
}
function updateDimensions() {
	const width = window.innerWidth;
	const height = window.innerHeight;
	document.getElementById('width').textContent = width;
	document.getElementById('height').textContent = height;
}

window.addEventListener('resize', updateDimensions);
document.addEventListener('DOMContentLoaded', updateDimensions);


//Validacion de checkbox 4
document.addEventListener('DOMContentLoaded', (event) => {
const form = document.getElementById('checkboxForm');
	const checkboxes = form.querySelectorAll('.form-check-input');
	const feedback = form.querySelector('.invalid-feedback');

checkboxes.forEach(checkbox => {
		checkbox.addEventListener('change', () => {
			const checkedCount = Array.from(checkboxes).filter(chk => chk.checked).length;
			if (checkedCount > 3) {
				checkbox.checked = false;
				feedback.style.display = 'block';
			} else {
				feedback.style.display = 'none';
			}
		});
});
});

//Validacion de checkbox 5
document.addEventListener('DOMContentLoaded', (event) => {
	const form = document.getElementById('checkboxForm5');
	const checkboxes = form.querySelectorAll('.form-check-input');
	const feedback = form.querySelector('.invalid-feedback');

	checkboxes.forEach(checkbox => {
		checkbox.addEventListener('change', () => {
			const checkedCount = Array.from(checkboxes).filter(chk => chk.checked).length;
			if (checkedCount > 3) {
				checkbox.checked = false;
				feedback.style.display = 'block';
			} else {
				feedback.style.display = 'none';
			}
		});
	});
});

//Validacion de numero de hijos
document.addEventListener('DOMContentLoaded', (event) => {
	const rbHijosSi = document.getElementById('rbHijos_Si');
	const rbHijosNo = document.getElementById('rbHijos_No');
	const numHijosSection = document.getElementById('numHijosSection');
	const edadHijosSection = document.getElementById('edadHijosSection');
	const numeroHijos = document.getElementById('numeroHijos');
	const edadInputs = document.getElementById('edadInputs');

	rbHijosSi.addEventListener('change', () => {
		numHijosSection.classList.remove('hidden');
		edadHijosSection.classList.add('hidden');
		edadInputs.innerHTML = '';
	});

	rbHijosNo.addEventListener('change', () => {
		numHijosSection.classList.add('hidden');
		edadHijosSection.classList.add('hidden');
		edadInputs.innerHTML = '';
	});

	numeroHijos.addEventListener('input', () => {
		const numHijos = parseInt(numeroHijos.value);
		if (numHijos > 0 && numHijos <= 10) {
			edadHijosSection.classList.remove('hidden');
			edadInputs.innerHTML = '';
			for (let i = 1; i <= numHijos; i++) {
				const input = document.createElement('input');
				input.type = 'number';
				input.name = `edadHijo${i}`;
				input.id = `edadHijo${i}`;
				input.placeholder = `Edad del hijo ${i}`;
				edadInputs.appendChild(input);
			}
		} else {
			edadHijosSection.classList.add('hidden');
			edadInputs.innerHTML = '';
		}
	});
});

function guardarInformacion() {
	const edadInputs = document.querySelectorAll('#edadInputs input');
	const edades = [];
	var icont = 0
	edadInputs.forEach(input => {
		edades.push(input.value);
		alert('Edad - ' & edades(icont));
		icont = icont + 1
	});
	console.log('Edades de los hijos:', edades);
	// Aquí puedes enviar las edades al servidor o procesarlas como necesites
}

//Login
function login() {
	const nonomina = document.getElementById('txtNoNomina').value;
	const nonominaQR = document.getElementById('nonominaQR').value;
	if (nonomina === nonominaQR) {
		alert('Login exitoso');
		// Redirigir a otra página
		// window.location.href = 'Encuestas.aspx';
		window.location.href = 'EscanerQR.aspx';
	} else {
		alert('Usuario o contraseña incorrectos');
	}
	//__doPostBack('LoginCT', '');
}

function LoginCT() {
	const nonomina = document.getElementById('txtNoNomina').value;
	__doPostBack('LoginCT', nonomina);
}

//function EnviarEncuesta() {
//	__doPostBack('EnviarEncuesta', '');
//}

function EnviarEncuesta() {

	const edadInputs = document.querySelectorAll('#edadInputs input');
	const edades = [];
	edadInputs.forEach(input => {
		edades.push(input.value);
	});
	const cadena = edades.join(", ");
	//console.log('Edades de los hijos:', edades);

	const datos = {
		datosPersonales: {
			email: document.getElementById('txtEmail').value,
			telefono: document.getElementById('txtTelefono').value
		},
		estadoCivil: {
			soltero: document.getElementById('rbSoltero').checked,
			unionLibre: document.getElementById('rbUnionLibre').checked,
			divorciado: document.getElementById('rbDivorciado').checked,
			viudo: document.getElementById('rbViudo').checked
		},
		beneficios: {
			clinicaSalud: document.getElementById('chk_Clinica_Salud').checked,
			gimnasio: document.getElementById('chk_Gimnasio').checked,
			seguroGastos: document.getElementById('chk_SeguroGastos').checked,
			kinderPrimaria: document.getElementById('chk_Kinder_Primaria').checked,
			asadores: document.getElementById('chk_Asadores').checked,
			canchasDeportivas: document.getElementById('chk_Canchas_Deportivas').checked,
			seguroCasaAuto: document.getElementById('chk_Seguro_Casa_Auto').checked,
			conveniosComerciales: document.getElementById('chk_Convenios_comerciales_con_tiendas').checked,
			lavanderia: document.getElementById('chk_Lavanderia').checked,
			diaLibreCumpleaños: document.getElementById('chk_Dia_Libre_Por_Cumpleaños').checked,
			ayudaFallecimiento: document.getElementById('chk_Ayuda_por_fallecimiento').checked,
			ayudaNacimiento: document.getElementById('chk_Ayuda_por_nacimiento').checked,
			diasAguinaldo: document.getElementById('chk_Dias_Aguinaldo').checked,
			primaVacacional: document.getElementById('chk_Prima_Vacacional').checked,
			cajaAhorro: document.getElementById('chk_Caja_Ahorro').checked,
			fondoAhorro: document.getElementById('chk_Fondo_Ahorro').checked,
			viernesFruta: document.getElementById('chk_Viernes_Fruta').checked,
			becas: document.getElementById('chk_Becas').checked,
			despensas: document.getElementById('chk_Despensas').checked,
			psicologa: document.getElementById('chk_Psicologa').checked,
			diaNino: document.getElementById('chk_Dia_Nino').checked,
			diaPadre: document.getElementById('chk_Dia_Padre').checked,
			diaMadre: document.getElementById('chk_Dia_Madre').checked,
			posada: document.getElementById('chk_Posada').checked,
			bonoAniversario: document.getElementById('chk_Bono_Aviversario').checked,
			tarjetaAyudaEscolar: document.getElementById('chk_Tarjeta_ayuda_escolar_para_utiles').checked,
			seguroVida: document.getElementById('chk_Seguro_de_vida').checked,
			enfermeria: document.getElementById('chk_Enfermeria').checked,
			premioAnualAsistencia: document.getElementById('chk_Premio_Anual_Asistencia').checked,
			premioSemanalAsistencia: document.getElementById('chk_Premio_Semanal_Asistencia').checked,
			prestamosSinIntereses: document.getElementById('chk_Prestamos_Sin_Intereses').checked,
			guarderia: document.getElementById('chk_Guarderia').checked
		},
		hijos: {
			si: document.getElementById('rbHijos_Si').checked,
			no: document.getElementById('rbHijos_No').checked,
			edadesHijos: cadena
		},
		contactos:{
				nombre: document.getElementById('NombreContacto1').value,
				telefono: document.getElementById('TelefonoContacto1').value,
				parentesco: document.getElementById('ParentescoContacto1').value,
				nombre2: document.getElementById('NombreContacto2').value,
				telefono2: document.getElementById('TelefonoContacto2').value,
				parentesco2: document.getElementById('ParentescoContacto2').value
		},
		discapacidad: {
			visual: document.getElementById('rbVisual').checked,
			auditiva: document.getElementById('rbAuditiva').checked,
			motriz: document.getElementById('rbMotriz').checked,
			intelectual: document.getElementById('rbIntelectual').checked,
			psicosocial: document.getElementById('rbPsicosocial').checked,
			multiple: document.getElementById('rbMultiple').checked,
			ninguna: document.getElementById('rbNingunaDiscapacidad').checked
		},
		lenguaIndigena: {
			maya: document.getElementById('rbMaya').checked,
			mixteca: document.getElementById('rbMixteca').checked,
			nahuatl: document.getElementById('rbNahuatl').checked,
			zapoteco: document.getElementById('rbZapoteco').checked,
			totonaco: document.getElementById('rbTotonaco').checked,
			ninguna: document.getElementById('rbNingunaLengua').checked
		},
		grupoVulnerable: {
			mujeres: document.getElementById('rbMujeres').checked,
			mayores60: document.getElementById('rbMayores60').checked,
			unicoSustento: document.getElementById('rbUnicoSustento').checked,
			afrodescendientes: document.getElementById('rbAfrodescendientes').checked,
			personaConDiscapacidad: document.getElementById('rbPersonaConDiscapacidad').checked,
			personasConVIH: document.getElementById('rbPersonasConVIH').checked,
			pueblosComunidadesIndigenas: document.getElementById('rbPueblosComunidadesIndigenas').checked,
			lgbtttiq: document.getElementById('rbLGBTTTIQ').checked,
			refugiados: document.getElementById('rbRefugiados').checked,
			ningunGrupoVulnerable: document.getElementById('rbNingunGrupoVulnerable').checked
		},
		enfermedadCronica: {
			conyugue: document.getElementById('rbConyugue').checked,
			hijo: document.getElementById('rbHijo').checked,
			padre: document.getElementById('rbPadre').checked,
			madre: document.getElementById('rbMadre').checked,
			noFamiliar: document.getElementById('rbNoFamiliarEnfermedadCronica').checked,
			otras: document.getElementById('rbOtrasEnfermedadCronica').checked,
			descripcion: document.getElementById('txtOtrasEnfermedadCronica').value
		}
	};

	// Convertir el objeto a una cadena JSON
	const jsonString = JSON.stringify(datos, null, 2);

	// Mostrar el JSON en la consola (o en la página, según necesites)
	//console.log(jsonString);
	__doPostBack('EnviarEncuesta', jsonString);
}

/*
 Codigo para QR
 */

//crea elemento
const video = document.createElement("video");

//nuestro camvas
const canvasElement = document.getElementById("qr-canvas");
const canvas = canvasElement.getContext("2d");

//div donde llegara nuestro canvas
const btnScanQR = document.getElementById("btn-scan-qr");

//lectura desactivada
let scanning = false;

//funcion para encender la camara
const encenderCamara = () => {
	navigator.mediaDevices
		.getUserMedia({ video: { facingMode: "environment" } })
		.then(function (stream) {
			scanning = true;
			btnScanQR.hidden = true;
			canvasElement.hidden = false;
			video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
			video.srcObject = stream;
			video.play();
			tick();
			scan();
		});
};

//funciones para levantar las funiones de encendido de la camara
function tick() {
	canvasElement.height = video.videoHeight;
	canvasElement.width = video.videoWidth;
	canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

	scanning && requestAnimationFrame(tick);
}

function scan() {
	try {
		qrcode.decode();
	} catch (e) {
		setTimeout(scan, 300);
	}
}

//apagara la camara
const cerrarCamara = () => {
	video.srcObject.getTracks().forEach((track) => {
		track.stop();
	});
	canvasElement.hidden = true;
	btnScanQR.hidden = false;
};

const activarSonido = () => {
	var audio = document.getElementById('audioScaner');
	audio.play();
}

//callback cuando termina de leer el codigo QR
qrcode.callback = (respuesta) => {
	if (respuesta) {
		//console.log(respuesta);

		//Swal.fire(respuesta)
		activarSonido();
		//encenderCamara();    
		cerrarCamara();
		EnviarResultadoCode(respuesta);
	}
};
//evento para mostrar la camara sin el boton 
window.addEventListener('load', (e) => {
	encenderCamara();
})

function EnviarResultadoCode(e) {
	document.getElementById('lblValorQRLeido').innerText = e;
	const InputsText = document.querySelectorAll('#DivValorEscaneado input');

	InputsText.forEach(input => {
		if (input.id = "txtValorEscaneado_Asp") {
			input.value = e;
			// Crear y despachar un evento 'input' para que los eventos asociados se activen
			const event = new Event('change', {
				bubbles: true,
				cancelable: true,
			});
			input.dispatchEvent(event);
		}
	});

	
}
