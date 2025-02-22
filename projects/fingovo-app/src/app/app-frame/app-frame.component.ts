import { Component } from "@angular/core";
import { IonContent } from "@ionic/angular/standalone";
import { FooterComponent } from "../components/footer/footer.component";
import { RouterOutlet } from "@angular/router";
import { NavigationComponent } from "../components/navigation/navigation.component";

@Component({
    selector: "app-frame",
    templateUrl: "./app-frame.component.html",
    styleUrls: ["./app-frame.component.scss"],
    standalone: true,
    imports: [IonContent, FooterComponent, RouterOutlet, NavigationComponent],
})
export class AppFrameComponent {}
