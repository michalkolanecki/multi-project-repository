import { inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { mockMenuItems } from "./mock-data/mock-menu-data";
import { ItemDTO } from "./models/item-dto";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class FingovoApiService {
    readonly #http: HttpClient = inject(HttpClient);
    readonly #baseUrl = "ADD API PATH WHEN IT WILL READY";

    // public getMenuItems(): Observable<ItemDTO[]> {
    //   return this.#http.get<ItemDTO[]>(this.#baseUrl);
    // }
    public getMenuItems(): Observable<ItemDTO[]> {
        return of(mockMenuItems);
    }
}
