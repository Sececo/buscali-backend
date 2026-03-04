import { Conductor } from '../types/conductor'

// DTO para crear un cliente
export class CreateConductorDTO {
  cedula: bigint;
  nombre: string;
  correo_electronico: string;
  telefono: bigint;
  contrasena: string;
  estado: string;

  constructor(conductor: Omit<Conductor, 'fecha_creacion'>) {
    this.cedula = conductor.cedula;
    this.nombre = conductor.nombre;
    this.correo_electronico = conductor.correo_electronico;
    this.telefono = conductor.telefono;
    this.contrasena = conductor.contrasena;
    this.estado = conductor.estado;
  }
// TODO: construir funcion para contraseña aleatoria automatica

}

// DTO para actualizar un conductor
export class UpdateConductorDTO {
  cedula!: bigint;
  nombre?: string;
  correo_electronico?: string;
  telefono?: bigint;
  contrasena?: string;
  estado?: string;

constructor(conductor: Partial<Omit<Conductor, 'fecha_creacion'> & { cedula: number }>) {
    this.cedula = conductor.cedula!;
    if (conductor.nombre !== undefined) this.nombre = conductor.nombre;
    if (conductor.correo_electronico !== undefined) this.correo_electronico = conductor.correo_electronico;
    if (conductor.telefono !== undefined) this.telefono = conductor.telefono;
    if (conductor.contrasena !== undefined) this.contrasena = conductor.contrasena;
    if (conductor.estado !== undefined) this.estado = conductor.estado;
  }
}

// DTO para respuesta al conductor
export class ConductorResponseDTO {
  nombre: string;
  correo_electronico?: string;
  telefono?: bigint;
  cedula?: bigint;
  estado?: string;

  constructor(conductor: Conductor) {
    this.nombre = conductor.nombre;
    this.correo_electronico = conductor.correo_electronico;
    this.telefono = conductor.telefono;
    this.cedula = conductor.cedula;
    this.estado = conductor.estado;
  }
}
