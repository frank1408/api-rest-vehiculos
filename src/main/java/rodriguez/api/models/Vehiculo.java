package rodriguez.api.models;

// javax o jakarta
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table( name = "vehiculo" )
@Getter @Setter
public class Vehiculo {

    public Vehiculo(){}

    @Id
    @Column(name = "id")
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private Long id;

    @Column(name = "capacidad_en_metros_cubicos", nullable = false )
    private Double capacidad_en_metros_cubicos;

    @Column(name = "consumo_de_combustibe_x_km", nullable = false )
    private Double consumo_de_combustibe_x_km;

    @Column(name = "distancia_x_recorrer_para_estar_disponible", unique=false, nullable = false )
    private Double distancia_x_recorrer_para_estar_disponible;

    @Column(name = "costo_depreciacion_x_km_recorrido", unique=false, nullable = false )
    private Double costo_depreciacion_x_km_recorrido;

    @Column(name = "km_recorridos", unique=false, nullable = false)
    private Double km_recorridos;

    @Column(name = "placa", nullable = false )
    private String placa;
    
} // public class Usuario
