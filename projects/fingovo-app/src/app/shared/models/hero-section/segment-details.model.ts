export interface SegmentDetails {
    id?: string;
    name?: string;
    description?: string;
    imageDetails?: {
        src: string;
        alt: string;
    };
    title?: string;
    buttonText?: string;
    redirectTo?: string;
}
