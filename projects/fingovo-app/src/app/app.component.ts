import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SwUpdate, VersionEvent } from "@angular/service-worker";
import { filter } from "rxjs";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    readonly #swUpdate: SwUpdate = inject(SwUpdate);

    constructor() {
        if (this.#swUpdate.isEnabled) {
            this.#swUpdate.versionUpdates
                .pipe(filter((event: VersionEvent) => event.type === "VERSION_READY"))
                .subscribe(() => {
                    if (
                        confirm(`
              Update available\n
              New version of application is available, please note that if you select Refresh Now, you will lose your current progress. If you choose Cancel, some modules might not load.
            `)
                    ) {
                        window.location.reload();
                    }
                });
        }
    }
}
