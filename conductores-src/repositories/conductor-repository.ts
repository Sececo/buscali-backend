import { Conductor } from '../types/conductor'
import { ConductorModel } from "../models/conductor-model";

export class ConductorRepository {
  async findAllConductores(): Promise<Conductor[]> {
    const conductores = await ConductorModel.findAll();
    return conductores.map(c => c.toJSON() as Conductor);
  }

  async findConductorByCedula(cedula: bigint): Promise<Conductor | null> {
    const conductor = await ConductorModel.findByPk(cedula);
    return conductor ? (conductor.toJSON() as Conductor) : null;
  }

  async createConductor(data: Omit<Conductor,  "fecha_creacion">): Promise<Conductor> {
    const newConductor = await ConductorModel.create(data);
    return newConductor.toJSON() as Conductor;
  }

  async updateConductor(cedula: bigint, data: Partial<Conductor>): Promise<Conductor | null> {
    const conductor = await ConductorModel.findByPk(cedula);
    if (!conductor) return null;
    await conductor.update(data);
    return conductor.toJSON() as Conductor;
  }

  async deleteConductor(cedula: bigint): Promise<boolean> {
    const deleted = await ConductorModel.destroy({ where: { cedula } });
    return deleted > 0;
  }
}
