import { Component, input } from "@angular/core";
import { IonIcon } from "@ionic/angular/standalone";
import { IconModel } from "../icon/models/icon.model";

/**
 * Component is responsible for displaying an icon.
 * You are able to customize the icon by passing additional parameters to icon object
 * e.g. iconVariant, iconSrc, iconAriaLabel.
 *
 * Example usage:
 * <ui-lib-icon [iconDetails]="icon">
 * </ui-lib-icon>
 *
 * "Each app icon in Ionicons has a filled, outline and sharp variant.
 * These different variants are provided to make your app feel native to a variety of platforms.
 * The filled variant uses the default name without a suffix.
 * Note: Logo custom-icons do not have outline or sharp variants."
 *
 * <ion-icon name="search-circle"></ion-icon> <!--filled-->
 * <ion-icon name="search-circle-outline"></ion-icon> <!--outline-->
 * <ion-icon name="search-circle-sharp"></ion-icon> <!--sharp-->
 *
 * https://ionic.io/ionicons/usage here is more details for customization custom-icons.
 * https://ionic.io/ionicons custom-icons.
 */

@Component({
    selector: "ui-lib-icon",
    templateUrl: "./icon.component.html",
    styleUrls: ["./icon.component.scss"],
    standalone: true,
    imports: [IonIcon],
})
export class IconComponent {
    iconDetails = input<IconModel>();
}
