export class NestRespose{
    status: number;
    headers: Object;
    body: Object;

    constructor(response: NestRespose){
        Object.assign(this, response);
    }
}