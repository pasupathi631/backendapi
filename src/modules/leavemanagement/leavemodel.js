import db from "../../config/db.js"

export const postleave = async (body) => {

     await db.query(`INSERT INTO leave_manage
         (emp_id, leave_type, leave_from, leave_to, leave_from_time, leave_to_time, leave_days, leave_reason, leave_status)
          VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
          body.emp_id,
          body.leave_type,
          body.leave_from,
          body.leave_to,
          body.leave_from_time,
          body.leave_to_time,
          body.leave_days,
          body.leave_reason,
          body.leave_status || 'Pending'
     ])
}

// view leave list add empployee id, employee name and left join with employee table

export const getLeaveListModel = async (body) => {
     const rows = await db.query(`SELECT l.*, e.emp_name FROM leave_manage l left join employees e ON l.emp_id = e.emp_id`)
     return rows[0]
}

// update leave status

export const updateLeaveStatusModel = async (id, status) => {
     await db.query(`UPDATE leave_manage SET leave_status = ? WHERE leave_id = ?`, [status, id])
}

// leave dashboard total submission, approved leaves, pending leaves, rejected leaves, cancel leaves

export const getDashboardCardsModel = async () => {
      const rows = await db.query(`select count(*) as total_submissions,
      sum(case when leave_status = 'Approved' then 1 else 0 end) as approved_leaves,
      sum(case when leave_status = 'Pending' then 1 else 0 end) as pending_leaves,
      sum(case when leave_status = 'Rejected' then 1 else 0 end) as rejected_leaves,
      sum(case when leave_status = 'Cancelled' then 1 else 0 end) as cancelled_leaves
      from leave_manage`)
      return rows[0][0]


}

// Get leave allowance for an employee

export const getLeaveAllowanceModel = async (emp_id) => {

     console.log("emp_id", emp_id)

    const rows = await db.query(`
        SELECT
            leave_type,

            CASE
                WHEN leave_type = 'Casual Leave (CL)' THEN 12
                WHEN leave_type = 'Sick Leave (SL)' THEN 12
                WHEN leave_type = 'Privilege Leave (PL)' THEN 20
                WHEN leave_type = 'Maternity Leave (ML)' THEN 90
            END AS total_days,

            SUM(leave_days) AS used_days,

            CASE
                WHEN leave_type = 'Casual Leave (CL)' THEN 12 - SUM(leave_days)
                WHEN leave_type = 'Sick Leave (SL)' THEN 12 - SUM(leave_days)
                WHEN leave_type = 'Privilege Leave (PL)' THEN 20 - SUM(leave_days)
                WHEN leave_type = 'Maternity Leave (ML)' THEN 90 - SUM(leave_days)
            END AS remaining_days

        FROM leave_manage   
        WHERE emp_id = ?
        AND leave_status = 'Approved'
        GROUP BY leave_type
    `, [emp_id])

    return rows[0]
};

export const postPermission = async (body) => {
   
  await db.query(`
    INSERT INTO permission_manage
    (emp_id, permission_date, from_time, to_time, duration, reason, status)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `, [
    body.emp_id,
    body.permission_date,
    body.from_time,
    body.to_time,
    body.duration,
    body.reason,
    body.status || 'Pending'
  ]);
};

export const getPermissionListModel = async (emp_id) => {
  const rows = await db.query(`
    SELECT 
      permission_id AS id,
      emp_id,
      permission_date AS date,
      from_time AS fromTime,
      to_time AS toTime,
      duration,
      reason,
      status,
      applied_date
    FROM permission_manage
    WHERE emp_id = ?
    ORDER BY permission_date DESC, applied_date DESC
  `, [emp_id]);
  return rows[0];
};

export const updatePermissionStatusModel = async (body) => {
  await db.query(`
    UPDATE permission_manage 
    SET status = ? 
    WHERE permission_id = ?
  `, [body.status, body.permission_id]);
};

export const deletePermissionModel = async (body) => {
  await db.query(`
    DELETE FROM permission_manage 
    WHERE permission_id = ?
  `, [body.permission_id]);
};

// getview list all data in table

export const getallview = async (body) => {
  const rows = await db.query(`
    SELECT * FROM permission_manage
  `);
  return rows[0];
};
