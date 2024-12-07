import { TestBed } from "@angular/core/testing";

import { UiSharedComponentsService } from "./ui-shared-components.service";

describe("UiSharedComponentsService", () => {
    let service: UiSharedComponentsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UiSharedComponentsService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
