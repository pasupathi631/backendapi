import db from "../../config/db.js"

export const postleave = async (body) => {

     await db.query(`INSERT INTO leavelist
(emp_id, emp_name, leave_type, leave_from, leave_to, leave_days, leave_reason, leave_status)
VALUES(?, ?, ?, ?, ?, ?, ?, ?)`, [
          body.emp_id,
          body.emp_name,
          body.leave_type,
          body.leave_from,
          body.leave_to,
          body.leave_days,
          body.leave_reason,
          body.leave_status || 'Pending'
     ])
}

export const getLeaveListModel = async () => {
const a= await db.query(`select * from leavelist`)
return a[0];
}

export const updateLeaveStatusModel = async (id, status) => {
     await db.query(`UPDATE leavelist SET leave_status = ? WHERE leave_id = ?`, [status, id])
}