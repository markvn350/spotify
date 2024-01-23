import { inject } from "@angular/core"
import { CookieService } from "ngx-cookie-service"



export const getCurrentUser = (): {[key: string]: string}=>{

    const _cookieService = inject(CookieService);
    const token = _cookieService.get("token") as string;

    return {email: "test1@hmail.com", id: "123", role: "admin"}
}