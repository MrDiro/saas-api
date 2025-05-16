insert into mod_administracion.cuenta_estado ("nombre") values
('Activa'),
('Suspendida'),
('Cancelada'),
('Pendiente');

INSERT INTO mod_administracion.cuenta_plan ("nombre", "precio_mensual", "limite_usuarios", "permite_api", "permite_soporte") VALUES
('Gratis', 0.00, 1, FALSE, FALSE),
('Estandar', 19.99, 5, TRUE, FALSE),
('Profesional', 99.99, 50, TRUE, TRUE),
('Empresarial', 0.00, NULL, TRUE, TRUE);

insert into mod_administracion.empresa_estado ("nombre") values 
('Pendiente'),
('Activa'),
('Inactiva');

insert into mod_administracion.persona_tipo_documento ("nombre") values 
('Registro Civil de Nacimiento'),
('Tarjeta de Identidad'),
('Cédula de Ciudadanía'),
('Tarjeta de Extranjería'),
('Cédula de Extranjería'),
('Pasaporte (PP)'),
( 'Permiso Especial de Permanencia (PEP)');

insert into mod_administracion.persona_genero ("nombre") values 
('Masculino'),
('Femenino'),
('Otro');

insert into mod_administracion.usuario_estado ("nombre") values 
('Activo'),
('Inactivo'),
('Pendiente de verificación'),
('Bloqueado');

insert into mod_administracion.usuario_tipo ("nombre") values 
('Cliente'),
('Interno');
