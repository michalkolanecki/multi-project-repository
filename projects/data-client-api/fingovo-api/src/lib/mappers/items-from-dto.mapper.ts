import { ItemDTO } from "../models/item-dto";

export function itemsFromDto<T>(items: ItemDTO[]): T[] {
    return items.map((item) => {
        return {
            ...item,
            iconDetails: item.hasIcon ? item.iconDetails : null,
            children: item.children ? itemsFromDto(item.children) : [],
        };
    }) as T[];
}
