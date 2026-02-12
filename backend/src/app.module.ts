import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { StudentsModule } from './modules/students/students.module';
import { DepartmentsModule } from './modules/departments/departments.module';
import { CoursesModule } from './modules/courses/courses.module';
import { EnrollmentsModule } from './modules/enrollments/enrollments.module';
import { AdmissionsModule } from './modules/admissions/admissions.module';
import { AnnouncementsModule } from './modules/announcements/announcements.module';
import { FilesModule } from './modules/files/files.module';

@Module({
  imports: [AuthModule, UsersModule, StudentsModule, DepartmentsModule, CoursesModule, EnrollmentsModule, AdmissionsModule, AnnouncementsModule, FilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
