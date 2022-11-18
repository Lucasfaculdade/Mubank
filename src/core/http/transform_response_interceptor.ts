import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";
import {  Observable } from "rxjs";
import {  map } from "rxjs/operators";
import { NestRespose } from "./nest_response";

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor{

    private httpAdapter: AbstractHttpAdapter; 

    constructor(adapterHost: HttpAdapterHost){
        this.httpAdapter = adapterHost.httpAdapter;
    }
    
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            map((responseOfControler: NestRespose) => { 
                if(responseOfControler instanceof NestRespose){
                    const contexts = context.switchToHttp();
                    const response = contexts.getResponse();
                    const {headers, status, body} = responseOfControler;
                   
                    const headerName = Object.getOwnPropertyNames(headers);

                    headerName.forEach( headerName =>{
                        const headerValue = headers[headerName];
                        this.httpAdapter.setHeader(response, headerName, headerValue);
                    });

                    this.httpAdapter.status(response, status);

                    return body;
                }
                return responseOfControler;
            })
            );
    }

}


