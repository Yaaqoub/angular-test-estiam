import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {PostViewComponent} from "./post/post-view/post-view.component";
import {UserViewComponent} from "./user/user-view/user-view.component";
import {LoginFormComponent} from "./auth/login-form/login-form.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: 'users',
        component: UserViewComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'posts',
        component: PostViewComponent,
        canActivate: [AuthGuard]
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {
}
