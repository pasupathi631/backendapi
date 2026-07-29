export async function up(knex) {

    await knex.raw(`create table if not exists departments ( dept_id int primary key auto_increment,
dept_name varchar(250),
dept_code varchar(20) unique,
dept_desc text,
dept_status boolean default true
);`
        
    )
    
}

export async function down(knex) {

    await knex.raw(
        `drop table if exists departments`
    );


    
}