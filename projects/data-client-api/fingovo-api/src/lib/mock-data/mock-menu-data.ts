import { ItemDTO } from "../models/item-dto";

export const mockMenuItems: ItemDTO[] = [
    {
        labelText: "Kredyty i pożyczki",
        redirectTo: "/",
        id: "1",
        children: [
            {
                labelText: "Inwestycje 1a",
                id: "1-2",
                children: [
                    {
                        labelText: "Inwestycje 1a1",
                        id: "1-2",
                    },
                    {
                        labelText: "Oszczędności 1a2",
                        id: "1-3",
                    },
                ],
            },
            {
                labelText: "Oszczędności 1b",
                id: "1-3",
                children: [
                    {
                        labelText: "Inwestycje 1b1",
                        id: "1-2",
                    },
                    {
                        labelText: "Oszczędności 1b2",
                        id: "1-3",
                    },
                ],
            },
        ],
    },
    {
        labelText: "Konta bankowe",
        id: "2",
        children: [
            {
                labelText: "Poziom 2a",
                id: "1-1-1",
                children: [
                    {
                        labelText: "Inwestycje 2a1",
                        id: "1-2",
                    },
                    {
                        labelText: "Oszczędności 2a2",
                        id: "1-3",
                    },
                ],
            },
            {
                labelText: "Inwestycje 2b",
                id: "1-1-2",
                redirectTo: "/category",
                children: [
                    {
                        labelText: "Inwestycje 2b2",
                        id: "1-2",
                    },
                    {
                        labelText: "Oszczędności 2b2",
                        id: "1-3",
                    },
                ],
            },
            {
                labelText: "Oszczędności 2c",
                id: "1-1-3",
                children: [
                    {
                        labelText: "Inwestycje 2c2",
                        id: "1-2",
                    },
                    {
                        labelText: "Oszczędności 2c2",
                        id: "1-3",
                    },
                ],
            },
        ],
    },
    {
        labelText: "Karty kredytowe",
        id: "3",
        children: [
            {
                labelText: "Inwestycje 3a",
                id: "1-2",
                children: [
                    {
                        labelText: "Inwestycje 3a3",
                        id: "1-2",
                    },
                    {
                        labelText: "Oszczędności 3b3",
                        id: "1-3",
                    },
                ],
            },
            {
                labelText: "Oszczędności 3b",
                id: "1-3",
            },
        ],
    },
    {
        labelText: "Finanse Osobiste",
        id: "4",
        children: [
            {
                labelText: "Inwestycje 4a",
                id: "1-2",
                children: [
                    {
                        labelText: "Inwestycje 4a4",
                        id: "1-2",
                    },
                    {
                        labelText: "Oszczędności 4b4",
                        id: "1-3",
                    },
                ],
            },
            {
                labelText: "Oszczędności 4b",
                id: "1-3",
            },
        ],
    },
    {
        labelText: "Ubezpieczenia",
        redirectTo: "/category",
        id: "5",
        children: [
            {
                labelText: "Inwestycje 5",
                id: "1-2",
                children: [
                    {
                        labelText: "Inwestycje 5a5",
                        id: "1-2",
                    },
                    {
                        labelText: "Oszczędności 5b5",
                        id: "1-3",
                    },
                ],
            },
            {
                labelText: "Oszczędności 5b",
                id: "1-3",
            },
        ],
    },
    {
        labelText: "Inwestycje",
        redirectTo: "/category",
        id: "6",
        children: [
            {
                labelText: "Inwestycje 6a",
                id: "2-1",
            },
            {
                labelText: "Oszczędności 6b",
                id: "2-2",
            },
        ],
    },
    {
        labelText: "Oszczędności",
        redirectTo: "/category",
        id: "7",
        children: [
            {
                labelText: "Inwestycje 7a",
                id: "1-2",
            },
            {
                labelText: "Oszczędności 7b",
                id: "1-3",
                children: [
                    {
                        labelText: "Inwestycje 7a7",
                        id: "1-2",
                    },
                    {
                        labelText: "Oszczędności 7b7",
                        id: "1-3",
                    },
                ],
            },
        ],
    },
];
