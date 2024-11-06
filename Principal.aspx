﻿<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Principal.aspx.vb" Inherits="SAPI_WEB_CT_Kiosko.Principal" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head runat="server">
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Treviño Leather</title>
	<link rel="shortcut icon" href="~/Images/logo_icono_CT_Blanco.png"/>
  <link rel="stylesheet" href="Menu_Style/style.css" />
  <script type="text/javascript" src="Menu_Js/app.js" defer="defer"></script>
</head>
<body>
  <nav id="sidebar">
    <ul>
      <li>
        <span class="logo">TREVIÑO LEATHER</span>
        <button onclick="toggleSidebar()" id="toggle-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z"/></svg>
        </button>
      </li>
      <li class="active">
        <a href="Principal.aspx">
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z"/></svg>
          <span>Inicio</span>
        </a>
      </li>
      <li>
        <a href="EscanerQR.aspx">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" x="0" y="0" viewBox="0 0 1000 1000" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M500 403.77a56.76 56.76 0 0 1-56.7-56.7 16 16 0 0 1 32 0 24.7 24.7 0 1 0 24.7-24.69 56.7 56.7 0 1 1 56.7-56.7 16 16 0 1 1-32 0 24.7 24.7 0 1 0-24.7 24.7 56.7 56.7 0 1 1 0 113.39z" fill="#ffffff" opacity="1" data-original="#000000" class=""></path><path d="M500 429a16 16 0 0 1-16-16v-25.23a16 16 0 0 1 32 0V413a16 16 0 0 1-16 16zM500 241a16 16 0 0 1-16-16v-25.23a16 16 0 1 1 32 0V225a16 16 0 0 1-16 16z" fill="#ffffff" opacity="1" data-original="#000000" class=""></path><path d="M500 475.37c-93.18 0-169-75.81-169-169s75.81-169 169-169 169 75.81 169 169-75.82 169-169 169zm0-306c-75.54 0-137 61.46-137 137s61.45 137 137 137 137-61.45 137-137-61.46-136.99-137-136.99z" fill="#ffffff" opacity="1" data-original="#000000" class=""></path><path d="M735.77 926a16 16 0 0 1-7.26-1.74L657.17 888l-71.33 36.31a16 16 0 0 1-14.52 0L500 888l-71.33 36.31a16 16 0 0 1-14.52 0L342.81 888l-71.33 36.31a16 16 0 0 1-14.52 0l-78.59-40a16 16 0 0 1-8.74-14.31V90a16 16 0 0 1 16-16h628.74a16 16 0 0 1 16 16v780a16 16 0 0 1-8.74 14.26l-78.6 40a16 16 0 0 1-7.26 1.74zm-78.6-72a16 16 0 0 1 7.26 1.74l71.34 36.31 62.6-31.86V106H201.63v754.19l62.59 31.86 71.33-36.31a16 16 0 0 1 14.52 0l71.33 36.31 71.33-36.31a16 16 0 0 1 14.52 0l71.33 36.31 71.33-36.31a16 16 0 0 1 7.26-1.74z" fill="#ffffff" opacity="1" data-original="#000000" class=""></path><path d="M730.53 584H269.47a16 16 0 0 1 0-32h461.06a16 16 0 0 1 0 32zM730.53 692.54H269.47a16 16 0 0 1 0-32h461.06a16 16 0 0 1 0 32zM730.53 801.12H269.47a16 16 0 0 1 0-32h461.06a16 16 0 0 1 0 32z" fill="#ffffff" opacity="1" data-original="#000000" class=""></path></g></svg>
          <span>Nominas</span>
        </a>
      </li>
      <li>
        <a href="Encuestas.aspx">
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="m221-313 142-142q12-12 28-11.5t28 12.5q11 12 11 28t-11 28L250-228q-12 12-28 12t-28-12l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l57 57Zm0-320 142-142q12-12 28-11.5t28 12.5q11 12 11 28t-11 28L250-548q-12 12-28 12t-28-12l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l57 57Zm339 353q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360h280q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280H560Zm0-320q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h280q17 0 28.5 11.5T880-640q0 17-11.5 28.5T840-600H560Z"/></svg>
          <span>Encuestas</span>
        </a>
      </li>
      <li>
        <a href="Vacaciones.aspx">
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
          <span>Vacaciones</span>
        </a>
      </li>
    </ul>
  </nav>
  <main>
    <div class="container">
      <h2>Hello World</h2>
      <p>Lorem, ipsum.</p>
    </div>
    <div class="container">
      <h2>Example Heading</h2>
      <p>Lorem, ipsum.</p>
    </div>
    <div class="container">
      <h2>Lorem Ipsum</h2>
      <p>Lorem, ipsum.</p>
    </div>
  </main>
</body>

</html>