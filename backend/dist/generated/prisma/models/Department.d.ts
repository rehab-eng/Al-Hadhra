import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DepartmentModel = runtime.Types.Result.DefaultSelection<Prisma.$DepartmentPayload>;
export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
};
export type DepartmentMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    code: string | null;
    description: string | null;
};
export type DepartmentMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    code: string | null;
    description: string | null;
};
export type DepartmentCountAggregateOutputType = {
    id: number;
    name: number;
    code: number;
    description: number;
    _all: number;
};
export type DepartmentMinAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
};
export type DepartmentMaxAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
};
export type DepartmentCountAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    description?: true;
    _all?: true;
};
export type DepartmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DepartmentCountAggregateInputType;
    _min?: DepartmentMinAggregateInputType;
    _max?: DepartmentMaxAggregateInputType;
};
export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
    [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDepartment[P]> : Prisma.GetScalarType<T[P], AggregateDepartment[P]>;
};
export type DepartmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithAggregationInput | Prisma.DepartmentOrderByWithAggregationInput[];
    by: Prisma.DepartmentScalarFieldEnum[] | Prisma.DepartmentScalarFieldEnum;
    having?: Prisma.DepartmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DepartmentCountAggregateInputType | true;
    _min?: DepartmentMinAggregateInputType;
    _max?: DepartmentMaxAggregateInputType;
};
export type DepartmentGroupByOutputType = {
    id: string;
    name: string;
    code: string | null;
    description: string | null;
    _count: DepartmentCountAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
};
type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DepartmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DepartmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DepartmentGroupByOutputType[P]>;
}>>;
export type DepartmentWhereInput = {
    AND?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    OR?: Prisma.DepartmentWhereInput[];
    NOT?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    id?: Prisma.StringFilter<"Department"> | string;
    name?: Prisma.StringFilter<"Department"> | string;
    code?: Prisma.StringNullableFilter<"Department"> | string | null;
    description?: Prisma.StringNullableFilter<"Department"> | string | null;
    students?: Prisma.StudentListRelationFilter;
    courses?: Prisma.CourseListRelationFilter;
};
export type DepartmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    students?: Prisma.StudentOrderByRelationAggregateInput;
    courses?: Prisma.CourseOrderByRelationAggregateInput;
};
export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    code?: string;
    AND?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    OR?: Prisma.DepartmentWhereInput[];
    NOT?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    description?: Prisma.StringNullableFilter<"Department"> | string | null;
    students?: Prisma.StudentListRelationFilter;
    courses?: Prisma.CourseListRelationFilter;
}, "id" | "name" | "code">;
export type DepartmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DepartmentCountOrderByAggregateInput;
    _max?: Prisma.DepartmentMaxOrderByAggregateInput;
    _min?: Prisma.DepartmentMinOrderByAggregateInput;
};
export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.DepartmentScalarWhereWithAggregatesInput | Prisma.DepartmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.DepartmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DepartmentScalarWhereWithAggregatesInput | Prisma.DepartmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Department"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Department"> | string;
    code?: Prisma.StringNullableWithAggregatesFilter<"Department"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Department"> | string | null;
};
export type DepartmentCreateInput = {
    id?: string;
    name: string;
    code?: string | null;
    description?: string | null;
    students?: Prisma.StudentCreateNestedManyWithoutDepartmentInput;
    courses?: Prisma.CourseCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateInput = {
    id?: string;
    name: string;
    code?: string | null;
    description?: string | null;
    students?: Prisma.StudentUncheckedCreateNestedManyWithoutDepartmentInput;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    students?: Prisma.StudentUpdateManyWithoutDepartmentNestedInput;
    courses?: Prisma.CourseUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    students?: Prisma.StudentUncheckedUpdateManyWithoutDepartmentNestedInput;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentCreateManyInput = {
    id?: string;
    name: string;
    code?: string | null;
    description?: string | null;
};
export type DepartmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DepartmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DepartmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type DepartmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type DepartmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type DepartmentNullableScalarRelationFilter = {
    is?: Prisma.DepartmentWhereInput | null;
    isNot?: Prisma.DepartmentWhereInput | null;
};
export type DepartmentScalarRelationFilter = {
    is?: Prisma.DepartmentWhereInput;
    isNot?: Prisma.DepartmentWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DepartmentCreateNestedOneWithoutStudentsInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutStudentsInput, Prisma.DepartmentUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutStudentsInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateOneWithoutStudentsNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutStudentsInput, Prisma.DepartmentUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutStudentsInput;
    upsert?: Prisma.DepartmentUpsertWithoutStudentsInput;
    disconnect?: Prisma.DepartmentWhereInput | boolean;
    delete?: Prisma.DepartmentWhereInput | boolean;
    connect?: Prisma.DepartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartmentUpdateToOneWithWhereWithoutStudentsInput, Prisma.DepartmentUpdateWithoutStudentsInput>, Prisma.DepartmentUncheckedUpdateWithoutStudentsInput>;
};
export type DepartmentCreateNestedOneWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutCoursesInput, Prisma.DepartmentUncheckedCreateWithoutCoursesInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutCoursesInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutCoursesInput, Prisma.DepartmentUncheckedCreateWithoutCoursesInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutCoursesInput;
    upsert?: Prisma.DepartmentUpsertWithoutCoursesInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartmentUpdateToOneWithWhereWithoutCoursesInput, Prisma.DepartmentUpdateWithoutCoursesInput>, Prisma.DepartmentUncheckedUpdateWithoutCoursesInput>;
};
export type DepartmentCreateWithoutStudentsInput = {
    id?: string;
    name: string;
    code?: string | null;
    description?: string | null;
    courses?: Prisma.CourseCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateWithoutStudentsInput = {
    id?: string;
    name: string;
    code?: string | null;
    description?: string | null;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentCreateOrConnectWithoutStudentsInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutStudentsInput, Prisma.DepartmentUncheckedCreateWithoutStudentsInput>;
};
export type DepartmentUpsertWithoutStudentsInput = {
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutStudentsInput, Prisma.DepartmentUncheckedUpdateWithoutStudentsInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutStudentsInput, Prisma.DepartmentUncheckedCreateWithoutStudentsInput>;
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentUpdateToOneWithWhereWithoutStudentsInput = {
    where?: Prisma.DepartmentWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutStudentsInput, Prisma.DepartmentUncheckedUpdateWithoutStudentsInput>;
};
export type DepartmentUpdateWithoutStudentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courses?: Prisma.CourseUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutStudentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentCreateWithoutCoursesInput = {
    id?: string;
    name: string;
    code?: string | null;
    description?: string | null;
    students?: Prisma.StudentCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateWithoutCoursesInput = {
    id?: string;
    name: string;
    code?: string | null;
    description?: string | null;
    students?: Prisma.StudentUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentCreateOrConnectWithoutCoursesInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutCoursesInput, Prisma.DepartmentUncheckedCreateWithoutCoursesInput>;
};
export type DepartmentUpsertWithoutCoursesInput = {
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutCoursesInput, Prisma.DepartmentUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutCoursesInput, Prisma.DepartmentUncheckedCreateWithoutCoursesInput>;
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentUpdateToOneWithWhereWithoutCoursesInput = {
    where?: Prisma.DepartmentWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutCoursesInput, Prisma.DepartmentUncheckedUpdateWithoutCoursesInput>;
};
export type DepartmentUpdateWithoutCoursesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    students?: Prisma.StudentUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutCoursesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    students?: Prisma.StudentUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentCountOutputType = {
    students: number;
    courses: number;
};
export type DepartmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    students?: boolean | DepartmentCountOutputTypeCountStudentsArgs;
    courses?: boolean | DepartmentCountOutputTypeCountCoursesArgs;
};
export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentCountOutputTypeSelect<ExtArgs> | null;
};
export type DepartmentCountOutputTypeCountStudentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
};
export type DepartmentCountOutputTypeCountCoursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
};
export type DepartmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
    students?: boolean | Prisma.Department$studentsArgs<ExtArgs>;
    courses?: boolean | Prisma.Department$coursesArgs<ExtArgs>;
    _count?: boolean | Prisma.DepartmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["department"]>;
export type DepartmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
}, ExtArgs["result"]["department"]>;
export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
}, ExtArgs["result"]["department"]>;
export type DepartmentSelectScalar = {
    id?: boolean;
    name?: boolean;
    code?: boolean;
    description?: boolean;
};
export type DepartmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "code" | "description", ExtArgs["result"]["department"]>;
export type DepartmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    students?: boolean | Prisma.Department$studentsArgs<ExtArgs>;
    courses?: boolean | Prisma.Department$coursesArgs<ExtArgs>;
    _count?: boolean | Prisma.DepartmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $DepartmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Department";
    objects: {
        students: Prisma.$StudentPayload<ExtArgs>[];
        courses: Prisma.$CoursePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        code: string | null;
        description: string | null;
    }, ExtArgs["result"]["department"]>;
    composites: {};
};
export type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DepartmentPayload, S>;
export type DepartmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DepartmentCountAggregateInputType | true;
};
export interface DepartmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Department'];
        meta: {
            name: 'Department';
        };
    };
    findUnique<T extends DepartmentFindUniqueArgs>(args: Prisma.SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DepartmentFindFirstArgs>(args?: Prisma.SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DepartmentFindManyArgs>(args?: Prisma.SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DepartmentCreateArgs>(args: Prisma.SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DepartmentCreateManyArgs>(args?: Prisma.SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DepartmentDeleteArgs>(args: Prisma.SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DepartmentUpdateArgs>(args: Prisma.SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DepartmentUpdateManyArgs>(args: Prisma.SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DepartmentUpsertArgs>(args: Prisma.SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DepartmentCountArgs>(args?: Prisma.Subset<T, DepartmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DepartmentCountAggregateOutputType> : number>;
    aggregate<T extends DepartmentAggregateArgs>(args: Prisma.Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>;
    groupBy<T extends DepartmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DepartmentGroupByArgs['orderBy'];
    } : {
        orderBy?: DepartmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DepartmentFieldRefs;
}
export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    students<T extends Prisma.Department$studentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Department$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    courses<T extends Prisma.Department$coursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Department$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DepartmentFieldRefs {
    readonly id: Prisma.FieldRef<"Department", 'String'>;
    readonly name: Prisma.FieldRef<"Department", 'String'>;
    readonly code: Prisma.FieldRef<"Department", 'String'>;
    readonly description: Prisma.FieldRef<"Department", 'String'>;
}
export type DepartmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentCreateInput, Prisma.DepartmentUncheckedCreateInput>;
};
export type DepartmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DepartmentCreateManyInput | Prisma.DepartmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DepartmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    data: Prisma.DepartmentCreateManyInput | Prisma.DepartmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DepartmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentUpdateInput, Prisma.DepartmentUncheckedUpdateInput>;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DepartmentUpdateManyMutationInput, Prisma.DepartmentUncheckedUpdateManyInput>;
    where?: Prisma.DepartmentWhereInput;
    limit?: number;
};
export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentUpdateManyMutationInput, Prisma.DepartmentUncheckedUpdateManyInput>;
    where?: Prisma.DepartmentWhereInput;
    limit?: number;
};
export type DepartmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateInput, Prisma.DepartmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DepartmentUpdateInput, Prisma.DepartmentUncheckedUpdateInput>;
};
export type DepartmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
    limit?: number;
};
export type Department$studentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Department$coursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
export type DepartmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
};
export {};
