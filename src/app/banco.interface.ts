export interface Banco {
  codigo: number;
  fecha: string;
  nombreIniciativa: string;
  descripcionIniciativa: String;
  prioridad: Prioridad;
  areaResponsable: string;
  productOwner: string
  adjuntarDocumentos: string;
  observaciones: string
}


export enum Prioridad{
  baja = "Prioridad baja",
  media = "Prioridad media",
  alta = "Prioridad alta",

}

