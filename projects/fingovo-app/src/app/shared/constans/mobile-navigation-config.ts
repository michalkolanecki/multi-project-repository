import { NavigationConfig, NavigationConfigLevel } from "common";
import { ItemModel } from "ui-shared-elements";

export const mobileNavigationConfig: NavigationConfig<ItemModel> = {
    mobile: [
        {
            level: NavigationConfigLevel.FIRST_LEVEL,
            value: {
                customClass: "base-sidebar-item first-level-sidebar-item",
                isRoot: true,
                hasLines: true,
                hasArrow: true,
            },
        },
        {
            level: NavigationConfigLevel.SECOND_LEVEL,
            value: {
                customClass: "base-sidebar-item second-level-sidebar-item",
                listCustomClass: "second-level-sidebar-list",
            },
        },
        {
            level: NavigationConfigLevel.THIRD_LEVEL,
            value: {
                customClass: "third-level-sidebar-item",
            },
        },
    ],
};
