import { Injectable } from "@angular/core";
import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "app/app.api";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from "app/app.error-handler";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

/* Para uma classe de serviço poder receber outro
serviço via injeção de dependencias, é necessário 
colocar o decorator @Injectable */
@Injectable()
export class restaurantsService {
    
    /* ao encapsular o argumento da função
    o angular cuida de instanciá-lo automaticamente */
    constructor(private http: Http) { }

    restaurants(): Observable<Restaurant[]> {
        /* Método restaurants retornas o atributo rests, uma array que recebe objetos do tipo Restaurant */
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)

        /* Não é necessário instanciar a classe, pois o método
        usado é estático (static) */
        
        /* o método http tem um retorno do tipo Observable<response>
        por isso, eu tive que mudar o retorno do método restaurants().
        O .map é necessário, pois a response tem vários dados e nós
        queremos filtrar apenas a response.json dessa requisição*/
    }

    restaurantsById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}