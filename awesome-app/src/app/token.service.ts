import { UserService } from "./user.service";

export class TokenService extends UserService{

    private isAuth: boolean = false;
    private token: string = "";

    public override isAuthenticated(): boolean {
        return this.isAuth;
    }
    public override setAuthenticated(value: boolean): void {
        this.isAuth = value;
    }
    public override setAccessToken(token: string): void {
        this.token = token;
    }
    public override getAccessToken(): string {
        return this.token;
    }

}