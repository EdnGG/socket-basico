var socket = io()

    socket.on('connect', function(){
        // console.log('Conectado al servidor')

    })

    // Escuchar eventos, sucesos
    socket.on('disconnect', function(){  
        console.log('perdimos conexion con el servidor')  
    })

    //  Enviar (emitir) informacion
    socket.emit('enviarMensaje', { 
        usuario: 'Eden',
        mensaje: 'Hello World'
    }, function( resp ){
        console.log('Respuesta server: ', resp)
    })

    // Escuchar Info
    socket.on('enviarMensaje', function(resp){
        console.log('Servidor: ',  resp)
    })