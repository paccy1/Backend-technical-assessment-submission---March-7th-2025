function generateBookSummaries(books) {
    return books.map(book => `${book.title} by ${book.author} (${book.publicationYear})`);
  }
//   Explanation:
//   We use map to iterate over the books array.
//   For each book, we construct a string summarizing the book in the specified format and return the resulting array of summaries.  