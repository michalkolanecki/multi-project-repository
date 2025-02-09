import { NavigationConfig, NavigationConfigLevel } from "common";
import { ItemModel } from "ui-shared-elements";

export const desktopNavigationConfig: NavigationConfig<ItemModel> = {
    desktop: [
        {
            level: NavigationConfigLevel.FIRST_LEVEL,
            value: {
                customClass: "first-level-desktop-item",
                customActiveLinkClass: "first-level-desktop-active-link",

                isRoot: true,
            },
        },
        {
            level: NavigationConfigLevel.SECOND_LEVEL,
            value: {
                customClass: "second-level-desktop-item",
                listCustomClass: "second-level-desktop-list",
            },
        },
        {
            level: NavigationConfigLevel.THIRD_LEVEL,
            value: {
                customClass: "third-level-desktop-item",
                listCustomClass: "third-level-desktop-list",
            },
        },
    ],
};
