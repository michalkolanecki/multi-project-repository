import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";

/**
 * Component is responsible for displaying an image.
 * You are able to customize the image by passing additional parameters to inputs.
 *
 *  For customize use [class]="example-class" attribute.
 *
 * Example usage:
 * <ui-lib-image
 *      [src]="src/test/path"
 *      [alt]="Example of alt description"
 *      [title]="Example title"
 *      [class]="example-class">
 * <ui-lib-image/>
 */

@Component({
    selector: "ui-lib-image",
    templateUrl: "./image.component.html",
    styleUrls: ["./image.component.scss"],
    standalone: true,
    imports: [RouterLink, NgOptimizedImage],
})
export class ImageComponent {
    src = input<string>();
    alt = input<string>();
    redirectTo = input<string>();
}
