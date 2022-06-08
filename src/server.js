const Hapi = require("@hapi/hapi")
const routes = require("./route")


const init = async () => {

    const config = {
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    }

    const server = Hapi.server(config)

    server.route(routes)

    await server.start()

    console.log(`Server is running on ${server.info.uri}...`)
}

init()