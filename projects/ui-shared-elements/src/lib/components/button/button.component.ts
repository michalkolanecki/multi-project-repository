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
 * By default, the button always has a fill type.
 * You can change fill property by using one of the ButtonFillType.
 *
 * Example usage:
 * <ui-lib-button [size]="small"
 *                [isDisabled]="true"
 *                [redirectTo]="example/path">
 * </ui-lib-button>
 *
 * If a button should have an icon, between open and close tags of the button you pass an icon.
 * To display a particular icon the property hasIcon have to value "true".
 * It will be displayed inside the content projector "<ng-content>".
 *
 * Example usage:
 * <ui-lib-button [size]="small"
 *                [isDisabled]="true"
 *                [hasIcon]="true">
 *               <ui-lib-icon [src]="src/example.svg"
 *                            [customClass]="test-icon-class">
 *              </ui-lib-icon>
 * </ui-lib-button>
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
    isDisabled = input<boolean>(false);
    labelText = input<string>();
    hasIcon = input<boolean>(false);
    redirectTo = input<string>();
    customClass = input<string>();
    expandType = input<ButtonExpandType>();
    fillType = input<ButtonFillType>();
    size = input<ButtonSize>();
}
