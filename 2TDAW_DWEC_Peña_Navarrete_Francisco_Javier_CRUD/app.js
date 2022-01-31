const mes2 = {

    1 : '01',
    2 : '02',
	3 : '03',
    4 : '04',
	5 : '05',
    6 : '06',
	7 : '07',
    8 : '08',
	9 : '09',
    10 : '10',
	11 : '11',
    12 : '12',


};


let hoy = new Date();

let año = hoy.getFullYear();
let mes = hoy.getMonth()+1;
let dia = hoy.getDate();

// let date = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();

let date = año+'-'+mes2[mes]+'-'+dia;


console.log(hoy);



//FORMULARIOS
const form_añadir = document.querySelector("#coche-formu");
const form_buscar = document.querySelector("#coche-busqueda");
const form_editar = document.querySelector("#coche-editar");

//INPUTS DEL FORMULARIO DE NUEVO COCHE
const nombre = document.querySelector("#nombre");
const puertas = document.querySelector("#puertas");
const imagen = document.querySelector("#imagen");
const descripcion = document.querySelector("#descripcion");
const categoria = document.querySelector("#categoria");
const precio = document.querySelector("#precio");
const enlace = document.querySelector("#enlace");
const disponibilidad = document.querySelector("#disponibilidad");
// const llegada = document.querySelector("#llegada");
const llegada = date;
const b_nuevo = document.querySelector("#nuevo");

//JSON DE IMAGENES DEL BOOLEANO
const verificacion = {

    true : "https://t4.ftcdn.net/jpg/00/45/14/87/360_F_45148719_zRmQUhuGflYDgZB56rqVm5pWvqSkstyi.jpg",
    false : "https://antoniogabrielherrera.com/wp-content/uploads/2016/03/212157Sin-stock-636x352.jpg"

}


//DIV DEL MODAL BOOSTRAP PARA PODER QUITARLO Y PONERLO
const editar_modal = document.querySelector("#editarModal");

//INPUTS DEL FORMULARIO DE EDITAR COCHE
const editar_nombre = document.querySelector("#editarNombre");
const editar_puertas = document.querySelector("#editarPuertas");
const editar_imagen = document.querySelector("#editarImagen");
const editar_descripcion = document.querySelector("#editarDescripcion");
const editar_categoria = document.querySelector("#editarCategoria");
const editar_precio = document.querySelector("#editarPrecio");
const editar_enlace = document.querySelector("#editarEnlace");
const editar_disponibilidad = document.querySelector("#editarDisponibilidad");
// const editar_llegada = document.querySelector("#editarLlegada");
const editar_llegada = date;

const editar_clave_coche = document.querySelector("#claveCoche")
const b_editar = document.querySelector("#editar");


//INPUTS DEL FORMULARIO DE BUSCAR
const busqueda = document.querySelector("#busqueda");
const buscar = document.querySelector("#buscar");
const criterio = document.querySelector("#criterio");

//INPUTS DE ORDENACION
const ord_desc_puertas = document.querySelector("#ordenar_desc");
const ord_asc_fecha = document.querySelector("#ordenar_asc");

//TABLA DE COCHES
const tabla_coches = document.querySelector("#coche-list");



//GESTION DE BUSQUEDA
buscar.addEventListener("click",
	(evento) => {
		evento.preventDefault();

		const coches=Object.values(sessionStorage).map(
			(coche)=>{
				return JSON.parse(coche);
			}
		); //retorna todos lo coches en forma de json
		const coches_filtrados=coches.filter(
			(coche)=>{
				return coche['descripcion'].////
				       includes(busqueda.value.trim());
			}
		);
		//VACIAR LA TABLA	
		tabla_coches.innerHTML="";
		coches_filtrados.forEach(
			(coche)=>{
				tabla_coches.appendChild(nuevoCoche(coche));
			}
		)

	});


//GESTION DE ORDENACION

ord_asc_fecha.addEventListener("click",
	(evento) => {
		evento.preventDefault();

		//PASAR EL SESSIONSTORAGE A UN ARRAY DE OBJETOS JSON
		const coches=Object.values(sessionStorage).map(
			(coche)=>{
				return JSON.parse(coche);
			}
		);
		//FILTRADO
		const coches_filtrados=coches.filter(
			(coche)=>{
				return coche['descripcion'].///////
				       includes(busqueda.value.trim());
			}
		);
		//ORDENACION
		const coches_ordenados=coches_filtrados.sort(
			(a,b)=>{
				a = new Date(a["llegada"]);
				b = new Date(b["llegada"]);
				return a - b;
			}
		)

		//VACIAR LA TABLA	
		tabla_coches.innerHTML="";
		coches_ordenados.forEach(
			(coche)=>{
				tabla_coches.appendChild(nuevoCoche(coche));

			}
		)
		console.log(coches_ordenados);
	});


	ord_desc_puertas.addEventListener("click",
	(evento) => {
		evento.preventDefault();

		//PASAR EL SESSIONSTORAGE A UN ARRAY DE OBJETOS JSON
		const coches=Object.values(sessionStorage).map(
			(coche)=>{
				return JSON.parse(coche);
			}
		);
		//FILTRADO
		const coches_filtrados=coches.filter(
			(coche)=>{
				return coche['descripcion'].
				       includes(busqueda.value.trim());
			}
		);
		//ORDENACION
		const coches_ordenados=coches_filtrados.sort(
			(a,b)=>{
				return b["puertas"]-a["puertas"];
			}
		)

		//VACIAR LA TABLA	
		tabla_coches.innerHTML="";
		coches_ordenados.forEach(
			(coche)=>{
				tabla_coches.appendChild(nuevoCoche(coche));
			}
		)
	});


//GESTION DE LA TABLA	
const borrarCoche = (clave_coche) => {
	return () => {
		const fila_a_borrar = document.querySelector("#" + clave_coche)
		fila_a_borrar.remove();
		sessionStorage.removeItem(clave_coche);
	}
}

const modalEditarCoche = (clave_coche) => {
	return () => {
		const coche=JSON.parse(sessionStorage.getItem(clave_coche));
		editar_nombre.value=coche["nombre"];
		editar_puertas.value=coche["puertas"];
		editar_imagen.value=coche["imagen"];
		editar_descripcion.value=coche["descripcion"];
		editar_categoria.value=coche["categoria"];
		editar_precio.value=coche["precio"];
		editar_enlace.value=coche["enlace"];
		editar_disponibilidad.value=coche["disponibilidad"];
		editar_llegada.value=coche["llegada"];
		editar_clave_coche.value=clave_coche;		

		$(editar_modal).modal("toggle");///////
	}
}

const nuevoCoche = (json) => {
	let nueva_fila = document.createElement("tr");
	nueva_fila.id = "ID_" + json["nombre"].toUpperCase().replaceAll(" ", "");//////

	//CREA LA CELDA CON EL NOMBRE
	let td_nombre = document.createElement("td");
	td_nombre.innerText = json["nombre"];
	td_nombre.classList.add("text-center");
	nueva_fila.appendChild(td_nombre);

	//CREA LA CELDA CON EL PUERTAS
	let td_puertas = document.createElement("td");
	td_puertas.innerText = json["puertas"];
	td_puertas.classList.add("text-center");
	nueva_fila.appendChild(td_puertas);

	//CREA LA CELDA CON LA IMAGEN
	let imagen = document.createElement("img");
	imagen.src = json["imagen"];
	imagen.style.width = "150px";
	imagen.classList.add("w-25");
	let td_imagen = document.createElement("td");
	imagen.classList.add("w-100");
	td_imagen.appendChild(imagen);
	td_imagen.classList.add("text-center");
	nueva_fila.appendChild(td_imagen);

	//CREA LA CELDA CON LA DESCRIPCION
	let td_descripcion = document.createElement("td");
	td_descripcion.innerText = json["descripcion"];
	td_descripcion.classList.add("text-center");
	nueva_fila.appendChild(td_descripcion);

	//CREA LA CELDA CON LA CATEGORIA
	let td_categoria = document.createElement("td");
	td_categoria.innerText = json["categoria"];
	td_categoria.classList.add("text-center");
	nueva_fila.appendChild(td_categoria);

	//CREA LA CELDA CON EL PRECIO
	let td_precio = document.createElement("td");
	td_precio.innerText = json["precio"] + "€";
	td_precio.classList.add("text-center");
	nueva_fila.appendChild(td_precio);

	//CREA LA CELDA CON ELENLACE
	let enlace_enlazar = document.createElement("a");
	enlace_enlazar.innerText = "enlace";
	enlace_enlazar.href = json["enlace"];
	enlace_enlazar.classList.add("btn", "btn-primary");
	let td_comprar = document.createElement("td");
	td_comprar.classList.add("text-center");
	td_comprar.appendChild(enlace_enlazar);
	nueva_fila.appendChild(td_comprar);

	//CREA LA CELDA CON LA DISPONIBILIDAD
	let imagen_disponibilidad = document.createElement("img");
	imagen_disponibilidad.src = verificacion[json["disponibilidad"]];//////////////////////////////
	imagen_disponibilidad.style.width = "150px";
	imagen_disponibilidad.classList.add("w-25");
	let td_imagen_disponibilidad = document.createElement("td");
	imagen_disponibilidad.classList.add("w-100");
	td_imagen_disponibilidad.appendChild(imagen_disponibilidad);
	td_imagen_disponibilidad.classList.add("text-center");
	nueva_fila.appendChild(td_imagen_disponibilidad);


	//CREA LA CELDA CON LA LLEGADA
	let td_llegada = document.createElement("td");
	td_llegada.innerText = json["llegada"];
	td_llegada.classList.add("text-center");
	nueva_fila.appendChild(td_llegada);

	//CREA EL BOTON DE EDITAR
	let editar = document.createElement("a");
	editar.innerText = "Editar";
	editar.href = "#";

	//MANEJAR EVENTO DE CLICK SOBRE EL BOTON
	console.log(nueva_fila.id);
	editar.addEventListener("click", modalEditarCoche(nueva_fila.id))
	editar.classList.add("btn", "btn-success");

	let td_editar = document.createElement("td");
	td_editar.appendChild(editar);
	td_editar.classList.add("text-center");
	nueva_fila.appendChild(td_editar);

	//============================================================================================	
	//CREA EL BOTON DE BORRADO
	let borrar = document.createElement("a");
	borrar.innerText = "Eliminar";
	borrar.href = "#";
	borrar.classList.add("btn", "btn-danger");

	//MANEJAR EVENTO DE CLICK SOBRE EL BOTON
	borrar.addEventListener("click", borrarCoche(nueva_fila.id))
	let td_borrar = document.createElement("td");
	td_borrar.appendChild(borrar);
	td_borrar.classList.add("text-center");
	nueva_fila.appendChild(td_borrar);
	//================================================================================================
	return nueva_fila;
}

//=========AÑADIR NUEVO COCHE COMPROBANDO ANTES LOS DATOS=======================
b_nuevo.addEventListener("click",
	(evento) => {
		evento.preventDefault();
		if (nombre.value.trim() === "") {
			mensajeError("Nombre incorrecto");
		} else if (puertas.value.trim() === "" || isNaN(puertas.value.trim()) || parseInt(puertas.value.trim()) <= 0) {
			mensajeError("Número de puertas incorrecto");
		} else if (imagen.value.trim() === "") {
			mensajeError("Imagen incorrecta");
		} else if (descripcion.value.trim() === "") {
			mensajeError("Descripción incorrecta");
		} else if (categoria.value.trim() === "") {
			mensajeError("Categoría incorrecta");
		} else if (precio.value.trim() === "" || isNaN(precio.value.trim()) || parseInt(precio.value.trim()) <= 0) {
			mensajeError("Error al introducir el precio");
		} else if (enlace.value.trim() === "") {
			mensajeError("Enlace incorrecto");
		} else if (disponibilidad.value.trim() === "") {
			mensajeError("Disponibilidad incorrecta");
		// } else if (llegada.value.trim() === "") {
		// 	mensajeError("Llegada incorrecta");
		} else if (sessionStorage.getItem("ID_" + nombre.value.trim().toUpperCase().replaceAll(" ", "")) !== null) {
			mensajeError("El coche ya existe");
		} else {

			const datos_coche= {
				"nombre": nombre.value.trim(),
				"puertas": puertas.value.trim(),
				"imagen": imagen.value.trim(),
				"descripcion": descripcion.value.trim(),
				"categoria": categoria.value.trim(),
				"precio": precio.value.trim(),
				"enlace": enlace.value.trim(),
				"disponibilidad": disponibilidad.value.trim(),
				"llegada" : date,
			};
			const nuevo = nuevoCoche(datos_coche);
			tabla_coches.appendChild(nuevo);
			sessionStorage.setItem("ID_" + nombre.value.trim().toUpperCase().replaceAll(" ", ""), JSON.stringify(datos_coche));
			form_añadir.reset();
			document.documentElement.scrollTop = document.documentElement.scrollHeight;
			mensajeOk("Añadido correctamente");
		}
	});

//=========EDITAR UN COCHE DESDE EL FORMULARIO======================

b_editar.addEventListener("click",
	(evento) => {
		evento.preventDefault();
		const nueva_clave_coche="ID_"+editar_nombre.
									value.
			                        trim().
									toUpperCase().
									replaceAll(" ","");

		if (editar_nombre.value.trim() === "") {
			mensajeError("Nombre incorrecto");
		} else if (editar_puertas.value.trim() === "" || isNaN(puertas.value.trim()) || parseInt(puertas.value.trim()) <= 0) {
			mensajeError("Número de puertas incorrecto");
		} else if (editar_imagen.value.trim() === "") {
			mensajeError("Imagen incorrecta");
		} else if (editar_descripcion.value.trim() === "") {
			mensajeError("Descripción incorrecta");
		} else if (editar_categoria.value.trim() === "") {
			mensajeError("Categoría incorrecta");
		} else if (editar_precio.value.trim() === "" || isNaN(precio.value.trim()) || parseInt(precio.value.trim()) <= 0) {
			mensajeError("Error al introducir el precio");
		} else if (editar_enlace.value.trim() === "") {
			mensajeError("Enlace incorrecto");
		} else if (editar_disponibilidad.value.trim() === "") {
			mensajeError("Disponibilidad incorrecta");
		// } else if (editar_llegada.value.trim() === "") {
		// 	mensajeError("Llegada incorrecta");
		} else if (editar_clave_coche.value!==nueva_clave_coche
			&& sessionStorage.getItem(nueva_clave_coche)
										 !== null){
			mensajeError("El coche ya existe");
		} else {
			const datos_coche= {
				"nombre": editar_nombre.value.trim(),
				"puertas": editar_puertas.value.trim(),
				"imagen": editar_imagen.value.trim(),
				"descripcion": editar_descripcion.value.trim(),
				"categoria": editar_categoria.value.trim(),
				"precio": editar_precio.value.trim(),
				"enlace": editar_enlace.value.trim(),
				"disponibilidad": editar_disponibilidad.value.trim(),
				"llegada": date,
			};
			//TR CON LOS NUEVOS DATOS
			const coche_editado=nuevoCoche(datos_coche);
			//TRA ANTERIOR
			const fila_a_editar=document.
			                querySelector("#"+editar_clave_coche.value);
			//COLOCAMOS EN LA POSICION DEL TR ANTERIOR EL NUEVO
			fila_a_editar.replaceWith(coche_editado);
			//ACTUALIZAR EL STORAGE
			sessionStorage.setItem(nueva_clave_coche,
				                   JSON.stringify(datos_coche));
			if(nueva_clave_coche!==editar_clave_coche.value){
			     sessionStorage.removeItem(editar_clave_coche.value);
			}

			form_editar.reset();
			$(editar_modal).modal("toggle");////
			mensajeOk("Editado correctamente");
		}
	});

//AÑADIR DATOS INICIALES DE LA BASE DE DATOS AL STORAGE (POR AHORA FICHERO JSON)
//LA PRIMERA VEZ QUE SE INICIE INVENTAR CLAVE PARA RECORDAR QUE HEMOS INICIADO SESION

if (sessionStorage.length===0) {
	menu.forEach(
		(coche) => {
			sessionStorage.setItem("ID_" + coche["nombre"].
				                   toUpperCase()
								   .replaceAll(" ", ""),
				                   JSON.stringify(coche))
		});
}

//AÑADIR LOS DATOS DEL STORAGE PARA MANEJAR LA APLICACION A TRAVES DE ELLOS Y NO TENER QUE USAR SIEMPRE LA BASE DE DATOS
Object.values(sessionStorage).forEach(
	(coche) => {
		tabla_coches.appendChild(nuevoCoche(JSON.parse(coche)));
	}
)