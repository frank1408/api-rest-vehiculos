package rodriguez.api.controllers;

import java.util.List;

import org.apache.tomcat.util.http.parser.HttpParser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import rodriguez.api.models.Vehiculo;
import rodriguez.api.repositorio.VehiculoRepositorio;
import rodriguez.api.servicio.VehiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
public class VehiculoController {

@Autowired
private VehiculoService vehiculoService;

//@RequestMapping( value = "api/vehiculos", method = RequestMethod.GET )
@GetMapping(value = "api/vehiculos")
public List<Vehiculo> getUsuarios() {
	return vehiculoService.getVehiculos();
}

//@RequestMapping( value = "api/vehiculos/{id}", method = RequestMethod.GET  )
@GetMapping(value ="api/vehiculos/{id}")
public ResponseEntity<Vehiculo> getUsuario(@PathVariable Long id ) {
try{
	Vehiculo vehiculo = vehiculoService.getVehiculo(id);
	return new ResponseEntity<Vehiculo>(vehiculo, HttpStatus.OK);
}catch(Exception exception){
	return new ResponseEntity<Vehiculo>(HttpStatus.NOT_FOUND);
}
}

//@RequestMapping( value = "api/vehiculos/{id}", method = RequestMethod.DELETE )
@DeleteMapping(value = "api/vehiculos/{id}")
public void deleteUsuario( @PathVariable Long id ) {
	vehiculoService.deleteVehiculo(id);
}

//@RequestMapping( value = "api/vehiculos", method = RequestMethod.POST  )
@PostMapping(value = "api/vehiculos")
public void createUsuario( @RequestBody Vehiculo vehiculo ) {
	vehiculoService.postVehiculo(vehiculo);
}

//@RequestMapping( value = "api/vehiculos", method = RequestMethod.PUT )
@PutMapping(value = "api/vehiculos/{id}")
public ResponseEntity<?> updateUsuario( @PathVariable Long id, @RequestBody Vehiculo vehiculoActualizado ) {
	try{
		Vehiculo vehiculoExistente = vehiculoService.getVehiculo(id);
		vehiculoService.postVehiculo(vehiculoActualizado);
		return new ResponseEntity<Vehiculo>( HttpStatus.OK);
	}catch (Exception exception){
		return new ResponseEntity<Vehiculo>(HttpStatus.NOT_FOUND);
	}
}

} // UsuarioController
