import { IconDTO } from "./icon-dto";

export interface ItemDTO {
    labelText?: string;
    customClass?: string;
    customActiveLinkClass?: string | string[];
    hasArrow?: boolean;
    hasLines?: boolean;
    isButton?: boolean;
    redirectTo?: string;
    id?: string;
    hasIcon?: boolean;
    isRoot?: boolean;
    iconDetails?: IconDTO;
    children?: ItemDTO[];
}
