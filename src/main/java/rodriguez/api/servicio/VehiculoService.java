package rodriguez.api.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rodriguez.api.models.Vehiculo;
import rodriguez.api.repositorio.VehiculoRepositorio;

import java.util.List;

@Service
public class VehiculoService {

@Autowired
private VehiculoRepositorio vehiculoRepositorio;


public List<Vehiculo> getVehiculos() {
	return vehiculoRepositorio.findAll();
}


public Vehiculo getVehiculo(Long idVehiculo) {
	return vehiculoRepositorio.findById(idVehiculo).get();
}

public void postVehiculo(Vehiculo vehiculo){
	vehiculoRepositorio.save(vehiculo);
}


public void deleteVehiculo(Long id) {
	vehiculoRepositorio.deleteById(id);
}

}
