import { NavigationConfigLevel } from "../../enums/navigation-config-level.enum";

interface NavigationConfigElement<T> {
    level: NavigationConfigLevel;
    value: T;
}

export interface NavigationConfig<T> {
    mobile?: NavigationConfigElement<T>[];
    desktop?: NavigationConfigElement<T>[];
    default?: NavigationConfigElement<T>[];
}
