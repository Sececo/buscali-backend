import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'conductor',
  timestamps: false, 
})
export class ConductorModel extends Model {
  @Column({
    type: DataType.BIGINT,
    autoIncrement: false,
    primaryKey: true,
  })
  cedula!: bigint;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  correo_electronico!: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  telefono!: bigint;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  contrasena!: string;
  
  @Column({
    type: DataType.ENUM('activo', 'inactivo'),
    allowNull: false,
    defaultValue: 'activo',
  })
  estado!: string;
  
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  fecha_creacion!: Date;

}
