export async function up(knex) {

    await knex.raw(`CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_name VARCHAR(100),
    emp_email VARCHAR(100) UNIQUE,
    emp_dob DATE,
    emp_gender ENUM('Male', 'Female', 'Other'),
    emp_ph_no VARCHAR(15),
    emp_address TEXT,
    emp_emg_contact VARCHAR(100),
    emp_emg_phone VARCHAR(15),
    emp_bld_grp ENUM('A+','A-','B+','B-','AB+','AB-','O+','O-'),
    emp_merit BOOLEAN DEFAULT FALSE,
    emp_nationality VARCHAR(50),
    emp_language VARCHAR(100),
    emp_salary DECIMAL(10,2),
    emp_dept VARCHAR(100),
    emp_designation VARCHAR(100),
    emp_code VARCHAR(100),
    emp_status ENUM('Active', 'Inactive') DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);`)
    
}

export async function down(knex) {

    await knex.raw(
        `drop table if exists employees`
    );


    
}