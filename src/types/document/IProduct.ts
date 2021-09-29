import { Document } from "mongoose";

export interface IProduct extends Document {
    _id: string;
    Name: string;
    Price: number;
    createdAt?: string;
    updatedAt?: string;
}