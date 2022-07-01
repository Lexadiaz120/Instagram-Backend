const getPool = require('./getPool')
require('dotenv').config
const populateDB = async () => {
  try {
    const pool = getPool()

    console.log('Insertando datos en tabla users...')

    await pool.query(
      `INSERT INTO users(username, email, passwd) VALUES 
            ("BATMENT", "musoratogeludi@gmail.com", 1324657), 
            ("SPIDERMAN", "ilikeflyes@gmail.com", 798465);
        `
    )

    console.log('Insertando datos en tabla en foto...')

    await pool.query(
      `INSERT INTO photo(name_photo, description_photo, user_id) VALUES 
            ("FirstOne", "Lorem ipsum12", 1), 
            ("SecondOne", "Lorem ipsum21", 2);
        `
    )

    console.log('Insertando datos en tabla en likes...')

    await pool.query(
      `INSERT INTO likes(user_id, photo_id) VALUES (1, 2), (2, 1), (1, 2), (2, 1);
        `
    )

    console.log('Insertando datos en tabla en comments...')

    await pool.query(
      `INSERT INTO comments(comments, user_id, photo_id) VALUES
                ("This is awesome photo", 1, 2), 
                ("I like it", 2, 1), 
                ("Lorem ipsum mit emet...", 1, 2);
        `
    )

    console.log('Dastos introducidos!')
  } catch (error) {
    console.error(error)
  } finally {
    process.exit()
  }
}

populateDB()
