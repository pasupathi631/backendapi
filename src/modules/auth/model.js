import db from "../../config/db.js"

export const postsignup = async (store, hash) => {
    console.log(store)

    const data = await db.query(`insert into login(
username, email, pass)
values(?, ?, ?);`, [store.username, store.email, hash])

}

export const getdbpass = async (load) => {

    const local = await db.query(`SELECT * FROM login WHERE email = ? `,
        [load])


    return local[0][0].pass
}
