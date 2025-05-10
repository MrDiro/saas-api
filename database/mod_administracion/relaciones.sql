alter table mod_administracion.cuenta
add constraint cuenta_plan_id_fk foreign key (cuenta_plan_id) references mod_administracion.cuenta_plan(id),
add constraint cuenta_estado_id_fk foreign key (cuenta_estado_id) references mod_administracion.cuenta_estado(id);

alter table mod_administracion.cuenta_suscripcion
add constraint cuenta_id_fk foreign key (cuenta_id) references mod_administracion.cuenta(id);

alter table mod_administracion.cuenta_pago_suscipcion
add constraint cuenta_suscripcion_id_fk foreign key (cuenta_suscripcion_id) references mod_administracion.cuenta_suscripcion(id);

alter table mod_administracion.rel_cuenta_plan_modulo
add constraint cuenta_plan_id_fk foreign key(cuenta_plan_id) references mod_administracion.cuenta_plan(id),
add constraint modulo_id_fk foreign key(modulo_id) references mod_sistema.modulo(id);

alter table mod_administracion.empresa 
add constraint cuenta_id_fk foreign key (cuenta_id) references mod_administracion.cuenta(id),
add constraint empresa_estado_id_fk foreign key (empresa_estado_id) references mod_administracion.empresa_estado(id);

alter table mod_administracion.empresa_sede
add constraint empresa_id_fk foreign key (empresa_id) references mod_administracion.empresa(id),
add constraint pais_ubicacion_id_fk foreign key(pais_ubicacion_id) references mod_sistema.ubicacion(id),
add constraint ciudad_ubicacion_id_fk foreign key(ciudad_ubicacion_id) references mod_sistema.ubicacion(id);

alter table mod_administracion.persona 
add constraint persona_tipo_documento_id_fk foreign key (persona_tipo_documento_id) references mod_administracion.persona_tipo_documento(id),
add constraint persona_genero_id_fk foreign key (persona_genero_id) references mod_administracion.persona_genero(id),
add constraint pais_ubicacion_id_fk foreign key (pais_ubicacion_id) references mod_sistema.ubicacion(id),
add constraint ciudad_ubicacion_id_fk foreign key (ciudad_ubicacion_id) references mod_sistema.ubicacion(id);

alter table mod_administracion.usuario
add constraint cuenta_id_fk foreign key (cuenta_id) references mod_administracion.cuenta(id),
add constraint persona_id_fk foreign key (persona_id) references mod_administracion.persona(id),
add constraint usuario_estado_id_fk foreign key (usuario_estado_id) references mod_administracion.usuario_estado(id),
add constraint usuario_tipo_id_fk foreign key (usuario_tipo_id) references mod_administracion.usuario_tipo(id);

alter table mod_administracion.rel_usaurio_empresa
add constraint usuario_id_fk foreign key (usuario_id) references mod_administracion.usuario(id),
add constraint empresa_id_fk foreign key (empresa_id) references mod_administracion.empresa(id);

alter table mod_administracion.rol
add constraint cuenta_id foreign key (cuenta_id) references mod_administracion.cuenta(id);

alter table mod_administracion.rel_rol_usuario 
add constraint rol_id_fk foreign key (rol_id) references mod_administracion.rol(id),
add constraint usuario_id_fk foreign key (usuario_id) references mod_administracion.usuario(id);

alter table mod_administracion.rel_rol_acceso
add constraint rol_id_fk foreign key (rol_id) references mod_administracion.rol(id),
add constraint acceso_id_fk foreign key (acceso_id) references mod_sistema.acceso(id);

alter table mod_administracion.rel_rol_acceso_permiso
add constraint rel_rol_acceso_id_fk foreign key (rel_rol_acceso_id) references mod_administracion.rel_rol_acceso(id),
add constraint permiso_id_fk foreign key (permiso_id) references mod_sistema.permiso(id);
