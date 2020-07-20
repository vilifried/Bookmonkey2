import {BookRaw} from "./book-raw";
import {Book} from "./book";

export class BookFactory {
    static fromRaw(b: BookRaw): Book {
        return {
            ...b,
            published: new Date(b.published)
        };
    }

    static empty(): Book {
        return {
            isbn: '',
            title: '',
            authors: [''],
            published: new Date(),
            subtitle: '',
            rating: 0,
            thumbnails: [
                { url: '', title: '' }
            ],
            description: ''
        };
    }
}
