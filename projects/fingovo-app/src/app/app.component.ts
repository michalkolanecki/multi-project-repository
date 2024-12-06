import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly #swUpdate: SwUpdate = inject(SwUpdate);

  ngOnInit() {
    //
    // TEMPORARY, SHOULD BE FIXED, ITS RELOAD PERMANENTLY
    //
    // if (this.#swUpdate.isEnabled) {
    //   this.#swUpdate.versionUpdates.subscribe(() => {
    //     if (confirm('New version available. Load New Version?')) {
    //       window.location.reload();
    //     }
    //   });
    // }
  }
}
