function groupBooksByAuthor(books) {
    return books.reduce((acc, book) => {
      if (!acc[book.author]) {
        acc[book.author] = [];
      }
      acc[book.author].push(book);
      return acc;
    }, {});
  }
//   Explanation:
//   We use reduce to iterate through the books array.
//   For each book, we check if the author is already a key in the accumulator object acc. If not, we initialize it with an empty array.
//   We then push the current book into the array for the respective author.
//   The result is an object where each author is a key, and the value is an array of books by that author.
