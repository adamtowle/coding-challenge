export interface INote {
    readonly id: number;
    readonly createdAt: Date;
    readonly user: string;
    note: string;
}