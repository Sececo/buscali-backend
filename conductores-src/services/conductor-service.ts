import { ConductorRepository } from '../repositories/conductor-repository';
import { Conductor } from '../types/conductor';
import { CreateConductorDTO, UpdateConductorDTO, ConductorResponseDTO } from '../dto/conductor-dto';

export class ConductorService {
  private repo = new ConductorRepository();

  async create(dto: CreateConductorDTO): Promise<ConductorResponseDTO> {
    const c = await this.repo.createConductor(dto);
    return new ConductorResponseDTO(c);
  }

  async list(): Promise<ConductorResponseDTO[]> {
    const conductores: Conductor[] = await this.repo.findAllConductores();
    return conductores.map(c => new ConductorResponseDTO(c));
  }

  async get(cedula: bigint): Promise<ConductorResponseDTO | null> {
    const conductor: Conductor | null = await this.repo.findConductorById(cedula);
    return conductor ? new ConductorResponseDTO(conductor) : null;
  }

  async update(dto: UpdateConductorDTO): Promise<ConductorResponseDTO | null> {
    const updated = await this.repo.updateConductor(dto.cedula, dto);
    return updated ? new ConductorResponseDTO(updated) : null;
  }

  async delete(cedula: bigint): Promise<boolean> {
    return await this.repo.deleteConductor(cedula);
  }
}
