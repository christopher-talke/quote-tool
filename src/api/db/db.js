const { createConnection, EntitySchema } = require("typeorm");
const { DB_VARIABLES } = require("../config/config");

// Entity Import
const PRODUCT = require("../entity/product");
const PROPOSAL = require("../entity/proposal");
const SECTION = require("../entity/section");

// Connection Setup
const connection = async () => {
  const db = await createConnection({
    type: "postgres",
    host: DB_VARIABLES.host,
    port: 5432,
    username: DB_VARIABLES.username,
    password: DB_VARIABLES.password,
    database: DB_VARIABLES.database,
    dropSchema: true,
    synchronize: true,
    entities: [
      new EntitySchema(PRODUCT),
      new EntitySchema(PROPOSAL),
      new EntitySchema(SECTION)
    ]
  });
  return db;
};

module.exports = connection;
