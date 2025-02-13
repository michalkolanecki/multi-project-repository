import { Component, inject, signal } from "@angular/core";
import { ItemModel, ListItemComponent } from "ui-shared-elements";
import { mapNavigationConfig, NavigationConfigType } from "common";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";
import { FingovoApiService, itemsFromDto } from "fingovo-api";
import { desktopNavigationConfig } from "../../shared/constans/desktop-navigation-config";
import { IonCol, IonPopover, IonRow } from "@ionic/angular/standalone";

@Component({
    selector: "app-desktop-menu",
    templateUrl: "./desktop-menu.component.html",
    styleUrls: ["./desktop-menu.component.scss"],
    standalone: true,
    imports: [ListItemComponent, IonPopover, IonRow, IonCol],
})
export class DesktopMenuComponent {
    readonly #fingovoApiService: FingovoApiService = inject(FingovoApiService);
    readonly #initialDesktopMenuItems = toSignal(
        this.#fingovoApiService
            .getMenuItems()
            .pipe(map((response) => itemsFromDto<ItemModel>(response))),
        {
            initialValue: [],
        }
    );

    readonly currentMainMenuItems = signal<ItemModel[]>(this.getDesktopConfigItems());

    // TODO: TO REFACTOR MENU ITEMS
    readonly currentSubMenuItems = signal<ItemModel[]>([]);
    readonly activeSubmenuItems = signal<ItemModel[]>([]);
    isOpen = signal<boolean>(false);

    onMenuOpenItem(item: ItemModel): void {
        this.currentSubMenuItems.set(
            (item.children as ItemModel[]).map((item) => {
                this.activeSubmenuItems.set(item.children ?? []);
                return {
                    ...item,
                    hasArrow: !!(item.children && item.children.length > 0),
                    children: [],
                };
            })
        );
        this.isOpen.set(true);

        return;
    }

    private getDesktopConfigItems(): ItemModel[] {
        return mapNavigationConfig(
            this.#initialDesktopMenuItems(),
            NavigationConfigType.DESKTOP,
            desktopNavigationConfig
        );
    }
}
