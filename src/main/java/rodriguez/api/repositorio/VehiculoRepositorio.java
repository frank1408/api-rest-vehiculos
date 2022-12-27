package rodriguez.api.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import rodriguez.api.models.Vehiculo;

public interface VehiculoRepositorio extends JpaRepository<Vehiculo, Long> {
}
