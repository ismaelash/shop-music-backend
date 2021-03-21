const postgres = require("postgres");
const Responses = require("./Responses");

module.exports.handler = async (event) => {
  const username = process.env.DB_USER;
  const password = process.env.DB_PASS;
  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT;
  const database = process.env.DB_DATABASE;
  const scheme = process.env.DB_SCHEME;
  const table = process.env.DB_TABLE_MUSIC;

  const connectionString = `postgres://${username}:${password}@${host}:${port}/${database}`;
  const postgreSQL = postgres(connectionString);

  try {
    const body = JSON.parse(event.body);
    await postgreSQL`INSERT INTO ${postgreSQL(scheme)}.${postgreSQL(table)} 
                                          ${postgreSQL(body, 'playlist_id', 'name', 'artist', 'url', 'duration', 'tag')}`;
    return Responses._200(body);
  } catch (err) {
    return Responses._400(err);
  }
};
