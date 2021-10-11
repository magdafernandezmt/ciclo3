function consultarInfo(){
    $.ajax({
        url: "https://g23c20be169bcd5-ciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: "GET",
        dataType: "json",
        success: function(respuesta){
            console.log(respuesta.items);
            alert('Conexion exitosa!')
            mostrarRespuesta(respuesta.items);
        },
        error: function(xhr,status){
            alert('Ha sucedido un problema');
        }
    });
}

function mostrarRespuesta(items){
    var tabla = `<table border = "1">
                    <tr>
                        <th>ID</th>
                        <th>BRAND</th>
                        <th>MODEL</th>
                        <th>CATEGORY_ID</th>
                        <th>NAME</th>
                        <th>ACCIONES</th>
                    </tr>`;

    for (var i=0; i < items.length; i++){
        tabla += `<tr>
                    <td>${items[i].id}</td>
                    <td>${items[i].brand}</td>
                    <td>${items[i].model}</td>
                    <td>${items[i].category_id}</td>
                    <td>${items[i].name}</td>
                    <td>
                        <button onclick="borrarInfo(${items[i].id})">Borrar</button>
                        <a href="detalle.html?id=${items[i].id}">Editar</a>
                    </td>
                    </tr>`;
    }

    tabla += `</table>`;

    $("#tabla").html(tabla);
}

