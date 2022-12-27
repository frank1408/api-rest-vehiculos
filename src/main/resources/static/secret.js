
/*
Franklin Rodriguez
frank14082013@gmail.com
*/

const URL_API = "http://localhost:8000";
const XTABLA = document.querySelector("#tusuario tbody");

async function crearUsuario() {

	let unombre     = document.getElementById("unombre");
	let uapellido   = document.getElementById("uapellido");
	let ucorreo     = document.getElementById("ucorreo");
	let utelefono   = document.getElementById("utelefono");
	let ucontrasena = document.getElementById("ucontrasena");

	const datosNewUser = {
	"nombre":     unombre.value,
	"apellido":   uapellido.value,
	"correo":     ucorreo.value,
	"telefono":   utelefono.value,
	"contrasena": ucontrasena.value
	};
	const dataSend = JSON.stringify( datosNewUser );

	const urlApi = URL_API + "/api/vehiculos";

	const objetoInfo = {

    mode: 'same-origin',/* no-cors same-origin */
	method: "POST",
	headers: {
		"Access-Control-Allow-Origin": "*",
    	"Access-Control-Allow-Methods": "*",
    	"Access-Control-Allow-Headers": "*",
	    "Accept": "application/json",
	    "Content-Type": "application/json"
	},
	body: dataSend

	}; /* objetoInfo */
	const ans = await fetch( urlApi, objetoInfo )
	const res = await ans.json();

	//window.location.assign("/crear2");

} /* crearUsuario */


async function cargarVehiculo() {

    limpiar();
	let uid = document.getElementById("uid").value;
	const urlApi = URL_API + "/api/vehiculos/" + uid;

	let objetoInfo = {
    mode: 'same-origin', /* no-cors same-origin */
	method: "GET",
	headers: {
	"Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
	"Content-Type": "application/json",
	"Accept": "application/json",
	"Authorization": localStorage.token
	}
	}; /* objetoInfo */

    let ans = {};
	fetch( urlApi, objetoInfo )
	    .then( (response) => response.json() )
	    .then( (response2) => {
	        let uusuario = response2;

	            let filaUsuario = `
                    <tr>

                    <td>
                    ${vvehiculo.id}
                    </td>

                    <td>
                    ${vvehiculo.nombre} ${vvehiculo.apellido}
                    </td>

                    <td>
                    ${vvehiculo.correo}
                    </td>

                    <td>
                    ${vvehiculo.telefono}
                    </td>

                    <td>
                    <!--
                    <a href="#" onclick="deleteVehiculo( ${vvehiculo.id} )">DELETE</a>
                    -->
                    </td>
                    </tr>
                    `;
                    XTABLA.innerHTML = filaUsuario;
	    })
	    .catch( (err) => {
        	    alert( err );
        });

} // function cargarUsuario

function limpiar(){
	XTABLA.innerHTML = "";
}

async function cargarUsuarios() {
	const urlApi = URL_API + "/api/usuarios";
	const objetoInfo = {
    mode: "cors",/* no-cors same-origin */
	method: "GET",
	headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
	    "Accept": "application/json",
        "Content-Type": "application/json",
	    "Authorization": localStorage.token
	}
	}; /* objetoInfo */

	try{
	const ans = await fetch( urlApi, objetoInfo );
	const res = await ans.json();
    limpiar();

	for( let uusuario of res ) {

	let filaUsuario = `
	<tr>

	<td>
	${uusuario.id}
	</td>

	<td>
	${uusuario.nombre} ${uusuario.apellido}
	</td>

	<td>
	${uusuario.correo}
	</td>

	<td>
	${uusuario.telefono}
	</td>

	<td>
	<a href="#" onclick="deleteUsuario( ${uusuario.id} )">DELETE</a>
	</td>
	</tr>
	`;
	XTABLA.innerHTML += filaUsuario;
	} // for

	}catch(err){
		alert("acceso denegado, debes iniciar sesion y tener permiso !");
	}

} // function cargarUsuarios

async function deleteUsuario( id ) {

if(
confirm(
"Eliminar usuario con id: " + id
)
){
const urlApi = URL_API + "/api/usuarios/" + id;

const objetoInfo = {
mode: 'cors',/* no-cors same-origin*/
method: "DELETE",
headers: {
"Access-Control-Allow-Origin": "*",
"Access-Control-Allow-Methods": "*",
"Access-Control-Allow-Headers": "*",
"Content-Type": "application/json",
"Accept": "application/json",
"Authorization": localStorage.token
}}; // objetoInfo

try{
const ans = await fetch( urlApi, objetoInfo );
const res = ans.json();
location.reload();
}catch(err){ alert("err: " + err); }

} // if confirm eliminar usuario con ID

} // function deleteUsuario
