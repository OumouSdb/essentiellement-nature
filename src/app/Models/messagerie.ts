export class Messagerie {
    id: number;
    lastName: string;
    firstName: string;
    email: string;
    message: string;
    version: number;


    constructor() {
        this.id = 0;
        this.lastName = "";
        this.firstName = "";
        this.email = "";
        this.message = "";
        this.version = 0;
    }
}