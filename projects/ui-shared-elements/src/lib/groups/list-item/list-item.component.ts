import { Component, input, output } from "@angular/core";
import { IonList } from "@ionic/angular/standalone";
import { ItemComponent } from "../../components/item/item.component";
import { ItemModel } from "../../components/item/models/item.model";

/**
 * Component is responsible for displaying a list of items.
 * You are able to customize the list by passing additional class to listCustomClass parameter.
 * There is also Output Reference that emit a particular item which was clicked.
 *
 * Example usage:
 * <ui-lib-list-item
 *  [items]="example-items"
 *  [listCustomClass]="example-custom-class">
 * </ui-lib-list-item>
 */

@Component({
    selector: "ui-lib-list-item",
    templateUrl: "./list-item.component.html",
    styleUrls: ["./list-item.component.scss"],
    standalone: true,
    imports: [IonList, ItemComponent],
})
export class ListItemComponent {
    readonly items = input<ItemModel[]>();
    readonly listCustomClass = input<string>();

    clickedItem = output<ItemModel>();

    onClickedItem(item: ItemModel): void {
        if (item.isRoot) {
            this.clickedItem.emit(item);
        }

        return;
    }
}
