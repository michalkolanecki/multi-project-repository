import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DataClientApiComponent } from "./data-client-api.component";

describe("DataClientApiComponent", () => {
    let component: DataClientApiComponent;
    let fixture: ComponentFixture<DataClientApiComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DataClientApiComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(DataClientApiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
