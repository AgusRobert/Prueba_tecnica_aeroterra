const server = require("./src/app.js");
const { conn } = require("./src/db.js");

conn.sync({ force: false }).then(async () => {
  server.listen(3001, () => {
    console.log("%s atendiendo puerto -> 3001");
  });
});
