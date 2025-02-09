import { IconModel } from "../../icon/models/icon.model";

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
    iconDetails?: IconModel;
}

interface MenuItemModel extends DefaultItemModel {
    children?: MenuItemModel[];
}

export type ItemModel = DefaultItemModel & Partial<MenuItemModel>;
