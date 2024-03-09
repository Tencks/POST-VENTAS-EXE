export interface EmpresaI{
    id?:string|undefined|null|number;
    nombre?:string|undefined|null;
    nro_empresa?:number|undefined|null;
    cuit?:number|undefined|null;
    calle?:string|undefined|null;
    nro_calle?:number|undefined|null;
    nro_piso?:number|undefined|null;
    nro_depto?:number|undefined|null;
    cod_loc?:string|undefined|null;
    nro_telefono?:number|undefined|null;
    tipo_iva?:string|undefined|null;
    inicio_actividades?:Date|undefined|null;
    nro_iibb:number|undefined|null;
    fecha_registro?:Date|undefined|null;
    fecha_modif?:Date|undefined|null;
    fotoCliente?:string|undefined|null;
}
