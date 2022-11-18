import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";



@Catch()
export class FlitroExcecaoHttp implements ExceptionFilter{
    
    private httpAdapter: AbstractHttpAdapter; 

    constructor(adapterHost: HttpAdapterHost){
        this.httpAdapter = adapterHost.httpAdapter;
    }

    catch(exception: Error, host: ArgumentsHost){
        const contexts = host.switchToHttp();
        const request = contexts.getRequest();
        const respost = contexts.getResponse();

        const { status, body } = exception instanceof HttpException 
        ?{
            status: exception.getStatus(),
            body: exception.getResponse()
        }
        :{
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            body: {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
               timestamp: new Date().toISOString(),
               message: exception.message,
               path: request.path
        
            }
        };
        this.httpAdapter.reply(respost, body, status);
    }
}