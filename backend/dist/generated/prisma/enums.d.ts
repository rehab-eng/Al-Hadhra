export declare const Role: {
    readonly STUDENT: "STUDENT";
    readonly ADMIN: "ADMIN";
    readonly STAFF: "STAFF";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const AppStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type AppStatus = (typeof AppStatus)[keyof typeof AppStatus];
