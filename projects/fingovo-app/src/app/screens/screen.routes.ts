import { Routes } from "@angular/router";

export const Screen_Routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        loadComponent: () =>
            import("./landing-page-screen/landing-page-screen.component").then(
                (c) => c.LandingPageScreenComponent
            ),
    },
    {
        path: "category",
        loadComponent: () =>
            import("./category-screen/category-screen.component").then(
                (c) => c.CategoryScreenComponent
            ),
    },
    {
        path: "article",
        loadComponent: () =>
            import("./article-screen/article-screen.component").then(
                (c) => c.ArticleScreenComponent
            ),
    },
    {
        path: "search",
        loadComponent: () =>
            import("./search-results-screen/search-results.component").then(
                (c) => c.SearchResultsComponent
            ),
    },
];
