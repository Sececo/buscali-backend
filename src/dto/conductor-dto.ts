import { Conductor } from '../types/conductor'

// DTO para crear un cliente
export class CreateConductorDTO {
  nombre: string;
  email: string;
  telefono: bigint;
  cedula: bigint;
  password: string;

  constructor(conductor: Omit<Conductor, 'id' | 'created_at'>) {
    this.nombre = conductor.nombre;
    this.email = conductor.email;
    this.telefono = conductor.telefono;
    this.cedula = conductor.cedula;
    this.password = conductor.password;
  }
// construir funcion para contraseña aleatoria automatica

}

// DTO para actualizar un conductor
export class UpdateConductorDTO {
  id!: number;
  nombre?: string;
  email?: string;
  telefono?: bigint;
  cedula?: bigint;
  password?: string;

constructor(conductor: Partial<Omit<Conductor, 'created_at'> & { id: number }>) {
    this.id = conductor.id!;
    if (conductor.nombre !== undefined) this.nombre = conductor.nombre;
    if (conductor.email !== undefined) this.email = conductor.email;
    if (conductor.telefono !== undefined) this.telefono = conductor.telefono;
    if (conductor.cedula !== undefined) this.cedula = conductor.cedula;
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
