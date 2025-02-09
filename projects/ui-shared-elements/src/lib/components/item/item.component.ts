import { Component, computed, input } from "@angular/core";
import { IonItem, IonLabel } from "@ionic/angular/standalone";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { chevronForwardOutline } from "ionicons/icons";
import { NgClass } from "@angular/common";
import { IconComponent } from "../icon/icon.component";
import { ItemModel } from "./models/item.model";

/**
 * Component is responsible for displaying an item.
 * You are able to customize the item by passing additional parameters to item object
 * e.g. hasArrow, isButton, hasIcon.
 *
 * Example usage:
 * <ui-lib-item [item]="exampleItem">
 * </ui-lib-item>
 *
 * If you customize styles by using a custom class,
 * to override native style use ionic item tag, custom class and ::part()
 * Example of usage:
 * ion-item.test-item-class::part(native) {
 *   color: #FFFFF;
 * }
 *
 * HasIcon property should be true if we want to display an icon and set proper details.
 * IconVariant properties are related to ui-lib-icon element.
 * There are more details about setting an icon.
 */

@Component({
    selector: "ui-lib-item",
    templateUrl: "./item.component.html",
    styleUrls: ["./item.component.scss"],
    standalone: true,
    imports: [IonItem, IonLabel, RouterLink, RouterLinkActive, NgClass, IconComponent],
})
export class ItemComponent {
    readonly #arrowIcon = chevronForwardOutline;

    item = input<ItemModel>();
    arrowIconVariant = computed(() => (this.item()?.hasArrow ? this.#arrowIcon : ""));
    itemLine = computed(() => (this.item()?.hasLines ? "full" : "none"));
}
