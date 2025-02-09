import { IconModel } from "ui-shared-elements";

export const CUSTOM_ICONS: { [key: string]: IconModel } = {
    navigationSearchIcon: {
        iconCustomClass: "navigation__search-icon",
        iconVariant: "search",
        iconAriaLabel: "Wyszukiwanie",
        iconAriaHidden: false,
    },
    searchbarCloseIcon: {
        iconCustomClass: "searchbar__close-icon",
        iconVariant: "close",
        iconAriaLabel: "Zamknij panel wyszukiwania",
        iconAriaHidden: false,
    },
    sidebarCloseIcon: {
        iconCustomClass: "sidebar__close-icon",
        iconVariant: "close",
        iconAriaLabel: "Zamknij boczne menu",
        iconAriaHidden: false,
    },
    sidebarBackIcon: {
        iconCustomClass: "sidebar__back-icon",
        iconVariant: "chevron-back-outline",
        iconAriaLabel: "Cofnij do poprzedniego menu",
        iconAriaHidden: false,
    },
};
