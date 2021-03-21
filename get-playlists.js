const postgres = require("postgres");
const Responses = require("./Responses");
module.exports.handler = async (event) => {
  const username = process.env.DB_USER;
  const password = process.env.DB_PASS;
  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT;
  const database = process.env.DB_DATABASE;
  const scheme = process.env.DB_SCHEME;
  const table = process.env.DB_TABLE_PLAYLIST;

  const connectionString = `postgres://${username}:${password}@${host}:${port}/${database}`;
  const postgreSQL = postgres(connectionString);

  try {
    console.log(event);
    const sqlResult = await postgreSQL`SELECT * FROM ${postgreSQL(scheme)}.${postgreSQL(table)};`;
    return Responses._200(sqlResult);
  } catch (err) {
    return Responses._400(err);
  }
};
