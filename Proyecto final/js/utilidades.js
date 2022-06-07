function logearUsuario() {

    var correo = document.getElementById("correo").value;
    var password = document.getElementById("password").value;
  
    if ((correo == "cliente1@gmail.com" && password == "cliente1") 
     || (correo == "cliente2@gmail.com" && password == "cliente2") 
     || (correo == "cliente3@gmail.com" && password == "cliente3")) {
        window.location.href = "catalogo.html";
    } 
    else if (correo == "vendedor@gmail.com" && password =="vendedor1") {
        window.location.href = "menu_vendedor.html";
    } 
    else if (correo == "secretaria@gmail.com" && password =="secretaria1") {
        window.location.href = "seguimiento_cliente.html";
    } 
    else if (correo == "administrador@gmail.com" && password =="administrador1") {
        window.location.href = "menu_administrador.html";
    } 
    else if (correo == "gerente@gmail.com" && password =="gerente1") {
        window.location.href = "menu_gerente.html";
    } 
    else {
        alert("Usuario o contraseña errados");
    }
       
}

function crearTag(tag) {

    var tagHTML = document.createElement(tag); 
    return tagHTML;
}


function crearTagConTexto(tag,texto) {

    var tagHTML = crearTag(tag); 
    var elementoTexto = document.
                    createTextNode(texto)
    tagHTML.appendChild(elementoTexto);
    return tagHTML;

}

function crearTagA(texto,url) {

    var tagHTML = crearTagConTexto("a",texto);
    tagHTML.href = url;
    return tagHTML;

}

function crearTagImagen(path) {

    var tagHTML = document.createElement("img"); 
    tagHTML.src = path;
    return tagHTML;
}

function adicionarBody(elemento) {
    document.body.appendChild(elemento);
}

function agregarTelefono() {

    var telefono = document.
    getElementById("telefono");
    var telefonoTexto = telefono.value; 

    var telefonos = document.
    getElementById("telefonos");

    var li = crearTagConTexto("li",telefonoTexto);
    telefonos.appendChild(li);
    telefono.value= "";
    telefono.focus();
}

function registrar() {

    var registro = document.
    getElementById("registro")

    alert("El usuario ha sido registrado")



    registro.value = "";
    
}


function adicionarGestionCompra() {
    var codigo = document.getElementById("codigo").value;
    var producto = document.getElementById("productos").value;
    var preciounitario = document.getElementById("preciounitario").value;
    var cantidades = document.getElementById("cantidades").value;
    var proveedor = document.getElementById("proveedor").value;
    var fechaCompra = document.getElementById("fechaCompra").value;


    var valorCompra = parseInt(preciounitario) * parseInt(cantidades);
    var tabla = document.getElementById("listaCompra");
    var tagTR = crearTag("tr");
    
    var tagTD = crearTagConTexto("td", codigo);
    var tagTD2 = crearTagConTexto("td", producto);
    var tagTD3 = crearTagConTexto("td", preciounitario);
    var tagTD4 = crearTagConTexto("td", cantidades);
    var tagTD5 = crearTagConTexto("td", proveedor);
    var tagTD6 = crearTagConTexto("td", fechaCompra);
    var tagTD7 = crearTagConTexto("td", valorCompra);

    agregarElementoContenedor(tagTR, tagTD);
    agregarElementoContenedor(tagTR, tagTD2);
    agregarElementoContenedor(tagTR, tagTD3);
    agregarElementoContenedor(tagTR, tagTD4);
    agregarElementoContenedor(tagTR, tagTD5);
    agregarElementoContenedor(tagTR, tagTD6);
    agregarElementoContenedor(tagTR, tagTD7);
    agregarElementoContenedor(tabla, tagTR);
}
function comprar() {

    var compra = document.
    getElementById("comprar")

    alert("Se a realizado la compra correctamente")



    compra.value = "";
    
}

// Funcionalidades
validarDatos =(textProducto, textPrecio, textCantidad)=>{

    let bool = (textProducto.trim() === '') || (textPrecio === '') || (textCantidad==='')

    if(bool){
        return false
    }else{
        return true
    }

}

adicionarElementoTabla =(producto,precioUnitario,cantidad)=>{

    document.getElementById("tftable").innerHTML += `
        <tr>
            <td>${producto}</td>
            <td>${parseFloat(precioUnitario)}</td>
            <td>${parseInt(cantidad)}</td>
            <td>${precioUnitario*cantidad}</td>
        </tr>
    `;

}

adicionarDatos = () =>{

    let texProduct = document.getElementById('producto').value
    let texPrecio = document.getElementById('precio').value
    let texCantidad = document.getElementById('cantidad').value

        if(validarDatos(texProduct,texPrecio,texCantidad)){
            
            adicionarElementoTabla(texProduct,texPrecio,texCantidad)

            document.getElementById('producto').value = ''
            document.getElementById('producto').focus()
            document.getElementById('precio').value = ''
            document.getElementById('cantidad').value = ''

        } else{
            alert('Hay ampos vacios')
        }

}

    