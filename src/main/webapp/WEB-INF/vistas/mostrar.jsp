<%@page contentType="text/html" pageEncoding="UTF-8" %>

<jsp:include page="arriba.jsp"></jsp:include>

<button onclick="cargarUsuarios()">
Mostrar Usuarios
</button>

<table id="tusuario">
<thead>
<tr>
<th>Id</th>
<th>Nombre y apellido</th>
<th>Correo</th>
<th>Telefono</th>
<th>Opciones</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

<jsp:include page="abajo.jsp"></jsp:include>
