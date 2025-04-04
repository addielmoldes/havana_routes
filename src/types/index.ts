export type Section = 'taxis' | 'buses' | 'settings' | 'map';

export interface Bus {
    readonly id_ruta: number;
    readonly numero: string;
    readonly chapa: string;
    readonly ruta: string;
    readonly lon: number;
    readonly lat: number;
    readonly velocidad: number;
    readonly rumbo: number;
    readonly ubicacion?: string;
    readonly estado?: string;
    readonly estado_ruta?: string;
    readonly hora_salida: string;
    readonly minutos?: string;
    readonly eta_ult_parada?: string;
    readonly eta_proxima_parada?: string;
    readonly proxima_parada?: string;
    readonly fecha_reporte: string;
    readonly chofer: string;
}

export interface Taxi {
    readonly ruta: string;
    readonly lugar: string;
    readonly estado_ruta: 'Ida' | 'Regreso' | 'En Ruta';
    readonly distancia: number;
    readonly movil: string;
    readonly idgps: string;
    readonly chapa: string;
    readonly fecha_actualizacion: Date;
    readonly fecha: Date;
    readonly lon: number;
    readonly lat: number;
    readonly angulo: string;
    readonly ignicion: 'ON' | 'OFF';
    readonly velocidad: string;
    readonly odometro: number;
    readonly combustible: number;
}

export interface VehicleRoute {
    readonly code: string;
    readonly route: string;
    readonly type: 'bus' | 'taxi';
    readonly busType?: 'main' | 'supplier' | 'secondary'
}