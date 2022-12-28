
/*
Franklin Rodriguez
frank14082013@gmail.com
*/

const URL_API = "http://localhost:8000";
const XTABLA = document.querySelector("#tusuario tbody");

async function crearVehiculo() {

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
	        let vvehiculo = response2;

	            let filaUsuario = `
                    <tr>

                    <td>
                    ${vvehiculo.id}
                    </td>

                    <td>
                    ${vvehiculo.capacidad_en_metros_cubicos}
                    </td>

                    <td>
                    ${vvehiculo.consumo_de_combustibe_x_km}
                    </td>

                    <td>
                    ${vvehiculo.distancia_x_recorrer_para_estar_disponible}
                    </td>


                    <td>
                    ${vvehiculo.costo_depreciacion_x_km_recorrido}
                    </td>

                    <td>
                    ${vvehiculo.km_recorridos}
                    </td>

                    <td>
                    ${vvehiculo.placa}
                    </td>

                    <td>
                    ${vvehiculo.ubicacion_actual}
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

async function cargarVehiculos() {
	const urlApi = URL_API + "/api/vehiculos";
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

	for( let vvehiculo of res ) {

	let filaUsuario = `
	<tr>
									  <td>
                    ${vvehiculo.id}
                    </td>

                    <td>
                    ${vvehiculo.capacidad_en_metros_cubicos}
                    </td>

                    <td>
                    ${vvehiculo.consumo_de_combustibe_x_km}
                    </td>

                    <td>
                    ${vvehiculo.distancia_x_recorrer_para_estar_disponible}
                    </td>


                    <td>
                    ${vvehiculo.costo_depreciacion_x_km_recorrido}
                    </td>

                    <td>
                    ${vvehiculo.km_recorridos}
                    </td>

                    <td>
                    ${vvehiculo.placa}
                    </td>

                    <td>
                    ${vvehiculo.ubicacion_actual}
                    </td>
	<td>
	<a href="#" onclick="deleteVehiculo( ${vvehiculo.id} )">DELETE</a>
	</td>
	</tr>
	`;
	XTABLA.innerHTML += filaVehiculo;
	} // for

	}catch(err){
		alert("acceso denegado, debes iniciar sesion y tener permiso !");
	}

} // cargarVehiculos

async function deleteVehiculo( id ) {

if(
confirm(
"Eliminar vehiculo con id: " + id
)
){
const urlApi = URL_API + "/api/vehiculos/" + id;

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

} // if confirm eliminar vehiculo con ID

} // deleteVehiculo
