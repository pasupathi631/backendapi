import db from "../../config/db.js"


// insert table
export const postdept = async (body) => {
    

    await db.query(`
        INSERT INTO departments (dept_name, dept_code, dept_desc, dept_status)
        VALUES (?, ?, ?, ?)
    `, [
          body.dept_name, body.dept_desc, body.dept_status, body.dept_code 
    ]);

};

// update table

export const putdept = async (body) => {
    

    await db.query(`
        UPDATE departments
        SET dept_name = ?, dept_code = ?, dept_desc = ?, dept_status = ?
        WHERE dept_id = ?
    `, [
        body.dept_name, body.dept_code, body.dept_desc, body.dept_status, body.dept_id 
    ])

};

// view table

export const getview = async (limit, offset) => {

   const data = await db.query(`select * from departments order by dept_id limit ? offset ?`, [Number(limit), Number(offset)])

    return data[0];
}


// search in table

export const postsearch = async (body) => {
    
    const data = await db.query(`select * from departments where dept_name like ? or dept_code like ?`,

        [`${body.search }%`,`${body.search}% `]
    )
return data
}
