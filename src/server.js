const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NotesService = require('./services/inMemory/NotesService');

const init = async () => {
  const notesService = new NotesService();
  const config = {
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  };

  const server = Hapi.server(config);

  await server.register({
    plugin: notes,
    options: {
      service: notesService,
    },
  });

  await server.start();

  console.log(`Server is running on ${server.info.uri}...`);
};

init();
