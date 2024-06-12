export interface Lead {
    id?: string;
    leadNr?: number;
    name: string;
    company: string;
    email: string;
    telNumber: number | string;
    street: string;
    zipCode: number | string;
    city: string;
    product: string;
    status: string;
    timestamp: number;
}