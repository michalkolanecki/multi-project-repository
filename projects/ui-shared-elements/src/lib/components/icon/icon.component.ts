import { Component, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

/**
 * Component is responsible for displaying an icon.
 * You are able to customize the icon by passing additional parameters to inputs e.g. alt and size.
 *
 * Example usage:
 * <ui-shared-lib-icon [src]="test/icon"><ui-shared-lib-icon/>
 */

@Component({
    selector: "ui-shared-lib-icon",
    templateUrl: "./icon.component.html",
    styleUrls: ["./icon.component.scss"],
    standalone: true,
    imports: [NgOptimizedImage],
})
export class IconComponent {
    ariaLabel = input<string>("");
    src = input<string>("");
    alt = input<string>("");
    size = input<number>(24);
    cursor = input<string>("pointer");
}
