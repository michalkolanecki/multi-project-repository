interface DefaultItemModel {
    labelText?: string;
    customClass?: string;
    customActiveLinkClass?: string | string[];
    listCustomClass?: string;
    hasArrow?: boolean;
    hasLines?: boolean;
    isButton?: boolean;
    redirectTo?: string;
    id?: string;
    hasIcon?: boolean;
    isRoot?: boolean;
    iconDetails?: {
        src: string;
        name: string;
        ariaLabel: string;
        ariaHidden: boolean;
        customClass: string;
    };
}

interface MenuItemModel extends DefaultItemModel {
    children?: MenuItemModel[];
}

export type ItemModel = DefaultItemModel & Partial<MenuItemModel>;
