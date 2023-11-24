import { Response } from "@angular/http";
import { Observable } from "rxjs";

/* Classe para gerenciar erros */
export class ErrorHandler {
    /* método estático que recebe o parametro erro
    do tipo Response ou any */
    static handleError(error: Response | any){
        let errorMessage: string
        if(error instanceof Response){
            errorMessage = `Erro ${error.status} ao a cessar a URL ${error.url} - ${error.statusText}`
        }else{
            errorMessage = error.toString()
        }
        console.log(errorMessage)
        return Observable.throw(errorMessage)

    }
}