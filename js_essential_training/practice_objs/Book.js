class Book {
    constructor(
        color,
        weight,
        author,
        title,
        genre
    ) {
        this.color = color;
        this.weight = weight;
        this.author = author;
        this.title = title;
        this.genre = genre;
    }
    paintBook(newColor) {
        this.color = newColor;
    }
    tearOffAPage() {
        this.weight = this.weight - 0.01
    }
}

export default Book;