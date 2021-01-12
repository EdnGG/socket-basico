const { io } = require('../server')

io.on('connection', (client)=> {
    console.log('Usuario conectado')
    // console.log(client)

    client.emit('enviarMensaje', {
            usario: 'Administrador',
            mensaje: 'Bienvenido a esta app'
        })

    client.on('disconnect', ()=> {
        // console.log('Usuario desconectado')
    })

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback)=> {
        console.log(data)
        // lo dejamos asi porque tiene la misma estructura
        // del objeto de respuesta
        //  "broadcast" es enviar mensaje a todos
        client.broadcast.emit('enviarMensaje', data)


        // if(mensaje.usuario){
        // callback({
        //     resp: 'TODO SALIO BIEN'
        // })

        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL'
        //     })
        // }


    })
})