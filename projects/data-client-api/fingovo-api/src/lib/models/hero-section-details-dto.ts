interface SegmentDetailsDTO {
    id?: string;
    name?: string;
    imageDetails?: {
        src: string;
        alt: string;
    };
    title?: string;
    description?: string;
    buttonText?: string;
    redirectTo?: string;
}

export interface HeroSectionDetailsDTO {
    title?: string;
    subtitle?: string;
    segmentsList?: SegmentDetailsDTO[];
}
