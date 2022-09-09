class NotesHandler {
  constructor(service) {
    this._service = service;
  }

  postNoteHandler(request, h) {
    try {
      const { title = 'untitled', tags, body } = request.payload;

      const noteId = this._service.addNote({ title, tags, body });

      const response = h.response({
        status: 'success',
        message: 'Catatan berhasild ditambahkan',
        data: {
          noteId,
        },
      }).code(201);
      return response;
    } catch (error) {
      return h.response({
        status: 'fail',
        messsage: error.message,
      }).code(400);
    }
  }

  getNoteByIdHandler(request, h) {
    try {
      const { id } = request.params;

      const note = this._service.getNoteById(id);

      return {
        status: 'success',
        data: {
          note,
        },
      };
    } catch (error) {
      return h.response({
        status: 'fail',
        message: error.message,
      }).code(404);
    }
  }

  getNotesHandler() {
    const notes = this._service.getNotes();
    return {
      status: 'success',
      data: {
        notes,
      },
    };
  }

  //   putNoteByIdHandler(request, h) {
  //     try{
  //       const { id } = request.params;
  //     } catch(error) {

  //     }
  //   }

  deleteNoteByIdHandler() {

  }
}

module.exports = NotesHandler;
