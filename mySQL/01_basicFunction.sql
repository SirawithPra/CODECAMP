drop database matching_database;
use mysqltest;

create table persons(
	id int auto_increment,
    lastname varchar(255) not null,
	firstname varchar(255) not null,
    city varchar(255) default "LA",
    address varchar(255),
    -- registerDate date default GETDATE(),
    -- unique(id)
	-- constraint id_lastname_unique unique(id, lastname)
    primary key (id)
    -- constraint pk_id_lastname primary key (id,lastname)
	-- check (id>5)
);
alter table persons add (
	zip int default 20000,
    university varchar(255) default "Chulalongkorn"
);
create table orders(
	id int not null,
    order_no int not null,
    p_id int,
    primary key (id),
    foreign key (p_id) references persons(id)
    -- on delete no action
    -- on delete set null
    on delete cascade
);



drop table persons;
drop table orders;
