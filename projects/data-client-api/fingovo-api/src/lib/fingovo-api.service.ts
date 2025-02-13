import { inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { mockMenuItems } from "./mock-data/mock-menu-data";
import { ItemDTO } from "./models/item-dto";
import { HttpClient } from "@angular/common/http";
import { HeroSectionDetailsDTO } from "./models/hero-section-details-dto";
import { heroSectionDetailsMOCK } from "./mock-data/hero-section-details-mock";

@Injectable({
    providedIn: "root",
})
export class FingovoApiService {
    readonly #http: HttpClient = inject(HttpClient);
    readonly #baseUrl = "ADD API PATH WHEN IT WILL READY";

    // public getMenuItems(): Observable<ItemDTO[]> {
    //     return this.#http.get<ItemDTO[]>(this.#baseUrl);
    // }

    public getMenuItems(): Observable<ItemDTO[]> {
        return of(mockMenuItems);
    }

    public heroSectionDetails(): Observable<HeroSectionDetailsDTO> {
        return of(heroSectionDetailsMOCK);
    }
}
