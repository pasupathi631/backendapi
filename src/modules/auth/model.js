import db from "../../config/db.js"

export const postsignup = async (store) => {
    console.log(store)

    const data = await db.query(`insert into login(
username, email, pass)
values(?, ?, ?);`, [store.username, store.email, store.pass])

}

export const getdbpass = async (load) => {
    console.log(load)

    const local = await db.query(`SELECT * FROM login WHERE email = ? `,
        [load])
        console.log("hello", local)

    return local[0][0].pass
}
