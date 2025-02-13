import { Component } from "@angular/core";
import { HeroSectionComponent } from "../../components/sections/hero-section/hero-section.component";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-landing-page-screen",
    templateUrl: "./landing-page-screen.component.html",
    styleUrls: ["./landing-page-screen.component.scss"],
    standalone: true,
    imports: [HeroSectionComponent, FormsModule],
})
export class LandingPageScreenComponent {}
