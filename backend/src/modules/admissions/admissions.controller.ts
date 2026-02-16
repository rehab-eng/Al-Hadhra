import { Body, Controller, Post } from '@nestjs/common';
import { AdmissionsService } from './admissions.service';
import { CreateAdmissionDto } from './dto/create-admission.dto';

@Controller('admissions')
export class AdmissionsController {
  constructor(private readonly admissionsService: AdmissionsService) {}

  @Post('apply')
  async apply(@Body() dto: CreateAdmissionDto) {
    return this.admissionsService.apply(dto);
  }
}
