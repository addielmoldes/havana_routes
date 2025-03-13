export interface BusRoute {
    readonly id_ruta: number;
    numero: string;
    chapa: string;
    ruta: string;
    lon: number;
    lat: number;
    velocidad: number;
    rumbo: number;
    ubicacion?: string;
    estado: string;
    estado_ruta?: string;
    hora_salida: string;
    minutos?: string;
    eta_ultima_parada?: Date;
    eta_proxima_parada?: Date;
    proxima_parada?: string;
    fecha_reporte: Date;
    chofer: string;
}