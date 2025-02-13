import { Component, inject, OnDestroy, signal } from "@angular/core";
import { FingovoApiService } from "fingovo-api";
import { toSignal } from "@angular/core/rxjs-interop";
import {
    IonCol,
    IonGrid,
    IonLabel,
    IonRow,
    IonSegment,
    IonSegmentButton,
    IonSegmentContent,
    IonSegmentView,
    Platform,
} from "@ionic/angular/standalone";
import { ButtonComponent, ImageComponent } from "ui-shared-elements";
import { SegmentDetails } from "../../../shared/models/hero-section/segment-details.model";
import { DeviceBreakpoints } from "common";
import { Subscription } from "rxjs";

@Component({
    selector: "app-hero-section",
    templateUrl: "./hero-section.component.html",
    styleUrls: ["./hero-section.component.scss"],
    standalone: true,
    imports: [
        IonSegment,
        IonSegmentButton,
        IonLabel,
        IonSegmentView,
        IonSegmentContent,
        ImageComponent,
        ButtonComponent,
        IonGrid,
        IonRow,
        IonCol,
    ],
})
export class HeroSectionComponent implements OnDestroy {
    readonly #platform: Platform = inject(Platform);
    readonly #fingovoApiService: FingovoApiService = inject(FingovoApiService);
    #subscriptions = new Subscription();

    #initialHeroSectionDetails = toSignal(this.#fingovoApiService.heroSectionDetails(), {
        initialValue: {
            title: "",
            subtitle: "",
            segmentsList: [],
        },
    });

    sectionTextDetails = signal<{ title?: string; subtitle?: string }>({});
    segmentListDetails = signal<SegmentDetails[]>([]);
    isScrollable = signal<boolean>(false);

    constructor() {
        this.setInitialValues();
        this.subscribeResize();
    }

    ngOnDestroy(): void {
        this.unsubscribeResize();
    }

    private setInitialValues(): void {
        this.sectionTextDetails.set({
            title: this.#initialHeroSectionDetails().title,
            subtitle: this.#initialHeroSectionDetails().subtitle,
        });

        this.segmentListDetails.set(
            this.#initialHeroSectionDetails().segmentsList as SegmentDetails[]
        );
    }

    private subscribeResize(): void {
        this.#subscriptions = this.#platform.resize.subscribe(async () => {
            this.isScrollable.set(!(this.#platform.width() > DeviceBreakpoints.desktop));
        });
    }

    private unsubscribeResize(): void {
        if (this.#subscriptions) {
            this.#subscriptions.unsubscribe();
        }
    }
}
