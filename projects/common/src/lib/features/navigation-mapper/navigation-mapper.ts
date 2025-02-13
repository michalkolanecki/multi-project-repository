import { NavigationConfig } from "../../models/navigation-models/navigation-config.model";
import { NavigationConfigType } from "../../enums/navigation-config-type.enum";
import { NavigationConfigLevel } from "../../enums/navigation-config-level.enum";

export function mapNavigationConfig<T extends { children?: T[] }>(
    items: T[],
    deviceType: NavigationConfigType,
    config: Partial<NavigationConfig<T>>,
    level: NavigationConfigLevel = NavigationConfigLevel.FIRST_LEVEL
): T[] {
    return items.map((item) => {
        let deviceConfig;

        switch (deviceType) {
            case NavigationConfigType.MOBILE:
                deviceConfig = config.mobile;
                break;
            case NavigationConfigType.DESKTOP:
                deviceConfig = config.desktop;
                break;
            default:
                deviceConfig = config.default;
        }

        const navigationConfigLevelDetails = deviceConfig?.find(
            (item) => item.level === level
        )?.value;

        return {
            ...item,
            ...navigationConfigLevelDetails,
            children: item.children
                ? mapNavigationConfig(item.children, deviceType, config, level + 1)
                : [],
        } as T;
    });
}
