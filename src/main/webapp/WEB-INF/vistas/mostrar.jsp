<%@page contentType="text/html" pageEncoding="UTF-8" %>

<jsp:include page="arriba.jsp"></jsp:include>

<button onclick="cargarVehiculos()">
Mostrar Usuarios
</button>

<table id="tusuario">
<thead>
<tr>
<th>id</th>
<th>placa</th>
<th>capacidad_en_metros_cubicos</th>
<th>consumo_de_combustibe_x_km</th>
<th>distancia_x_recorrer_para_estar_disponible</th>
<th>costo_depreciacion_x_km_recorrido</th>
<th>km_recorridos</th>
<th>ubicacion_actual</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<jsp:include page="abajo.jsp"></jsp:include>
