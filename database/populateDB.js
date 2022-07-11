const getPool = require('./getPool')
require('dotenv').config
const populateDB = async () => {
  try {
    const pool = getPool()

    console.log('Insertando datos en tabla users...')

    await pool.query(
      `INSERT INTO users(username, email, passwd, avatar) VALUES 
            ("BATMENT", "musoratogeludi@gmail.com", 1324657, "0dc87ba7-f333-4648-8618-d2e5f3409d7a.jpeg"), 
            ("SPIDERMAN", "ilikeflyes@gmail.com", 798465, "03eca1d9-83da-41ed-be5f-fd05617e9521.jpeg");
        `
    )

    console.log('Insertando datos en tabla en foto...')

    await pool.query(
      `INSERT INTO photo(name_photo, description_photo, user_id) VALUES 
            ("03eca1d9-83da-41ed-be5f-fd05617e9521.jpeg", "Lorem ipsum12", 1), 
            ("03eca1d9-83da-41ed-be5f-fd05617e9521.jpeg", "Lorem ipsum21", 2);
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
