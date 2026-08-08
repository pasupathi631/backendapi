import db from "../../config/db.js"

// single employee id insert and update attendance

export const attendanceCheck = async (body) => {

     console.log("check", body)

    const checkrow = await db.query(`select * from attendance where emp_id = ? AND att_date = CURDATE()`, [body])


    return checkrow[0]
}


export const updateAttendance = async (body) => {

    console.log("update", body)

       await db.query(
            `update attendance SET att_out = CURTIME() where emp_id = ?`, [body]
        )
}
      
    
export const insertAttendance = async (body) =>{

     console.log("insert", body)

    await db.query(`insert into attendance (emp_id, att_date, att_in, att_status)
            values (?, CURDATE(), CURTIME(), 'Present')`, [body])
}
   
        
    

