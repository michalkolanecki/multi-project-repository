import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: () =>
            import("./app-frame/app-frame.component").then((c) => c.AppFrameComponent),
        loadChildren: () => import("./screens/screen.routes").then((m) => m.Screen_Routes),
    },
    {
        path: "**",
        loadComponent: () =>
            import("./components/page-not-found/page-not-found.component").then(
                (mod) => mod.PageNotFoundComponent
            ),
    },
];
