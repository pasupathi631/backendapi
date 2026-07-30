import db from "../../config/db.js"

export const postleave = async (body) => {

    const data = await db.query(`INSERT INTO leave
(emp_id, emp_name, leave_type, leave_from, leave_to, leave_days, leave_reason, leave_status)
VALUES(?, ?, ?, ?, ?, ?, ?, ?)`)
}