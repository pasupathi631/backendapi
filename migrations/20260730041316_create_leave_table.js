export async function up(knex) {

    await knex.raw(

  ` CREATE TABLE leave_manage (
    leave_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_id INT,    
    emp_name VARCHAR(100),


    leave_type VARCHAR(50),

    leave_from DATE,
    leave_to DATE,

    leave_from_time TIME,
    leave_to_time TIME,

    leave_days INT,
    leave_reason TEXT,

    leave_status ENUM('Pending', 'Approved', 'Rejected', 'Cancelled') DEFAULT 'Pending',

    applied_date DATETIME DEFAULT CURRENT_TIMESTAMP,

    approved_by INT,
    approved_date DATETIME)`
);

await knex.raw(
  ` CREATE TABLE permission_manage (
    permission_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_id INT,
    emp_name VARCHAR(100),


    permission_date DATE,
    from_time TIME,
    to_time TIME,

    duration FLOAT,
    reason TEXT,

    status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
    
    applied_date DATETIME DEFAULT CURRENT_TIMESTAMP)`
);
    
    
}


export async function down(knex) {

    await knex.raw(
        `drop table if exists permission_manage`
    );

    await knex.raw(     
        `drop table if exists leave_manage`
    );


    
}

