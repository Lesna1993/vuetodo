const Tweet = Vue.component('tweet', {
    props: ['text', 'date'],
    template: '<div class="tweet"><h3>{text}}</h3><p>{{ date }}</p></div>'
});