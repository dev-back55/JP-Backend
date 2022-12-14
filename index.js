//? Junior Projects Developers *****
//const {initDb} = require('./initDb');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const PORT = process.env.PORT || 3001;

// linea 13 y 14 inician la base de datos
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, async () => {
    console.log(`Listening at port:${PORT} ...`); // eslint-disable-line no-console
      //await initDb();
      //console.log('DATABASE COMPLETE MIGRATE...');
  });
});