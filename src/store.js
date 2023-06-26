import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=de92b4228bd14ab48f6ec9cbc93a7623',
    arrayFilms: [],
    filmSearch: ''
})