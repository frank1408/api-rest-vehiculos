<%@page contentType="text/html" pageEncoding="UTF-8" %>

<jsp:include page="arriba.jsp"></jsp:include>

<form autocomplete="on" method="post" action="/crear2">
Nombre: <input required autocomplete="on" type="text"      id="unombre"      name="unombre"     placeholder="nombre"     /><br/>
Apellido: <input required autocomplete="on" type="text"      id="uapellido"    name="uapellido"   placeholder="apellido"   /><br/>
Correo: <input required autocomplete="on" type="email"     id="ucorreo"      name="ucorreo"     placeholder="correo"     /><br/>
Telefono: <input required autocomplete="on" type="number"    id="utelefono"    name="utelefono"   placeholder="telefono"   /><br/>
Contraseña: <input required autocomplete="on" type="password"  id="ucontrasena"  name="ucontrasena" placeholder="contrasena" /><br/>
<input type="submit" value="Crear" onclick="crearUsuario()" />
</form>

<jsp:include page="abajo.jsp"></jsp:include>
