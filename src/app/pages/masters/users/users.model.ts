export class Users {
    id: string;
    name: string;
    email: string;
    mobile: string;
    permissionLevel: Number;
    constructor(Init?: Partial<Users>) {
        Object.assign(this,Init);
    }
}

