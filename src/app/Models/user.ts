export class User {

    id: number;
    firstname: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    sexe: string;
    role: UserRole;
    version: number;

    constructor() {
        this.id = 0;
        this.firstname = "",
            this.lastName = "";
        this.email = "";
        this.password = "";
        this.age = 0;
        this.sexe = "";
        this.role = UserRole.USER;
        this.version = 0;
    }


}
export enum UserRole {
    USER,
    ADMIN
}