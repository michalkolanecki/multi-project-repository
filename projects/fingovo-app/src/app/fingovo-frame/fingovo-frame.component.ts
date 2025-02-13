import { Component } from "@angular/core";
import { IonContent } from "@ionic/angular/standalone";
import { FooterComponent } from "../components/footer/footer.component";
import { RouterOutlet } from "@angular/router";
import { NavigationComponent } from "../components/navigation/navigation.component";

@Component({
    selector: "app-fingovo-frame",
    templateUrl: "./fingovo-frame.component.html",
    styleUrls: ["./fingovo-frame.component.scss"],
    standalone: true,
    imports: [IonContent, FooterComponent, RouterOutlet, NavigationComponent],
})
export class FingovoFrameComponent {}
