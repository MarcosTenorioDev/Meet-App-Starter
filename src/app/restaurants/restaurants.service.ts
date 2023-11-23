import { Injectable } from "@angular/core";
import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "app/app.api";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

@Injectable()
export class restaurantsService {
    

    constructor(private http: Http) { }

    restaurants(): Observable<Restaurant[]> {
        /* Método restaurants retornas o atributo rests, uma array que recebe objetos do tipo Restaurant */
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())

        /* o método http tem um retorno do tipo Observable<response>
        por isso, eu tive que mudar o retorno do método restaurants().
        O .map é necessário, pois a response tem vários dados e nós
        queremos filtrar apenas a response.json dessa requisição*/
    }
}