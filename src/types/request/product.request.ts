export interface SaveReqProduct {
    Name: string;
    Price: number;
}

export interface UpdateReqProduct {
    _id: string;
    Name: string;
    Price: number;
}

export interface GetProduct {
    id: string;
}

export interface DeleteProduct {
    id: string
}