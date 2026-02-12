import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AdmissionApplicationModel = runtime.Types.Result.DefaultSelection<Prisma.$AdmissionApplicationPayload>;
export type AggregateAdmissionApplication = {
    _count: AdmissionApplicationCountAggregateOutputType | null;
    _min: AdmissionApplicationMinAggregateOutputType | null;
    _max: AdmissionApplicationMaxAggregateOutputType | null;
};
export type AdmissionApplicationMinAggregateOutputType = {
    id: string | null;
    fullName: string | null;
    email: string | null;
    nationalId: string | null;
    departmentRequested: string | null;
    status: $Enums.AppStatus | null;
    submittedAt: Date | null;
};
export type AdmissionApplicationMaxAggregateOutputType = {
    id: string | null;
    fullName: string | null;
    email: string | null;
    nationalId: string | null;
    departmentRequested: string | null;
    status: $Enums.AppStatus | null;
    submittedAt: Date | null;
};
export type AdmissionApplicationCountAggregateOutputType = {
    id: number;
    fullName: number;
    email: number;
    nationalId: number;
    departmentRequested: number;
    status: number;
    submittedAt: number;
    _all: number;
};
export type AdmissionApplicationMinAggregateInputType = {
    id?: true;
    fullName?: true;
    email?: true;
    nationalId?: true;
    departmentRequested?: true;
    status?: true;
    submittedAt?: true;
};
export type AdmissionApplicationMaxAggregateInputType = {
    id?: true;
    fullName?: true;
    email?: true;
    nationalId?: true;
    departmentRequested?: true;
    status?: true;
    submittedAt?: true;
};
export type AdmissionApplicationCountAggregateInputType = {
    id?: true;
    fullName?: true;
    email?: true;
    nationalId?: true;
    departmentRequested?: true;
    status?: true;
    submittedAt?: true;
    _all?: true;
};
export type AdmissionApplicationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdmissionApplicationWhereInput;
    orderBy?: Prisma.AdmissionApplicationOrderByWithRelationInput | Prisma.AdmissionApplicationOrderByWithRelationInput[];
    cursor?: Prisma.AdmissionApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdmissionApplicationCountAggregateInputType;
    _min?: AdmissionApplicationMinAggregateInputType;
    _max?: AdmissionApplicationMaxAggregateInputType;
};
export type GetAdmissionApplicationAggregateType<T extends AdmissionApplicationAggregateArgs> = {
    [P in keyof T & keyof AggregateAdmissionApplication]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdmissionApplication[P]> : Prisma.GetScalarType<T[P], AggregateAdmissionApplication[P]>;
};
export type AdmissionApplicationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdmissionApplicationWhereInput;
    orderBy?: Prisma.AdmissionApplicationOrderByWithAggregationInput | Prisma.AdmissionApplicationOrderByWithAggregationInput[];
    by: Prisma.AdmissionApplicationScalarFieldEnum[] | Prisma.AdmissionApplicationScalarFieldEnum;
    having?: Prisma.AdmissionApplicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdmissionApplicationCountAggregateInputType | true;
    _min?: AdmissionApplicationMinAggregateInputType;
    _max?: AdmissionApplicationMaxAggregateInputType;
};
export type AdmissionApplicationGroupByOutputType = {
    id: string;
    fullName: string;
    email: string;
    nationalId: string;
    departmentRequested: string;
    status: $Enums.AppStatus;
    submittedAt: Date;
    _count: AdmissionApplicationCountAggregateOutputType | null;
    _min: AdmissionApplicationMinAggregateOutputType | null;
    _max: AdmissionApplicationMaxAggregateOutputType | null;
};
type GetAdmissionApplicationGroupByPayload<T extends AdmissionApplicationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdmissionApplicationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdmissionApplicationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdmissionApplicationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdmissionApplicationGroupByOutputType[P]>;
}>>;
export type AdmissionApplicationWhereInput = {
    AND?: Prisma.AdmissionApplicationWhereInput | Prisma.AdmissionApplicationWhereInput[];
    OR?: Prisma.AdmissionApplicationWhereInput[];
    NOT?: Prisma.AdmissionApplicationWhereInput | Prisma.AdmissionApplicationWhereInput[];
    id?: Prisma.StringFilter<"AdmissionApplication"> | string;
    fullName?: Prisma.StringFilter<"AdmissionApplication"> | string;
    email?: Prisma.StringFilter<"AdmissionApplication"> | string;
    nationalId?: Prisma.StringFilter<"AdmissionApplication"> | string;
    departmentRequested?: Prisma.StringFilter<"AdmissionApplication"> | string;
    status?: Prisma.EnumAppStatusFilter<"AdmissionApplication"> | $Enums.AppStatus;
    submittedAt?: Prisma.DateTimeFilter<"AdmissionApplication"> | Date | string;
};
export type AdmissionApplicationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nationalId?: Prisma.SortOrder;
    departmentRequested?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type AdmissionApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nationalId?: string;
    AND?: Prisma.AdmissionApplicationWhereInput | Prisma.AdmissionApplicationWhereInput[];
    OR?: Prisma.AdmissionApplicationWhereInput[];
    NOT?: Prisma.AdmissionApplicationWhereInput | Prisma.AdmissionApplicationWhereInput[];
    fullName?: Prisma.StringFilter<"AdmissionApplication"> | string;
    email?: Prisma.StringFilter<"AdmissionApplication"> | string;
    departmentRequested?: Prisma.StringFilter<"AdmissionApplication"> | string;
    status?: Prisma.EnumAppStatusFilter<"AdmissionApplication"> | $Enums.AppStatus;
    submittedAt?: Prisma.DateTimeFilter<"AdmissionApplication"> | Date | string;
}, "id" | "nationalId">;
export type AdmissionApplicationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nationalId?: Prisma.SortOrder;
    departmentRequested?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    _count?: Prisma.AdmissionApplicationCountOrderByAggregateInput;
    _max?: Prisma.AdmissionApplicationMaxOrderByAggregateInput;
    _min?: Prisma.AdmissionApplicationMinOrderByAggregateInput;
};
export type AdmissionApplicationScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdmissionApplicationScalarWhereWithAggregatesInput | Prisma.AdmissionApplicationScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdmissionApplicationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdmissionApplicationScalarWhereWithAggregatesInput | Prisma.AdmissionApplicationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AdmissionApplication"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"AdmissionApplication"> | string;
    email?: Prisma.StringWithAggregatesFilter<"AdmissionApplication"> | string;
    nationalId?: Prisma.StringWithAggregatesFilter<"AdmissionApplication"> | string;
    departmentRequested?: Prisma.StringWithAggregatesFilter<"AdmissionApplication"> | string;
    status?: Prisma.EnumAppStatusWithAggregatesFilter<"AdmissionApplication"> | $Enums.AppStatus;
    submittedAt?: Prisma.DateTimeWithAggregatesFilter<"AdmissionApplication"> | Date | string;
};
export type AdmissionApplicationCreateInput = {
    id?: string;
    fullName: string;
    email: string;
    nationalId: string;
    departmentRequested: string;
    status?: $Enums.AppStatus;
    submittedAt?: Date | string;
};
export type AdmissionApplicationUncheckedCreateInput = {
    id?: string;
    fullName: string;
    email: string;
    nationalId: string;
    departmentRequested: string;
    status?: $Enums.AppStatus;
    submittedAt?: Date | string;
};
export type AdmissionApplicationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nationalId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentRequested?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppStatusFieldUpdateOperationsInput | $Enums.AppStatus;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdmissionApplicationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nationalId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentRequested?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppStatusFieldUpdateOperationsInput | $Enums.AppStatus;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdmissionApplicationCreateManyInput = {
    id?: string;
    fullName: string;
    email: string;
    nationalId: string;
    departmentRequested: string;
    status?: $Enums.AppStatus;
    submittedAt?: Date | string;
};
export type AdmissionApplicationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nationalId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentRequested?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppStatusFieldUpdateOperationsInput | $Enums.AppStatus;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdmissionApplicationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    nationalId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentRequested?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumAppStatusFieldUpdateOperationsInput | $Enums.AppStatus;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdmissionApplicationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nationalId?: Prisma.SortOrder;
    departmentRequested?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type AdmissionApplicationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nationalId?: Prisma.SortOrder;
    departmentRequested?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type AdmissionApplicationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    nationalId?: Prisma.SortOrder;
    departmentRequested?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
};
export type EnumAppStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppStatus;
};
export type AdmissionApplicationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    email?: boolean;
    nationalId?: boolean;
    departmentRequested?: boolean;
    status?: boolean;
    submittedAt?: boolean;
}, ExtArgs["result"]["admissionApplication"]>;
export type AdmissionApplicationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    email?: boolean;
    nationalId?: boolean;
    departmentRequested?: boolean;
    status?: boolean;
    submittedAt?: boolean;
}, ExtArgs["result"]["admissionApplication"]>;
export type AdmissionApplicationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fullName?: boolean;
    email?: boolean;
    nationalId?: boolean;
    departmentRequested?: boolean;
    status?: boolean;
    submittedAt?: boolean;
}, ExtArgs["result"]["admissionApplication"]>;
export type AdmissionApplicationSelectScalar = {
    id?: boolean;
    fullName?: boolean;
    email?: boolean;
    nationalId?: boolean;
    departmentRequested?: boolean;
    status?: boolean;
    submittedAt?: boolean;
};
export type AdmissionApplicationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fullName" | "email" | "nationalId" | "departmentRequested" | "status" | "submittedAt", ExtArgs["result"]["admissionApplication"]>;
export type $AdmissionApplicationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdmissionApplication";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fullName: string;
        email: string;
        nationalId: string;
        departmentRequested: string;
        status: $Enums.AppStatus;
        submittedAt: Date;
    }, ExtArgs["result"]["admissionApplication"]>;
    composites: {};
};
export type AdmissionApplicationGetPayload<S extends boolean | null | undefined | AdmissionApplicationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdmissionApplicationPayload, S>;
export type AdmissionApplicationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdmissionApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdmissionApplicationCountAggregateInputType | true;
};
export interface AdmissionApplicationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdmissionApplication'];
        meta: {
            name: 'AdmissionApplication';
        };
    };
    findUnique<T extends AdmissionApplicationFindUniqueArgs>(args: Prisma.SelectSubset<T, AdmissionApplicationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdmissionApplicationClient<runtime.Types.Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AdmissionApplicationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdmissionApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdmissionApplicationClient<runtime.Types.Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AdmissionApplicationFindFirstArgs>(args?: Prisma.SelectSubset<T, AdmissionApplicationFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdmissionApplicationClient<runtime.Types.Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AdmissionApplicationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdmissionApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdmissionApplicationClient<runtime.Types.Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AdmissionApplicationFindManyArgs>(args?: Prisma.SelectSubset<T, AdmissionApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AdmissionApplicationCreateArgs>(args: Prisma.SelectSubset<T, AdmissionApplicationCreateArgs<ExtArgs>>): Prisma.Prisma__AdmissionApplicationClient<runtime.Types.Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AdmissionApplicationCreateManyArgs>(args?: Prisma.SelectSubset<T, AdmissionApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AdmissionApplicationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdmissionApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AdmissionApplicationDeleteArgs>(args: Prisma.SelectSubset<T, AdmissionApplicationDeleteArgs<ExtArgs>>): Prisma.Prisma__AdmissionApplicationClient<runtime.Types.Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AdmissionApplicationUpdateArgs>(args: Prisma.SelectSubset<T, AdmissionApplicationUpdateArgs<ExtArgs>>): Prisma.Prisma__AdmissionApplicationClient<runtime.Types.Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AdmissionApplicationDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdmissionApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AdmissionApplicationUpdateManyArgs>(args: Prisma.SelectSubset<T, AdmissionApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AdmissionApplicationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdmissionApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AdmissionApplicationUpsertArgs>(args: Prisma.SelectSubset<T, AdmissionApplicationUpsertArgs<ExtArgs>>): Prisma.Prisma__AdmissionApplicationClient<runtime.Types.Result.GetResult<Prisma.$AdmissionApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AdmissionApplicationCountArgs>(args?: Prisma.Subset<T, AdmissionApplicationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdmissionApplicationCountAggregateOutputType> : number>;
    aggregate<T extends AdmissionApplicationAggregateArgs>(args: Prisma.Subset<T, AdmissionApplicationAggregateArgs>): Prisma.PrismaPromise<GetAdmissionApplicationAggregateType<T>>;
    groupBy<T extends AdmissionApplicationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdmissionApplicationGroupByArgs['orderBy'];
    } : {
        orderBy?: AdmissionApplicationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdmissionApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmissionApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AdmissionApplicationFieldRefs;
}
export interface Prisma__AdmissionApplicationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AdmissionApplicationFieldRefs {
    readonly id: Prisma.FieldRef<"AdmissionApplication", 'String'>;
    readonly fullName: Prisma.FieldRef<"AdmissionApplication", 'String'>;
    readonly email: Prisma.FieldRef<"AdmissionApplication", 'String'>;
    readonly nationalId: Prisma.FieldRef<"AdmissionApplication", 'String'>;
    readonly departmentRequested: Prisma.FieldRef<"AdmissionApplication", 'String'>;
    readonly status: Prisma.FieldRef<"AdmissionApplication", 'AppStatus'>;
    readonly submittedAt: Prisma.FieldRef<"AdmissionApplication", 'DateTime'>;
}
export type AdmissionApplicationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdmissionApplicationSelect<ExtArgs> | null;
    omit?: Prisma.AdmissionApplicationOmit<ExtArgs> | null;
    where: Prisma.AdmissionApplicationWhereUniqueInput;
};
export type AdmissionApplicationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdmissionApplicationSelect<ExtArgs> | null;
    omit?: Prisma.AdmissionApplicationOmit<ExtArgs> | null;
    where: Prisma.AdmissionApplicationWhereUniqueInput;
};
export type AdmissionApplicationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdmissionApplicationSelect<ExtArgs> | null;
    omit?: Prisma.AdmissionApplicationOmit<ExtArgs> | null;
    where?: Prisma.AdmissionApplicationWhereInput;
    orderBy?: Prisma.AdmissionApplicationOrderByWithRelationInput | Prisma.AdmissionApplicationOrderByWithRelationInput[];
    cursor?: Prisma.AdmissionApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdmissionApplicationScalarFieldEnum | Prisma.AdmissionApplicationScalarFieldEnum[];
};
export type AdmissionApplicationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdmissionApplicationSelect<ExtArgs> | null;
    omit?: Prisma.AdmissionApplicationOmit<ExtArgs> | null;
    where?: Prisma.AdmissionApplicationWhereInput;
    orderBy?: Prisma.AdmissionApplicationOrderByWithRelationInput | Prisma.AdmissionApplicationOrderByWithRelationInput[];
    cursor?: Prisma.AdmissionApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdmissionApplicationScalarFieldEnum | Prisma.AdmissionApplicationScalarFieldEnum[];
};
export type AdmissionApplicationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdmissionApplicationSelect<ExtArgs> | null;
    omit?: Prisma.AdmissionApplicationOmit<ExtArgs> | null;
    where?: Prisma.AdmissionApplicationWhereInput;
    orderBy?: Prisma.AdmissionApplicationOrderByWithRelationInput | Prisma.AdmissionApplicationOrderByWithRelationInput[];
    cursor?: Prisma.AdmissionApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdmissionApplicationScalarFieldEnum | Prisma.AdmissionApplicationScalarFieldEnum[];
};
export type AdmissionApplicationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdmissionApplicationSelect<ExtArgs> | null;
    omit?: Prisma.AdmissionApplicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdmissionApplicationCreateInput, Prisma.AdmissionApplicationUncheckedCreateInput>;
};
export type AdmissionApplicationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AdmissionApplicationCreateManyInput | Prisma.AdmissionApplicationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdmissionApplicationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdmissionApplicationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdmissionApplicationOmit<ExtArgs> | null;
    data: Prisma.AdmissionApplicationCreateManyInput | Prisma.AdmissionApplicationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdmissionApplicationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdmissionApplicationSelect<ExtArgs> | null;
    omit?: Prisma.AdmissionApplicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdmissionApplicationUpdateInput, Prisma.AdmissionApplicationUncheckedUpdateInput>;
    where: Prisma.AdmissionApplicationWhereUniqueInput;
};
export type AdmissionApplicationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AdmissionApplicationUpdateManyMutationInput, Prisma.AdmissionApplicationUncheckedUpdateManyInput>;
    where?: Prisma.AdmissionApplicationWhereInput;
    limit?: number;
};
export type AdmissionApplicationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdmissionApplicationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdmissionApplicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdmissionApplicationUpdateManyMutationInput, Prisma.AdmissionApplicationUncheckedUpdateManyInput>;
    where?: Prisma.AdmissionApplicationWhereInput;
    limit?: number;
};
export type AdmissionApplicationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdmissionApplicationSelect<ExtArgs> | null;
    omit?: Prisma.AdmissionApplicationOmit<ExtArgs> | null;
    where: Prisma.AdmissionApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdmissionApplicationCreateInput, Prisma.AdmissionApplicationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AdmissionApplicationUpdateInput, Prisma.AdmissionApplicationUncheckedUpdateInput>;
};
export type AdmissionApplicationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdmissionApplicationSelect<ExtArgs> | null;
    omit?: Prisma.AdmissionApplicationOmit<ExtArgs> | null;
    where: Prisma.AdmissionApplicationWhereUniqueInput;
};
export type AdmissionApplicationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdmissionApplicationWhereInput;
    limit?: number;
};
export type AdmissionApplicationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdmissionApplicationSelect<ExtArgs> | null;
    omit?: Prisma.AdmissionApplicationOmit<ExtArgs> | null;
};
export {};
