export interface Transferencia {
    id: any;
    value: number;
    conta: string;
    data: Date;
}

export interface RootObject {
    transferencia: Transferencia[];
}



