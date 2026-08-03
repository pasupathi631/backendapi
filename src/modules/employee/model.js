import db from "../../config/db.js"
import { update } from "./controller.js"


// insert data in table
export const postemployee = async (store) => {


    const data = await db.query(`INSERT INTO employees (

    emp_id,    
    emp_name,
    emp_email,
    emp_dob,
    emp_gender,
    emp_ph_no,
    emp_address,
    emp_emg_contact,
    emp_emg_phone,
    emp_bld_grp,
    emp_merit,
    emp_nationality,
    emp_language,
    emp_salary,
    emp_dept,
    emp_designation,
    emp_code,
    emp_status
    
    ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [store.emp_id, store.emp_name, store.emp_email,
        store.emp_dob, store.emp_gender, store.emp_ph_no,
        store.emp_address, store.emp_emg_contact,
        store.emp_emg_phone, store.emp_bld_grp,
        store.emp_merit, store.emp_nationality,
        store.emp_language, store.emp_salary, store.emp_dept,
        store.emp_designation, store.emp_code, store.emp_status || 'Active'
        ]

    )
    console.log(data)

    return data[0].insertId

    
}

// EMP INSER ID

export const employeid = async (body, empid) => {

    await db.query(`update employees set emp_code = ? where emp_id = ?`, [body, empid])
} 


// view table report
export const getreport = async () => {


    const data = await db.query(`select
        emp_id,
        emp_name, 
        emp_email,
        emp_ph_no,
        emp_dept, 
        emp_designation,
        emp_status from 
        employees`)

    return data[0]
}

// view specific id in a table use left join

export const getempid = async (store_2) => {
    
    const data = await db.query(`  select e.* ,
         d.dept_name, d.dept_code from employees e 
         left join departments d 
         ON e.emp_dept = d.dept_id where e.emp_id = ?`, 
        [store_2])

    return data[0][0]
}

// update
export const editempid = async (store_3) => {

    console.log(store_3)

    const data = await db.query(`UPDATE employees SET 
        emp_name = ?,
        emp_email = ?,
        emp_dob = ?,
        emp_gender = ?,
        emp_ph_no = ?,
        emp_address = ?,
        emp_emg_contact = ?,
        emp_emg_phone = ?,
        emp_bld_grp = ?,
        emp_merit = ?,
        emp_nationality = ?,
        emp_language = ?,
        emp_dept = ?,
        emp_salary = ?,
        emp_designation = ?,
        emp_status = ?
        
        WHERE emp_id = ? `,

        [store_3.emp_name, store_3.emp_email,
        store_3.emp_dob, store_3.emp_gender, store_3.emp_ph_no,
        store_3.emp_address, store_3.emp_emg_contact,
        store_3.emp_emg_phone, store_3.emp_bld_grp,
        store_3.emp_merit, store_3.emp_nationality,
        store_3.emp_language, store_3.emp_dept, store_3.emp_salary,
        store_3.emp_designation, store_3.emp_status, store_3.emp_id
        ]
    );


}

// search in table

export const postsearch = async (body) => {

    const data = await db.query(`select * from employees where emp_name like ? or emp_mail ?  `)
}