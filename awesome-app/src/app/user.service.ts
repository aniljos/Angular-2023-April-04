export abstract class UserService{

   public abstract isAuthenticated(): boolean;
   public abstract setAuthenticated(value: boolean): void;

   public abstract setAccessToken(token: string): void;
   public abstract getAccessToken(): string;
}