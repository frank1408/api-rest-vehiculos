
<%@page contentType="text/html" pageEncoding="UTF-8" %>

<jsp:include page="arriba.jsp"></jsp:include>

<input required autocomplete="on" type="text" id="uid" placeholder="id numeric value"  />
<button onclick="cargarUsuario()">
Mostrar Usuario
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
