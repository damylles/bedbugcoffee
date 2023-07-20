const { Pool } = require('pg');

const DB_NAME = 'bed-bug-coffee';
const connectionString =
  process.env.DATABASE_URL || `postgres://localhost:5432/${DB_NAME}`;

const client = new Pool({
  connectionString,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : undefined,
});

module.exports = client;
