import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "./user.service";

export const AuthGuardFn = (activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean=> {


    const userService = inject(UserService);
    const router = inject(Router);

    if(userService.isAuthenticated()){
        return true;
    }
    else{

   
        const requestRoute = state.url;
        router.navigate(["/login"], {queryParams: {redirectUrl: requestRoute}});
        return false;
    }

}