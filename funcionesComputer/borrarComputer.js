function borrarInfo(identificador) {
    console.log("Ejecutando la funcion borrar");

    let datos = {
        id: +identificador
    };
    console.log(datos);

    $.ajax({
        url: "https://g23c20be169bcd5-ciclo3.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(datos),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el computador');
            }
        },
    });
}