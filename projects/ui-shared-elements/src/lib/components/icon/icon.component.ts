import { Component, input } from "@angular/core";
import { IonIcon } from "@ionic/angular/standalone";

/**
 * Component is responsible for displaying an icon.
 * You are able to customize the icon by passing additional parameters to an icon object
 * e.g. name, src, ariaLabel.
 *
 * Example usage:
 * <ui-lib-icon [name]="name"
 *              [src]="src">
 * </ui-lib-icon>
 *
 * "Each app icon in Ionicons has a filled, outline and sharp variant.
 * These different variants are provided to make your app feel native to a variety of platforms.
 * The filled variant uses the default name without a suffix.
 * Note: Logo custom-icons do not have outline or sharp variants."
 *
 * Ionic supports using specific variant of the icons. You can use it provide with name.
 * e.g. "(name of the icon)(specific-variant)"
 * e.g. usage:
 * <ion-icon name="search-circle"></ion-icon> <!--filled-->
 * <ion-icon name="search-circle-outline"></ion-icon> <!--outline-->
 * <ion-icon name="search-circle-sharp"></ion-icon> <!--sharp-->
 *
 * https://ionic.io/ionicons/usage here is more details for customization custom-icons.
 *
 * Premium designed icons for use in web, iOS, Android, and desktop apps. Support for SVG.
 * Completely open source, MIT licensed and built by Ionic.
 *
 * You can download an icon and use src variable and set as custom icon or you can pass by using
 * a name variable and set proper icon.
 * https://ionic.io/ionicons
 */

@Component({
    selector: "ui-lib-icon",
    templateUrl: "./icon.component.html",
    styleUrls: ["./icon.component.scss"],
    standalone: true,
    imports: [IonIcon],
})
export class IconComponent {
    src = input<string>();
    name = input<string>();
    ariaLabel = input<string>();
    ariaHidden = input<boolean>();
    customClass = input<string>();
}
