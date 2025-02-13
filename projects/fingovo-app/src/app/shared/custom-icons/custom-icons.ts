interface IconModel {
    customClass: string;
    name: string;
    ariaLabel: string;
    ariaHidden: boolean;
    src?: string;
}

export const CUSTOM_ICONS: { [key: string]: IconModel } = {
    navigationSearchIcon: {
        customClass: "navigation__search-icon",
        name: "search",
        ariaLabel: "Wyszukiwanie",
        ariaHidden: false,
    },
    searchbarCloseIcon: {
        customClass: "searchbar__close-icon",
        name: "close",
        ariaLabel: "Zamknij panel wyszukiwania",
        ariaHidden: false,
    },
    sidebarCloseIcon: {
        customClass: "sidebar__close-icon",
        name: "close",
        ariaLabel: "Zamknij boczne menu",
        ariaHidden: false,
    },
    sidebarBackIcon: {
        customClass: "sidebar__back-icon",
        name: "chevron-back-outline",
        ariaLabel: "Cofnij do poprzedniego menu",
        ariaHidden: false,
    },
};
