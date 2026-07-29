export async function up(knex) {

    await knex.raw(`create table login (id int primary key auto_increment not null, 
username varchar(30) not null,
email varchar(250) unique not null, 
pass varchar(250) not null);`
        
    )
    
}

export async function down(knex) {

    await knex.raw(
        `drop table if exists login`
    );


    
}