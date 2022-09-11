const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const users = require('./api/user');
const NotesService = require('./services/postgres/NotesService');
const UsersService = require('./services/postgres/UsersService');
const NotesValidator = require('./validator/notes');
const UserValidator = require('./validator/user');
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

  await server.register([
    {
      plugin: notes,
      options: {
        service: notesService,
        validator: NotesValidator,
      },
    },
    {
      plugin: users,
      options: {
        service: new UsersService(),
        validator: UserValidator,
      },
    },
  ]);

  await server.start();

  console.log(`Server is running on ${server.info.uri}...`);
};

init();
