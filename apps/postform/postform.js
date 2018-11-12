"use strict";

const postForm = {
    template: `
    <form ng-submit="$ctrl.onSubmit({newPost: $ctrl.post})">
        <p class="title">Title</p>
        <input ng-model="$ctrl.post.title" type="text" placeholder="Post title">
        <p class="thought">Thoughts</p>
        <textarea ng-model="$ctrl.post.body"></textarea>
        <button class="add-post">Add Post</button>
    </form>
        `,
    bindings: {
        onSubmit: "&"
    },
    controller: [function () {
        const vm = this;

    }]
};


angular
    .module("SocialApp")
    .component("postForm", postForm);