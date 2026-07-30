export async function up(knex) {

    await knex.raw(

      ` CREATE TABLE leave (
    leave_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_id INT,
    leave_type VARCHAR(50),
    leave_from DATE,
    leave_to DATE,
    leave_days INT,
    leave_reason TEXT,
    leave_status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
    applied_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    approved_by INT,
    approved_date DATETIME )`
    )
        
    
    
}

export async function down(knex) {

    await knex.raw(
        `drop table if exists login`
    );


    
}