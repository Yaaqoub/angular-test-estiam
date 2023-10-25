import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {UserService} from "./user/user.service";
import {UserViewComponent} from './user/user-view/user-view.component';

import {MatTableModule} from '@angular/material/table';
import {PostViewComponent} from './post/post-view/post-view.component';
import {PostService} from "./post/post.service";
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PostCreateComponent} from './post/post-create/post-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from './app-routing.module';
import {TopBarComponent} from './common/top-bar/top-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SpinnerComponent} from './common/spinner/spinner.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        AppComponent,
        UserViewComponent,
        PostViewComponent,
        PostCreateComponent,
        TopBarComponent,
        SpinnerComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MatTableModule,
        MatTabsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatCardModule
    ],
    providers: [UserService, PostService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
