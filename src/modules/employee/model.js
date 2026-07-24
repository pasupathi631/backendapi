import db from "../../config/db.js"
import { update } from "./controller.js"


// insert data in table
export const postemployee = async (store) => {


    const data = await db.query(`insert into emplyoee (
        
        employee_id,
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
        emp_dept,
        emp_slary,
        emp_desigation
        ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [store.employee_id, store.emp_name, store.emp_email,
        store.emp_dob, store.emp_gender, store.emp_ph_no,
        store.emp_address, store.emp_emg_contact,
        store.emp_emg_phone, store.emp_bld_grp,
        store.emp_merit, store.emp_nationalit,
        store.emp_language, store.emp_dept, store.emp_slary,
        store.emp_desigation
        ]

    )

}


// view table report
export const getreport = async () => {


    const data = await db.query(`select 
        emp_name, 
        emp_email,
        emp_ph_no,
        emp_dept, 
        emp_desigation from 
        emplyoee`)

    return data[0]
}

// view specific id in a table

export const getempid = async (store_2) => {
    console.log(store_2)

    const data = await db.query(`select * from emplyoee where employee_id = ?`, [store_2])

    return data[0][0]
}

// update
export const editempid = async (store_3) => {
    console.log(store_3)

    const data = await db.query(`UPDATE emplyoee SET 

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
        emp_slary = ?,
        emp_desigation = ?
        WHERE employee_id = ? `,

        [store_3.emp_name, store_3.emp_email,
        store_3.emp_dob, store_3.emp_gender, store_3.emp_ph_no,
        store_3.emp_address, store_3.emp_emg_contact,
        store_3.emp_emg_phone, store_3.emp_bld_grp,
        store_3.emp_merit, store_3.emp_nationalit,
        store_3.emp_language, store_3.emp_dept, store_3.emp_slary,
        store_3.emp_desigation, store_3.employee_id,
        ]
    );

}