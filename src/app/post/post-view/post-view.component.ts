import {Component, OnInit} from '@angular/core';
import {Post} from "../../interfaces/post.interface";
import {PostService} from "../post.service";

@Component({
    selector: 'app-post-view',
    templateUrl: './post-view.component.html',
    styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
    posts: Post[] = [];
    isPostsLoading: boolean = true;
    showCreatePost: boolean = false;

    constructor(private postService: PostService) {
    }

    ngOnInit(): void {

        this.postService.getPosts().subscribe(posts => {
            this.posts = posts;
            this.isPostsLoading = false;
        });
    }

    toggleCreatePost() {
        this.showCreatePost = !this.showCreatePost;
    }
}
