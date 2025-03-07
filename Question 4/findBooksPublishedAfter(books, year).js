function findBooksPublishedAfter(books, year) {
    return books.filter(book => book.publicationYear > year).map(book => book.title);
  }
//   Explanation:
//   We use filter to get the books published after the given year.
//   After filtering, we use map to extract only the book titles and return the resulting array.
    