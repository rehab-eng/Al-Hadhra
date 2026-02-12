import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StudentModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentPayload>;
export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
export type StudentAvgAggregateOutputType = {
    enrollmentYear: number | null;
};
export type StudentSumAggregateOutputType = {
    enrollmentYear: number | null;
};
export type StudentMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    studentNumber: string | null;
    departmentId: string | null;
    enrollmentYear: number | null;
    status: string | null;
};
export type StudentMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    studentNumber: string | null;
    departmentId: string | null;
    enrollmentYear: number | null;
    status: string | null;
};
export type StudentCountAggregateOutputType = {
    id: number;
    userId: number;
    studentNumber: number;
    departmentId: number;
    enrollmentYear: number;
    status: number;
    _all: number;
};
export type StudentAvgAggregateInputType = {
    enrollmentYear?: true;
};
export type StudentSumAggregateInputType = {
    enrollmentYear?: true;
};
export type StudentMinAggregateInputType = {
    id?: true;
    userId?: true;
    studentNumber?: true;
    departmentId?: true;
    enrollmentYear?: true;
    status?: true;
};
export type StudentMaxAggregateInputType = {
    id?: true;
    userId?: true;
    studentNumber?: true;
    departmentId?: true;
    enrollmentYear?: true;
    status?: true;
};
export type StudentCountAggregateInputType = {
    id?: true;
    userId?: true;
    studentNumber?: true;
    departmentId?: true;
    enrollmentYear?: true;
    status?: true;
    _all?: true;
};
export type StudentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentCountAggregateInputType;
    _avg?: StudentAvgAggregateInputType;
    _sum?: StudentSumAggregateInputType;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
};
export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudent[P]> : Prisma.GetScalarType<T[P], AggregateStudent[P]>;
};
export type StudentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithAggregationInput | Prisma.StudentOrderByWithAggregationInput[];
    by: Prisma.StudentScalarFieldEnum[] | Prisma.StudentScalarFieldEnum;
    having?: Prisma.StudentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentCountAggregateInputType | true;
    _avg?: StudentAvgAggregateInputType;
    _sum?: StudentSumAggregateInputType;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
};
export type StudentGroupByOutputType = {
    id: string;
    userId: string;
    studentNumber: string;
    departmentId: string | null;
    enrollmentYear: number;
    status: string;
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]>;
}>>;
export type StudentWhereInput = {
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    id?: Prisma.StringFilter<"Student"> | string;
    userId?: Prisma.StringFilter<"Student"> | string;
    studentNumber?: Prisma.StringFilter<"Student"> | string;
    departmentId?: Prisma.StringNullableFilter<"Student"> | string | null;
    enrollmentYear?: Prisma.IntFilter<"Student"> | number;
    status?: Prisma.StringFilter<"Student"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    department?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    enrollments?: Prisma.EnrollmentListRelationFilter;
};
export type StudentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    studentNumber?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    enrollmentYear?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    department?: Prisma.DepartmentOrderByWithRelationInput;
    enrollments?: Prisma.EnrollmentOrderByRelationAggregateInput;
};
export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    studentNumber?: string;
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    departmentId?: Prisma.StringNullableFilter<"Student"> | string | null;
    enrollmentYear?: Prisma.IntFilter<"Student"> | number;
    status?: Prisma.StringFilter<"Student"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    department?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    enrollments?: Prisma.EnrollmentListRelationFilter;
}, "id" | "userId" | "studentNumber">;
export type StudentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    studentNumber?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    enrollmentYear?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.StudentCountOrderByAggregateInput;
    _avg?: Prisma.StudentAvgOrderByAggregateInput;
    _max?: Prisma.StudentMaxOrderByAggregateInput;
    _min?: Prisma.StudentMinOrderByAggregateInput;
    _sum?: Prisma.StudentSumOrderByAggregateInput;
};
export type StudentScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    studentNumber?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    departmentId?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    enrollmentYear?: Prisma.IntWithAggregatesFilter<"Student"> | number;
    status?: Prisma.StringWithAggregatesFilter<"Student"> | string;
};
export type StudentCreateInput = {
    id?: string;
    studentNumber: string;
    enrollmentYear: number;
    status?: string;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    department?: Prisma.DepartmentCreateNestedOneWithoutStudentsInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateInput = {
    id?: string;
    userId: string;
    studentNumber: string;
    departmentId?: string | null;
    enrollmentYear: number;
    status?: string;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollmentYear?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    department?: Prisma.DepartmentUpdateOneWithoutStudentsNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentYear?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateManyInput = {
    id?: string;
    userId: string;
    studentNumber: string;
    departmentId?: string | null;
    enrollmentYear: number;
    status?: string;
};
export type StudentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollmentYear?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StudentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentYear?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StudentNullableScalarRelationFilter = {
    is?: Prisma.StudentWhereInput | null;
    isNot?: Prisma.StudentWhereInput | null;
};
export type StudentListRelationFilter = {
    every?: Prisma.StudentWhereInput;
    some?: Prisma.StudentWhereInput;
    none?: Prisma.StudentWhereInput;
};
export type StudentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    studentNumber?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    enrollmentYear?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type StudentAvgOrderByAggregateInput = {
    enrollmentYear?: Prisma.SortOrder;
};
export type StudentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    studentNumber?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    enrollmentYear?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type StudentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    studentNumber?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    enrollmentYear?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type StudentSumOrderByAggregateInput = {
    enrollmentYear?: Prisma.SortOrder;
};
export type StudentScalarRelationFilter = {
    is?: Prisma.StudentWhereInput;
    isNot?: Prisma.StudentWhereInput;
};
export type StudentCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutUserInput, Prisma.StudentUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutUserInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutUserInput, Prisma.StudentUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutUserInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutUserInput, Prisma.StudentUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutUserInput;
    upsert?: Prisma.StudentUpsertWithoutUserInput;
    disconnect?: Prisma.StudentWhereInput | boolean;
    delete?: Prisma.StudentWhereInput | boolean;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutUserInput, Prisma.StudentUpdateWithoutUserInput>, Prisma.StudentUncheckedUpdateWithoutUserInput>;
};
export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutUserInput, Prisma.StudentUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutUserInput;
    upsert?: Prisma.StudentUpsertWithoutUserInput;
    disconnect?: Prisma.StudentWhereInput | boolean;
    delete?: Prisma.StudentWhereInput | boolean;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutUserInput, Prisma.StudentUpdateWithoutUserInput>, Prisma.StudentUncheckedUpdateWithoutUserInput>;
};
export type StudentCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutDepartmentInput, Prisma.StudentUncheckedCreateWithoutDepartmentInput> | Prisma.StudentCreateWithoutDepartmentInput[] | Prisma.StudentUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutDepartmentInput | Prisma.StudentCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.StudentCreateManyDepartmentInputEnvelope;
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
};
export type StudentUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutDepartmentInput, Prisma.StudentUncheckedCreateWithoutDepartmentInput> | Prisma.StudentCreateWithoutDepartmentInput[] | Prisma.StudentUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutDepartmentInput | Prisma.StudentCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.StudentCreateManyDepartmentInputEnvelope;
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
};
export type StudentUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutDepartmentInput, Prisma.StudentUncheckedCreateWithoutDepartmentInput> | Prisma.StudentCreateWithoutDepartmentInput[] | Prisma.StudentUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutDepartmentInput | Prisma.StudentCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.StudentUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.StudentUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.StudentCreateManyDepartmentInputEnvelope;
    set?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    disconnect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    delete?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    update?: Prisma.StudentUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.StudentUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.StudentUpdateManyWithWhereWithoutDepartmentInput | Prisma.StudentUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
};
export type StudentUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutDepartmentInput, Prisma.StudentUncheckedCreateWithoutDepartmentInput> | Prisma.StudentCreateWithoutDepartmentInput[] | Prisma.StudentUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutDepartmentInput | Prisma.StudentCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.StudentUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.StudentUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.StudentCreateManyDepartmentInputEnvelope;
    set?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    disconnect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    delete?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    update?: Prisma.StudentUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.StudentUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.StudentUpdateManyWithWhereWithoutDepartmentInput | Prisma.StudentUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type StudentCreateNestedOneWithoutEnrollmentsInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutEnrollmentsInput, Prisma.StudentUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutEnrollmentsInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutEnrollmentsInput, Prisma.StudentUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutEnrollmentsInput;
    upsert?: Prisma.StudentUpsertWithoutEnrollmentsInput;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutEnrollmentsInput, Prisma.StudentUpdateWithoutEnrollmentsInput>, Prisma.StudentUncheckedUpdateWithoutEnrollmentsInput>;
};
export type StudentCreateWithoutUserInput = {
    id?: string;
    studentNumber: string;
    enrollmentYear: number;
    status?: string;
    department?: Prisma.DepartmentCreateNestedOneWithoutStudentsInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutUserInput = {
    id?: string;
    studentNumber: string;
    departmentId?: string | null;
    enrollmentYear: number;
    status?: string;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutUserInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutUserInput, Prisma.StudentUncheckedCreateWithoutUserInput>;
};
export type StudentUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutUserInput, Prisma.StudentUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutUserInput, Prisma.StudentUncheckedCreateWithoutUserInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutUserInput, Prisma.StudentUncheckedUpdateWithoutUserInput>;
};
export type StudentUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollmentYear?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.DepartmentUpdateOneWithoutStudentsNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentYear?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateWithoutDepartmentInput = {
    id?: string;
    studentNumber: string;
    enrollmentYear: number;
    status?: string;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutDepartmentInput = {
    id?: string;
    userId: string;
    studentNumber: string;
    enrollmentYear: number;
    status?: string;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutDepartmentInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutDepartmentInput, Prisma.StudentUncheckedCreateWithoutDepartmentInput>;
};
export type StudentCreateManyDepartmentInputEnvelope = {
    data: Prisma.StudentCreateManyDepartmentInput | Prisma.StudentCreateManyDepartmentInput[];
    skipDuplicates?: boolean;
};
export type StudentUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.StudentWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentUpdateWithoutDepartmentInput, Prisma.StudentUncheckedUpdateWithoutDepartmentInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutDepartmentInput, Prisma.StudentUncheckedCreateWithoutDepartmentInput>;
};
export type StudentUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.StudentWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutDepartmentInput, Prisma.StudentUncheckedUpdateWithoutDepartmentInput>;
};
export type StudentUpdateManyWithWhereWithoutDepartmentInput = {
    where: Prisma.StudentScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyWithoutDepartmentInput>;
};
export type StudentScalarWhereInput = {
    AND?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
    OR?: Prisma.StudentScalarWhereInput[];
    NOT?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
    id?: Prisma.StringFilter<"Student"> | string;
    userId?: Prisma.StringFilter<"Student"> | string;
    studentNumber?: Prisma.StringFilter<"Student"> | string;
    departmentId?: Prisma.StringNullableFilter<"Student"> | string | null;
    enrollmentYear?: Prisma.IntFilter<"Student"> | number;
    status?: Prisma.StringFilter<"Student"> | string;
};
export type StudentCreateWithoutEnrollmentsInput = {
    id?: string;
    studentNumber: string;
    enrollmentYear: number;
    status?: string;
    user: Prisma.UserCreateNestedOneWithoutStudentProfileInput;
    department?: Prisma.DepartmentCreateNestedOneWithoutStudentsInput;
};
export type StudentUncheckedCreateWithoutEnrollmentsInput = {
    id?: string;
    userId: string;
    studentNumber: string;
    departmentId?: string | null;
    enrollmentYear: number;
    status?: string;
};
export type StudentCreateOrConnectWithoutEnrollmentsInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutEnrollmentsInput, Prisma.StudentUncheckedCreateWithoutEnrollmentsInput>;
};
export type StudentUpsertWithoutEnrollmentsInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutEnrollmentsInput, Prisma.StudentUncheckedUpdateWithoutEnrollmentsInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutEnrollmentsInput, Prisma.StudentUncheckedCreateWithoutEnrollmentsInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutEnrollmentsInput, Prisma.StudentUncheckedUpdateWithoutEnrollmentsInput>;
};
export type StudentUpdateWithoutEnrollmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollmentYear?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    department?: Prisma.DepartmentUpdateOneWithoutStudentsNestedInput;
};
export type StudentUncheckedUpdateWithoutEnrollmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enrollmentYear?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StudentCreateManyDepartmentInput = {
    id?: string;
    userId: string;
    studentNumber: string;
    enrollmentYear: number;
    status?: string;
};
export type StudentUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollmentYear?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutStudentProfileNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollmentYear?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateManyWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollmentYear?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StudentCountOutputType = {
    enrollments: number;
};
export type StudentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    enrollments?: boolean | StudentCountOutputTypeCountEnrollmentsArgs;
};
export type StudentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentCountOutputTypeSelect<ExtArgs> | null;
};
export type StudentCountOutputTypeCountEnrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnrollmentWhereInput;
};
export type StudentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    studentNumber?: boolean;
    departmentId?: boolean;
    enrollmentYear?: boolean;
    status?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.Student$departmentArgs<ExtArgs>;
    enrollments?: boolean | Prisma.Student$enrollmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    studentNumber?: boolean;
    departmentId?: boolean;
    enrollmentYear?: boolean;
    status?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.Student$departmentArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    studentNumber?: boolean;
    departmentId?: boolean;
    enrollmentYear?: boolean;
    status?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.Student$departmentArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectScalar = {
    id?: boolean;
    userId?: boolean;
    studentNumber?: boolean;
    departmentId?: boolean;
    enrollmentYear?: boolean;
    status?: boolean;
};
export type StudentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "studentNumber" | "departmentId" | "enrollmentYear" | "status", ExtArgs["result"]["student"]>;
export type StudentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.Student$departmentArgs<ExtArgs>;
    enrollments?: boolean | Prisma.Student$enrollmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type StudentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.Student$departmentArgs<ExtArgs>;
};
export type StudentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.Student$departmentArgs<ExtArgs>;
};
export type $StudentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Student";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        department: Prisma.$DepartmentPayload<ExtArgs> | null;
        enrollments: Prisma.$EnrollmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        studentNumber: string;
        departmentId: string | null;
        enrollmentYear: number;
        status: string;
    }, ExtArgs["result"]["student"]>;
    composites: {};
};
export type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentPayload, S>;
export type StudentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentCountAggregateInputType | true;
};
export interface StudentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Student'];
        meta: {
            name: 'Student';
        };
    };
    findUnique<T extends StudentFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentFindManyArgs>(args?: Prisma.SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentCreateArgs>(args: Prisma.SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StudentDeleteArgs>(args: Prisma.SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentUpdateArgs>(args: Prisma.SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StudentUpsertArgs>(args: Prisma.SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentCountArgs>(args?: Prisma.Subset<T, StudentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentCountAggregateOutputType> : number>;
    aggregate<T extends StudentAggregateArgs>(args: Prisma.Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>;
    groupBy<T extends StudentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentFieldRefs;
}
export interface Prisma__StudentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    department<T extends Prisma.Student$departmentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$departmentArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    enrollments<T extends Prisma.Student$enrollmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentFieldRefs {
    readonly id: Prisma.FieldRef<"Student", 'String'>;
    readonly userId: Prisma.FieldRef<"Student", 'String'>;
    readonly studentNumber: Prisma.FieldRef<"Student", 'String'>;
    readonly departmentId: Prisma.FieldRef<"Student", 'String'>;
    readonly enrollmentYear: Prisma.FieldRef<"Student", 'Int'>;
    readonly status: Prisma.FieldRef<"Student", 'String'>;
}
export type StudentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
};
export type StudentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentCreateManyInput | Prisma.StudentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    data: Prisma.StudentCreateManyInput | Prisma.StudentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StudentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StudentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyInput>;
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type StudentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyInput>;
    where?: Prisma.StudentWhereInput;
    limit?: number;
    include?: Prisma.StudentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StudentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
};
export type StudentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type Student$departmentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
};
export type Student$enrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where?: Prisma.EnrollmentWhereInput;
    orderBy?: Prisma.EnrollmentOrderByWithRelationInput | Prisma.EnrollmentOrderByWithRelationInput[];
    cursor?: Prisma.EnrollmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnrollmentScalarFieldEnum | Prisma.EnrollmentScalarFieldEnum[];
};
export type StudentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
};
export {};
