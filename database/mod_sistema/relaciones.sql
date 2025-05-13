alter table mod_sistema.rel_acceso
add constraint acceso_id_fk foreign key (acceso_id) references mod_sistema.acceso(id),
add constraint acceso_id_dep_fk foreign key (acceso_id_dep) references mod_sistema.acceso(id);

alter table mod_sistema.permiso
add constraint acceso_id_fk foreign key (acceso_id) references mod_sistema.acceso(id),
add constraint permiso_tipo_id_fk foreign key (permiso_tipo_id) references mod_sistema.permiso_tipo(id);

alter table mod_sistema.ubicacion
add constraint ubicacion_tipo_id_fk foreign key (ubicacion_tipo_id) references mod_sistema.ubicacion_tipo(id);

alter table mod_sistema.rel_ubicacion 
add constraint ubicacion_id_fk foreign key (ubicacion_id) references mod_sistema.ubicacion(id),
add constraint ubicacion_id_dep_fk foreign key (ubicacion_id_dep) references mod_sistema.ubicacion(id);

