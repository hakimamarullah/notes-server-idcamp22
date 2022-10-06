const CollaborationsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'collaborations',
  version: '1.0.0',
  register: async (server, { collaborationsService, notesService, validator }) => {
    // eslint-disable-next-line max-len
    const collaborationsHandler = new CollaborationsHandler(collaborationsService, notesService, validator);
    server.route(routes(collaborationsHandler));
  },
};
