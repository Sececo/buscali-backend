import { Conductor } from '../types/conductor'

// DTO para crear un cliente
export class CreateConductorDTO {
  cedula: bigint;
  nombre: string;
  email: string;
  telefono: bigint;
  password: string;

  constructor(conductor: Omit<Conductor, 'created_at'>) {
    this.cedula = conductor.cedula;
    this.nombre = conductor.nombre;
    this.email = conductor.email;
    this.telefono = conductor.telefono;
    this.password = conductor.password;
  }
// TODO: construir funcion para contraseña aleatoria automatica

}

// DTO para actualizar un conductor
export class UpdateConductorDTO {
  cedula!: bigint;
  nombre?: string;
  email?: string;
  telefono?: bigint;
  password?: string;

constructor(conductor: Partial<Omit<Conductor, 'created_at'> & { cedula: number }>) {
    this.cedula = conductor.cedula!;
    if (conductor.nombre !== undefined) this.nombre = conductor.nombre;
    if (conductor.email !== undefined) this.email = conductor.email;
    if (conductor.telefono !== undefined) this.telefono = conductor.telefono;
    if (conductor.password !== undefined) this.password = conductor.password;
  }
}

// DTO para respuesta al conductor
export class ConductorResponseDTO {
  nombre: string;
  email?: string;
  telefono?: bigint;
  cedula?: bigint;

  constructor(conductor: Conductor) {
    this.nombre = conductor.nombre;
    this.email = conductor.email;
    this.telefono = conductor.telefono;
    this.cedula = conductor.cedula;
  }
}
