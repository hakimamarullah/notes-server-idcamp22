const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NotesService = require('./services/postgres/NotesService');
const NotesValidator = require('./validator/notes');
require('dotenv').config();

const init = async () => {
  const notesService = new NotesService();
  const config = {
    port: process.env.PORT,
    host: process.env.HOST,
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
      validator: NotesValidator,
    },
  });

  await server.start();

  console.log(`Server is running on ${server.info.uri}...`);
};

init();
