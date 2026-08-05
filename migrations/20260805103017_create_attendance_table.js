export async function up(){

    await knex.raw(`
        CREATE TABLE attendance (
    atten_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT,
    att_date DATE,
    att_in TIME,
    att_out TIME,
    att_status ENUM('Present', 'Absent', 'Half Day', 'Late') DEFAULT 'Present',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
        
);`)

    
}

export async function down(){

    await knex.raw(`drop table if exists attendance`)
}