import { Component, input, output } from "@angular/core";
import { IonList } from "@ionic/angular/standalone";
import { ItemComponent } from "../../components/item/item.component";
import { ItemModel } from "../../components/item/models/item.model";

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
