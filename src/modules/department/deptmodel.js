import db from "../../config/db.js"



export const postdept = async (body) => {
    

    const result = await db.query(`
        INSERT INTO departments (dept_name, dept_code, dept_desc, dept_status)
        VALUES (?, ?, ?, ?)
    `, [
          body.dept_name, body.dept_desc, body.dept_status, body.dept_code 
    ]);

};

export const putdept = async (body) => {
    

    await db.query(`
        UPDATE departments
        SET dept_name = ?, dept_desc = ?, dept_status = ?
        WHERE dept_code = ?
    `, [
        body.dept_name, body.dept_desc, body.dept_status, body.dept_code 
    ])

};

