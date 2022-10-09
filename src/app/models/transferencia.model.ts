  export interface Transferencia {
      id?: any;
      value: number;
      conta: number | string;
      data?: Date;
  }

  export interface RootObject {
      transferencia: Transferencia[];
  }
