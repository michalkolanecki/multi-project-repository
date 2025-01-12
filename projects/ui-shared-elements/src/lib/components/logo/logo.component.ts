import { Component, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { RouterLink } from "@angular/router";

/**
 * Component is responsible for displaying a logo.
 * You are able to customize the logo by passing additional parameters to inputs.
 *
 * Example usage:
 * <ui-shared-lib-logo
 *      [src="src/test/path"]
 *      [alt="Example of alt description"]
 *      [title="Example title"]
 *      [ariaLabel="Company logo"]>
 * <ui-shared-lib-logo/>
 */

@Component({
    selector: "ui-shared-lib-logo",
    templateUrl: "./logo.component.html",
    styleUrls: ["./logo.component.scss"],
    standalone: true,
    imports: [NgOptimizedImage, RouterLink],
})
export class LogoComponent {
    src = input<string>("");
    alt = input<string>("");
    ariaLabel = input<string>("");
    redirectTo = input<string>("");
    width = input<number>(200);
    height = input<number>(50);
}
