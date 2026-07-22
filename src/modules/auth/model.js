import db from "../../config/db.js"

export const postsignup = async (store) => {
    console.log(store)

    const data = await db.query(`insert into login(
username, email, pass)
values(?, ?, ?);`, [store.username, store.email, store.pass])

}