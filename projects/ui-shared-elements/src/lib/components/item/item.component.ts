import { Component, computed, input } from "@angular/core";
import { IonItem, IonLabel } from "@ionic/angular/standalone";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { chevronForwardOutline } from "ionicons/icons";
import { NgClass } from "@angular/common";
import { IconComponent } from "../icon/icon.component";
import { ItemModel } from "./models/item.model";

/**
 * Component is responsible for displaying an item. It is basic item using inside a list.
 *
 * You are able to customize the item by passing additional parameters to item object
 * e.g. hasArrow, isButton, hasIcon.
 * You are passing particular details with item object which has the details of the item.
 *
 * Example usage:
 * <ui-lib-item [item]="exampleItem">
 * </ui-lib-item>
 *
 * If you want to customize styles by using a custom class, you should override ionic styles.
 * Override order: ionic item tag, custom class and ::part()
 * Example of usage:
 * ion-item.test-item-class::part(native) {
 *   color: #FFFFF;
 * }
 *
 * HasIcon and iconDetails property should be true,
 * if we want to display an icon and set proper details of it.
 * It will be displayed between item element tags.
 * Icon details properties are related to ui-lib-icon element.
 * There are more details about setting an icon.
 *
 * https://ionicframework.com/docs/api/item
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
    arrowIconType = computed(() => (this.item()?.hasArrow ? this.#arrowIcon : ""));
    itemLine = computed(() => (this.item()?.hasLines ? "full" : "none"));
}
