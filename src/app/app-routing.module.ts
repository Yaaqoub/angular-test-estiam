import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {PostViewComponent} from "./post/post-view/post-view.component";
import {UserViewComponent} from "./user/user-view/user-view.component";

const routes: Routes = [
    {
        path: 'users',
        component: UserViewComponent
    },
    {
        path: 'posts',
        component: PostViewComponent
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
