// selector
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

//vue js
var app = new Vue({
	el: '#app',
	data: {
		mensaje: "",
		mensajeGuardado: "",
		Url: "https://rel.ink/api/links/",
		datos: "",
		urlParaMostrar: ""

	},
	methods: {
/*		acortarUrl() {
			axios.post(this.Url, {
				url: this.mensaje,
			})

			.then( respuesta => {

					console.log(respuesta);
					this.datos = respuesta.data.hashid;
					this.mensajeGuardado = this.mensaje;
					this.urlParaMostrar = "https://rel.ink/" + this.datos;
					document.getElementById("btnCopiar").style="display:'block'";
					this.mensaje = "";	

			})
			.catch(error => {
				console.log(error);
			})
		
		},*/
		//metodo para probar
		acortarUrl() {

				if (this.mensaje.length == 0 || /^\s+$/.test(this.mensaje)) {
					Swal.fire({
						  icon: 'error',
						  title: 'Oops...',
						  text: 'El campo de texto no puede estar vacio.',
						  //footer: '<a href>Why do I have this issue?</a>'
						})
				}else{
						axios.post(this.Url, {
							url: this.mensaje,
						})

						.then( respuesta => {

								console.log(respuesta);
								this.datos = respuesta.data.hashid;
								this.mensajeGuardado = this.mensaje;
								this.urlParaMostrar = "https://rel.ink/" + this.datos;
								document.getElementById("btnCopiar").style="display:'block'";
								this.mensaje = "";	

						})
						.catch(error => {
							console.log(error);
						})
				};
		}, 
		alerta(){
			alert("ooo");
		},
		//
		copiar() {
			var copiame = document.getElementById("enlace");
			this.$copyText(copiame).then(function(e){
				Swal.fire('se ha copiado correctamente la URL.');
				document.getElementById("btnCopiar").innerHTML = "copiado!";
				document.getElementById("btnCopiar").style = "background: hsl(257, 27%, 26%)";			
			}, function(e){
				alert("no se puede copiar");
			})
		}
	}	

})
