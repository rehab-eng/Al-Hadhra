import { IsBoolean, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAdmissionDto {
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  nationalId: string;

  @IsNotEmpty()
  departmentRequested: string;

  @IsNotEmpty()
  studyType: string;

  @IsOptional()
  @IsBoolean()
  sendToUniversityEmail?: boolean;

  @IsOptional()
  @IsBoolean()
  sendToStudentEmail?: boolean;
}
