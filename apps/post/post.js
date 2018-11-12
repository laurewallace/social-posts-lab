"use strict";

const post = {
    template: `
    <section class="posts"> 
        <section>
        <h3>{{$ctrl.post.title}}</h3>
        <p>{{$ctrl.post.body}}</p>
        </section>
        <button ng-click="$ctrl.deletePost({exit: $ctrl.post})">X</button>
    </section>    
    `,
    bindings: {
        post: "<",
        deletePost: "&"
    },
    controller: [function () {
        const vm = this;

    }]
};


angular
    .module("SocialApp")
    .component("post", post);