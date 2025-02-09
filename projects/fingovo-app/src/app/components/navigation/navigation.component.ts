import { Component, inject, signal, viewChild } from "@angular/core";
import {
    IonButtons,
    IonCol,
    IonHeader,
    IonMenuButton,
    IonModal,
    IonRow,
    IonSearchbar,
    IonToolbar,
} from "@ionic/angular/standalone";
import { ButtonComponent, ImageComponent, IconComponent } from "ui-shared-elements";
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CUSTOM_ICONS } from "../../shared/custom-icons/custom-icons";
import { SidebarMenuComponent } from "../sidebar-menu/sidebar-menu.component";
import { DesktopMenuComponent } from "../desktop-menu/desktop-menu.component";

@Component({
    selector: "app-navigation",
    templateUrl: "./navigation.component.html",
    styleUrls: ["./navigation.component.scss"],
    standalone: true,
    imports: [
        IonRow,
        IonCol,
        ImageComponent,
        RouterLink,
        IonHeader,
        IonToolbar,
        IconComponent,
        IonSearchbar,
        ButtonComponent,
        IonModal,
        FormsModule,
        IonButtons,
        IonMenuButton,
        SidebarMenuComponent,
        DesktopMenuComponent,
    ],
})
export class NavigationComponent {
    readonly #router: Router = inject(Router);

    searchbarElement = viewChild<IonSearchbar>("searchbar");
    sidebarMenuContentId = signal<string>("main-content");

    GLOBAL_ICONS = CUSTOM_ICONS;

    navigateToResult(): void {
        const searchParams: string = this.searchbarElement()?.value as string;

        this.#router.navigate(["/search"], {
            queryParams: { q: searchParams, page: 1 },
        });
    }

    onDidPresent(): void {
        this.searchbarElement()?.setFocus();
    }
}
