import { Component, input } from "@angular/core";
import { IonButton } from "@ionic/angular/standalone";
import { ButtonFillType } from "./models/button-fill-type.model";
import { ButtonSize } from "./models/button-size.model";
import { RouterLink } from "@angular/router";
import { ButtonExpandType } from "./models/button-expand-type.model";

/**
 * Component is responsible for displaying a button.
 * You are able to customize the button by passing additional parameters to inputs
 * e.g. fill, btnText, size.
 *
 * Example usage:
 * <ui-lib-button [size]="small"
 *                [disabled]="true">
 * </ui-lib-icon>
 *
 * If a button should have an icon, then a property hasBtnIcon have to value "true"
 * and there is the content projector "<ng-content>" and you will be able to
 * add an icon there.
 *
 * Example usage:
 * <ui-lib-button [size]="small"
 *                [disabled]="true">
 *
 *               <ui-lib-icon [src]="src/example.svg"
 *                            [customClass]="test-icon-class">
 *              </ui-lib-icon>
 * </ui-lib-icon>
 *
 * https://ionicframework.com/docs/api/button
 */

@Component({
    selector: "ui-lib-button",
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.scss"],
    standalone: true,
    imports: [IonButton, RouterLink],
})
export class ButtonComponent {
    expandType = input<ButtonExpandType>();
    isDisabled = input<boolean>(false);
    btnFillType = input<ButtonFillType>();
    btnSize = input<ButtonSize>();
    btnText = input<string>("");
    hasBtnIcon = input<boolean>(false);
    redirectTo = input<string>();
    customClass = input<string>();
}
