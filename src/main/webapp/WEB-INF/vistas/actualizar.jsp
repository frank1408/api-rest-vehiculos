<%@page contentType="text/html" pageEncoding="UTF-8" %>

<jsp:include page="arriba.jsp"></jsp:include>

<form autocomplete="on" method="put" action="/actualizar2">
Nombre:     <input required autocomplete="on" type="text"      id="unombre"      name="unombre"     placeholder="nombre"     /><br/>
Apellido:   <input required autocomplete="on" type="text"      id="uapellido"    name="uapellido"   placeholder="apellido"   /><br/>
Telefono:   <input required autocomplete="on" type="number"    id="utelefono"    name="utelefono"   placeholder="telefono"   /><br/>
<input type="submit" value="Crear" onclick="actualizarUsuario()" />
</form>

<jsp:include page="abajo.jsp"></jsp:include>
