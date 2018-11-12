"use strict";

const socialPosts = {
    template: `
    <h1>My Thoughts</h1>
    <button class="add" ng-click="$ctrl.onDisplay()">New Thought</button>
    <section class="container">
    <post 
    delete-post="$ctrl.deletePost(exit)"
    post="post"
    ng-repeat="post in $ctrl.posts track by $index"></post>
    </section>
    <post-form  ng-if="$ctrl.display"
    on-submit="$ctrl.onSubmit(newPost)"></post-form>
    `,
    controller: [function () {
        const vm = this;
        vm.posts = [
           {title: "hi", body: "what a weekend"}
        ];
        vm.display = false
        vm.onSubmit = (newPost) => {
            vm.posts.push(newPost);
            vm.display = false
        }
        vm.onDisplay = () => {
            vm.display = true;
        }

        vm.deletePost = (exit) => {
            vm.posts.splice(vm.posts.indexOf(exit), 1)
        }
    }]
};


angular
    .module("SocialApp")
    .component("socialPosts", socialPosts);