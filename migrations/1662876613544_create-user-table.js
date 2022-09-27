/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('users', {
    id: {
      type: 'varchar(50)',
      primaryKey: true,
    },
    username: {
      type: 'varchar(50)',
      unique: true,
      notNull: true,
    },
    password: {
      type: 'text',
      notNull: true,
    },
<<<<<<< HEAD
    fullname: {
=======
    fullName: {
>>>>>>> 5e2e413b5de2072badc950ebe8638c85955c7180
      type: 'varchar(50)',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('users');
};
