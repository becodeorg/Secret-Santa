// const Pool = require('pg').Pool

// const pool = new Pool({
//     user: 'postgres',
//     password: 'azerty123',
//     host: 'localhost',
//     port: 5432,
//     database: 'secretsanta'
// })

// app.get('/', async (req, res) => {
//     const client = new Client()
//     await client.connect()
//     const data = await client.query('SELECT * from public."secret-santa";')
//     res.send(data.rows);
//     await client.end()
// })

// module.exports = pool