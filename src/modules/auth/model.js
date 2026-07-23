import db from "../../config/db.js"

export const postsignup = async (store) => {
    console.log(store)

    const data = await db.query(`insert into login(
username, email, pass)
values(?, ?, ?);`, [store.username, store.email, store.pass])

}

export const verify = async (buff) => {
    console.log(buff)

    const local = await db.query(`SELECT * FROM login WHERE email = ? AND pass = ?`,
        [buff.email, buff.pass])

    return local[0]
}
