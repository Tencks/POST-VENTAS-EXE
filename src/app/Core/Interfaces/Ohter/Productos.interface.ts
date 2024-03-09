
 
    export interface listaClientesI{
        [x: string]: any;
        id?:string|undefined|null|number;
        nombre?:string|undefined|null;
        nombre_fantasia?:string|undefined|null;
        nro_cliente?:number|undefined|null;
        dni?:number|undefined|null;
        cuit?:number|undefined|null;
        calle?:string|undefined|null;
        nro_calle?:number|undefined|null;
        nro_piso?:number|undefined|null;
        nro_depto?:number|undefined|null;
        cod_loc?:string|undefined|null;
        nro_telefono?:number|undefined|null;
        tipo_iva?:string|undefined|null;
        fecha_registro?:Date;
        fecha_modif?:Date;
        fotoCliente?:string|undefined|null;
    }
