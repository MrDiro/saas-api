-- tablas cuenta

create table if not exists mod_administracion.cuenta (
	id serial not null primary key,
	codigo_hash varchar not null unique,
	cuenta_plan_id int not null,
	cuenta_estado_id int not null,
	epayco_customer_id varchar not null unique,
	epayco_email varchar,
	fecha_edicion timestamptz,
	fecha_creacion timestamptz default now(),
	eliminado boolean default false
);

create table if not exists mod_administracion.cuenta_suscripcion (
	id serial not null primary key,
	cuenta_id int not null,
	epayco_subcripcion_id varchar not null unique,
	epayco_plan_id varchar not null,
	epayco_estado varchar,
	fecha_inicio timestamptz,
	fecha_renovacion timestamptz,
	cancelada boolean default false,
	fecha_creacion timestamptz default now(),
	eliminado boolean default false
);

create table if not exists mod_administracion.cuenta_pago_suscipcion (
	id serial not null primary key,
	cuenta_suscripcion_id int not null,
	epayco_ref varchar not null unique,
	epayco_transaction_id varchar,
	epayco_estado varchar,
	monto_pagado numeric(10, 2),
	moneda varchar default 'COP',
	metodo_pago varchar,
	fecha_pago timestamptz,
	fecha_creacion timestamptz default now()
);

create table if not exists mod_administracion.rel_cuenta_plan_modulo (
	id serial not null primary key,
	cuenta_plan_id int not null,
	modulo_id int not null,
	fecha_creacion timestamptz default now()
);

-- tablas empresa
create table if not exists mod_administracion.empresa_estado (
	id serial not null primary key,
	sigla varchar unique,
	nombre varchar not null,
	fecha_creacion timestamptz default now(),
	eliminado boolean default false
);

create table if not exists mod_administracion.empresa (
	id serial not null primary key,
	cuenta_id int not null,
	nombre varchar not null unique,
	nit varchar,
	razon_social varchar,
	correo varchar,
	sitio_web varchar,
	empresa_estado_id int not null,
	fecha_edicion timestamptz,
	fecha_creacion timestamptz default now(),
	editado_por int,
	creado_por int,
	eliminado boolean default false
);

create table if not exists mod_administracion.empresa_sede (
	id serial not null primary key,
	empresa_id int not null,
	nombre varchar not null,
	direccion varchar,
	pais_ubicacion_id int,
	ciudad_ubicacion_id int,
	telefono varchar,
	es_principal boolean default false,
	fecha_edicion timestamptz,
	fecha_creacion timestamptz default now(),
	editado_por int,
	creado_por int,
	eliminado boolean default false
);

-- tablas persona
create table if not exists mod_administracion.persona_tipo_documento(
	id serial not null primary key,
	sigla varchar unique,
	nombre varchar not null,
	fecha_creacion timestamptz default now(),
	eliminado boolean default false
);

create table if not exists mod_administracion.persona_genero(
	id serial not null primary key,
	sigla varchar unique,
	nombre varchar not null,
	fecha_creacion timestamptz default now(),
	eliminado boolean default false
);

create table if not exists mod_administracion.persona(
	id serial not null primary key,
	nombre varchar not null,
	apellidos varchar not null,
	persona_tipo_documento_id int not null,
	numero_documento varchar not null,
	fecha_nacimiento date not null,
	persona_genero_id int not null,
	telefono varchar,
	direccion varchar,
	pais_ubicacion_id int not null,
	ciudad_ubicacion_id int not null,
	correo varchar not null unique,
	fecha_edicion timestamptz,
	fecha_creacion timestamptz default now(),
	editado_por int,
	creado_por int,
	eliminado bool default false
);

-- tablas usuario
create table if not exists mod_administracion.usuario_estado(
	id serial not null primary key,
	sigla varchar unique,
	nombre varchar not null,
	fecha_creacion timestamptz default now(),
	eliminado boolean default false
);

create table if not exists mod_administracion.usuario_tipo (
  id serial not null primary key,
  sigla varchar unique,
  nombre varchar not null,
	fecha_creacion timestamptz default now(),
	eliminado boolean default false
);

create table if not exists mod_administracion.usuario (
	id serial not null primary key,
	cuenta_id int,
	alias varchar not null unique,
	clave text not null,
	persona_id int,
	estado_id int not null,
	tipo_id int not null,
	correo_fecha_verificacion timestamptz,
	acepta_terminos boolean,
	acepta_marketing boolean,
	intentos_fallidos int default 0,
	bloqueo_hasta timestamptz,
	ultimo_login timestamptz,
	ip_ultimo_login inet,
	agente_ultimo_login text,
	token_recuperacion text,
	token_expira timestamptz,
	es_titular_cuenta boolean default false,
	es_admin boolean default false,
	tiene_2fa boolean default false,
	fecha_edicion timestamptz,
	fecha_creacion timestamptz default now(),
	editado_por int,
	creado_por int,
	eliminado boolean default false
);

create table if not exists mod_administracion.rel_usaurio_empresa (
	id serial not null primary key,
	usuario_id int not null,
	empresa_id int not null,
	fecha_creacion timestamptz default now()
);

-- tablas rol
create table if not exists mod_administracion.rol (
	id serial not null primary key,
	cuenta_id int not null,
	nombre varchar not null,
	fecha_edicion timestamptz,
	fecha_creacion timestamptz default now(),
	editado_por int,
	creado_por int,
	eliminado boolean default false
);

create table if not exists mod_administracion.rel_rol_usuario (
	id serial not null primary key,
	rol_id int not null,
	usuario_id int not null,
	fecha_creacion timestamptz default now()
);

create table if not exists mod_administracion.rel_rol_acceso (
	id serial not null primary key,
	rol_id int not null,
	acceso_id int not null,
	fecha_creacion timestamptz default now()
);

create table if not exists mod_administracion.rel_rol_acceso_permiso (
	id serial not null primary key,
	rel_rol_acceso_id int not null,
	permiso_id int not null,
	fecha_creacion timestamptz default now()
);
