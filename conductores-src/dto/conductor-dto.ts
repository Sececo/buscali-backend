import { Conductor } from '../types/conductor';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  IsStrongPassword,
} from 'class-validator';

// DTO para crear un cliente
export class CreateConductorDTO {
  @IsNotEmpty({ message: 'La Cedula no puede estar vacía' })
  @Matches(/^[0-9]{1,20}$/, {
    message: 'La Cedula debe contener solo Números y un máximo de 20 dígitos',
  }) // Validación para permitir solo dígitos en la cédula
  cedula!: string;

  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  @Matches(/\S/, { message: 'El nombre no puede ser solo espacios' })
  @Matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, {
    message: 'Nombre solo puede contener letras y espacios',
  }) // Validación para permitir solo letras y espacios
  nombre!: string;

  @IsNotEmpty({ message: 'El correo no puede estar vacío' })
  @IsEmail({}, { message: 'Formato de correo electrónico inválido' }) // Validación para formato de correo electrónico
  correo_electronico!: string;

  @IsNotEmpty({ message: 'El Teléfono no puede estar vacío' })
  @Matches(/^\+?[0-9]{7,15}$/, {
    message: 'Teléfono debe contener solo Números y entre 7 y 15 dígitos',
  }) // Validación para permitir solo dígitos en el teléfono
  telefono!: string;

  @IsOptional() // Permite que el campo sea opcional al crear un conductor
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
    {
      message:
        'La contraseña debe tener entre 8 y 50 caracteres, incluir mayúscula, minúscula, número y símbolo',
    },
  ) // Validación para contraseñas seguras
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    { message: 'La contraseña no cumple con los requisitos de seguridad' },
  )
  contrasena?: string;
  // (?) permite enviar o no el estado al crear un conductor, si no se envía se asume que es "Activo" por defecto en la base de datos, pero si se envía debe ser "Activo" o "Inactivo"

  @IsOptional() // Permite que el campo sea opcional al crear un conductor
  @IsEnum(['Activo', 'Inactivo'], {
    message:
      'Estado debe ser "Activo" o "Inactivo", con la primera letra en mayúscula',
  })
  estado?: string;
}

// DTO para actualizar un conductor
export class UpdateConductorDTO {
  @IsOptional() // Permite que el campo sea opcional al actualizar un conductor
  @Matches(/\S/, { message: 'El nombre no puede ser solo espacios' })
  @Matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, {
    message: 'Nombre solo puede contener letras y espacios',
  }) // Validación para permitir solo letras y espacios
  nombre?: string;

  @IsOptional() // Permite que el campo sea opcional al actualizar un conductor
  @IsEmail({}, { message: 'Formato de correo electrónico inválido' }) // Validación para formato de correo electrónico
  correo_electronico?: string;

  @IsOptional() // Permite que el campo sea opcional al actualizar un conductor
  @Matches(/^\+?[0-9]{7,15}$/, {
    message: 'Telefono debe contener solo Números y entre 7 y 15 dígitos',
  }) // Validación para permitir solo dígitos en el teléfono
  telefono?: string;

  //eliminar despues
  @IsOptional() // Permite que el campo sea opcional al crear un conductor
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
    {
      message:
        'La contraseña debe tener entre 8 y 50 caracteres, incluir mayúscula, minúscula, número y símbolo',
    },
  ) // Validación para contraseñas seguras
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    { message: 'La contraseña no cumple con los requisitos de seguridad' },
  )
  contrasena?: string;

  @IsOptional() // Permite que el campo sea opcional al actualizar un conductor
  @IsEnum(['Activo', 'Inactivo'], {
    message: 'Estado debe ser "Activo" o "Inactivo"',
  })
  estado?: string;
}

// DTO para respuesta al conductor
export class ConductorResponseDTO {
  cedula?: string;
  nombre?: string;
  correo_electronico?: string;
  telefono?: string;
  estado?: string;

  constructor(conductor: Conductor) {
    this.nombre = conductor.nombre;
    this.correo_electronico = conductor.correo_electronico;
    this.telefono = conductor.telefono;
    this.cedula = conductor.cedula;
    this.estado = conductor.estado;
  }
}
