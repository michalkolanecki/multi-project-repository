import { Component, inject, input, signal } from "@angular/core";
import { CUSTOM_ICONS } from "../../shared/custom-icons/custom-icons";
import { IconComponent, ItemModel, ListItemComponent } from "ui-shared-elements";
import {
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuToggle,
    IonTitle,
    IonToolbar,
} from "@ionic/angular/standalone";
import { mapNavigationConfig, NavigationConfigType } from "common";
import { FingovoApiService, itemsFromDto } from "fingovo-api";
import { mobileNavigationConfig } from "../../shared/constans/mobile-navigation-config";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";

@Component({
    selector: "app-sidebar-menu",
    templateUrl: "./sidebar-menu.component.html",
    styleUrls: ["./sidebar-menu.component.scss"],
    standalone: true,
    imports: [
        IconComponent,
        IonContent,
        IonMenu,
        IonTitle,
        IonMenuToggle,
        ListItemComponent,
        IonHeader,
        IonToolbar,
    ],
})
export class SidebarMenuComponent {
    protected readonly GLOBAL_ICONS = CUSTOM_ICONS;
    readonly #fingovoApiService: FingovoApiService = inject(FingovoApiService);

    readonly menuContentId = input<string>("");
    readonly #initialSidebarMenuItems = toSignal(
        this.#fingovoApiService
            .getMenuItems()
            .pipe(map((response) => itemsFromDto<ItemModel>(response))),
        {
            initialValue: [],
        }
    );

    readonly currentMenuItems = signal<ItemModel[]>(this.getSidebarConfigItems());

    currentItem = signal<ItemModel>({} as ItemModel);

    onMenuOpenItem(item: ItemModel): void {
        if (item.children && item.children?.length) {
            this.currentItem.set(item);
            this.currentMenuItems.set(item.children);
        }

        return;
    }

    onBackClick(): void {
        this.setInitialValues();
    }

    onMenuCloseHandler(): void {
        this.setInitialValues();
    }

    private setInitialValues(): void {
        this.currentItem.set({});
        this.currentMenuItems.set(this.getSidebarConfigItems());
    }

    private getSidebarConfigItems(): ItemModel[] {
        return mapNavigationConfig(
            this.#initialSidebarMenuItems(),
            NavigationConfigType.MOBILE,
            mobileNavigationConfig
        );
    }
}
