import db from "../../config/db.js"
import { update } from "./controller.js"

export const postemployee = async (store) => {
    console.log(store)

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

export const getreport = async (store_1) => {
    console.log(store_1)

    const data = await db.query(`select 
        emp_name, 
        emp_email,
        emp_ph_no,
        emp_dept, 
        emp_desigation from 
        emplyoee`, [store_1])

    return data[0]
}

// view specific id in a table

export const getempid = async (view) => {
    console.log(view)

    const data = await db.query(`select * from emplyoee where employee_id = ?`, [view])
    console.log(data)
    return data[0]
}

// update
export const editempid = async (store_3) => {
    // console.log("store_3", store_3)

    // const data = await db.query(`UPDATE employee SET emp_name = ? WHERE employee_id = ? values(?)`, [store_3.emp_name])
    // console.log("error", store_3,body)


    // return data[0]
}