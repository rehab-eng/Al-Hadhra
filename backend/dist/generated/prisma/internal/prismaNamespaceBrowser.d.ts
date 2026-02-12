import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Department: "Department";
    readonly Student: "Student";
    readonly Course: "Course";
    readonly Enrollment: "Enrollment";
    readonly AdmissionApplication: "AdmissionApplication";
    readonly Announcement: "Announcement";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly fullName: "fullName";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const DepartmentScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly description: "description";
};
export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum];
export declare const StudentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly studentNumber: "studentNumber";
    readonly departmentId: "departmentId";
    readonly enrollmentYear: "enrollmentYear";
    readonly status: "status";
};
export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];
export declare const CourseScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly creditHours: "creditHours";
    readonly departmentId: "departmentId";
};
export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];
export declare const EnrollmentScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly courseId: "courseId";
    readonly semester: "semester";
    readonly academicYear: "academicYear";
    readonly grade: "grade";
};
export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum];
export declare const AdmissionApplicationScalarFieldEnum: {
    readonly id: "id";
    readonly fullName: "fullName";
    readonly email: "email";
    readonly nationalId: "nationalId";
    readonly departmentRequested: "departmentRequested";
    readonly status: "status";
    readonly submittedAt: "submittedAt";
};
export type AdmissionApplicationScalarFieldEnum = (typeof AdmissionApplicationScalarFieldEnum)[keyof typeof AdmissionApplicationScalarFieldEnum];
export declare const AnnouncementScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly content: "content";
    readonly createdBy: "createdBy";
    readonly createdAt: "createdAt";
};
export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
