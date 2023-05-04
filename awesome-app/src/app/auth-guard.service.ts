import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

// providedIn: 'root' will automatically configure a Provider in the bootstrap module(AppModule)
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  private userService: UserService;
  private router: Router;
  constructor() {

    this.userService = inject(UserService);
    this.router = inject(Router);
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
                          : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      if(this.userService.isAuthenticated()){
        return true;
      }
      else{

        this.router.navigate(["/login"]);
        return false;
      }
    
  }
}
