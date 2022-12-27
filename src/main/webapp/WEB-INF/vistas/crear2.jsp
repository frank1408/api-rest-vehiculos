
<%@page contentType="text/html" pageEncoding="UTF-8" %>

<jsp:include page="arriba.jsp"></jsp:include>

<h1>Usuario registrado !</h1>

<%
String elnombre = request.getParameter("unombre");
String elcorreo = request.getParameter("ucorreo");
%>

Hola <%= elnombre %><br/>
Tu correo registrado es <%= elcorreo %><br/>
Gracias por usar nuestros servicios !

<jsp:include page="abajo.jsp"></jsp:include>
