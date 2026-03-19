import { Conductor } from '../types/conductor'
import { ConductorModel } from "../models/conductor-model";

export class ConductorRepository {
  async findAllConductores(): Promise<Conductor[]> {
    const conductores = await ConductorModel.findAll();
    return conductores.map(c => c.toJSON() as Conductor);
  }

  // verificacion de existencia en la base de datos por cedula, correo_electronico y telefono para evitar duplicados
  async findConductorByCedula(cedula:string): Promise<Conductor | null> {
    const conductor = await ConductorModel.findByPk(cedula);
    return conductor ? (conductor.toJSON() as Conductor) : null;
  }

  async findConductorByCorreoElectronico(correo_electronico: string): Promise<Conductor | null> {
    const conductor = await ConductorModel.findOne({ where: { correo_electronico } });
    return conductor ? (conductor.toJSON() as Conductor) : null;
  }

  async findConductorByTelefono(telefono:string): Promise<Conductor | null> {
    const conductor = await ConductorModel.findOne({ where: { telefono } });
    return conductor ? (conductor.toJSON() as Conductor) : null;
  }

  // crea un nuevo conductor en la base de datos, recibe un objeto con los datos del conductor excepto la fecha_creacion y cedula que se generan automáticamente
  async createConductor(data: Omit<Conductor,  "fecha_creacion" | "contrasena" | "estado" >): Promise<Conductor> {
    const newConductor = await ConductorModel.create(data);
    return newConductor.toJSON() as Conductor;
  }

  async updateConductor(cedulaParametro:string, data: Partial<Conductor>): Promise<Conductor | null> {
    const conductor = await ConductorModel.findByPk(cedulaParametro);
    if (!conductor) {
      return null;
    }
    await conductor.update(data);
    return conductor.toJSON() as Conductor;
  }

  async deleteConductor(cedula:string): Promise<boolean> {
    const deleted = await ConductorModel.destroy({ where: { cedula } });
    return deleted > 0;
  }
}
