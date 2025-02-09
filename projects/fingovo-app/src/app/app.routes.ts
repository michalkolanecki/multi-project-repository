import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: () =>
            import("./fingovo-frame/fingovo-frame.component").then((c) => c.FingovoFrameComponent),
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
