Create table pessoa (id serial primary key, 
tipo varchar, 
nome varchar, 
senha varchar, 
bairro varchar,
email varchar,
cidade int,
FOREIGN KEY (cidade) REFERENCES cidade (id));

create table cidade (id serial primary key, 
nome varchar, 
estado varchar, 
pais varchar,
cep varchar
);

create table lixeira (id serial primary key,
nome varchar,
situacao varchar,
ip VARCHAR(45),
latitude DECIMAL(9,6),
longitude DECIMAL(9,6));


create table grupo (id serial primary key, pessoa int, lixeira int,
FOREIGN KEY (pessoa) REFERENCES pessoa (id),
FOREIGN KEY (lixeira) REFERENCES lixeira (id)
)