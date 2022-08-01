import { IAddress } from "./address";

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
    interests: string | null;
    address: IAddress | null;
    profileImage: string
}


