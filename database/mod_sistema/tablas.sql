create table if not exists mod_sistema.rel_acceso (
   id serial not null primary key,
   acceso_id int not null,
   acceso_id_dep int not null,
   fecha_creacion timestamptz default now(),
   eliminado boolean default false
);

-- tablas permiso
create table if not exists mod_sistema.permiso_tipo (
   id serial not null primary key,
   sigla varchar unique,
   nombre varchar not null,
	fecha_creacion timestamptz default now(),
	eliminado boolean default false
);

create table if not exists mod_sistema.permiso (
	id serial not null primary key,
	sigla varchar not null unique,
   acceso_id int not null,
   permiso_tipo_id int not null,
	fecha_creacion timestamptz default now(),
	eliminado boolean default false
);

-- tablas ubicacion
create table if not exists mod_sistema.ubicacion_tipo (
   id serial not null primary key,
   sigla varchar unique,
   nombre varchar not null,
   fecha_creacion timestamptz default now(),
   eliminado boolean default false
);

create table if not exists mod_sistema.ubicacion (
	id serial not null primary key,
   sigla varchar unique,
	nombre varchar not null,
	ubicacion_tipo_id int not null,
	fecha_creacion timestamptz default now(),
	eliminado bool default false
);

create table if not exists mod_sistema.rel_ubicacion (
   id serial not null primary key,
   ubicacion_id int not null,
   ubicacion_id_dep int not null,
   fecha_creacion timestamptz default now(),
   eliminado boolean default false
);