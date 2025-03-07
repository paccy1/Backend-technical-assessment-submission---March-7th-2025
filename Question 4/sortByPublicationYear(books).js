function sortByPublicationYear(books) {
    return books.sort((a, b) => a.publicationYear - b.publicationYear);
  }
//   Explanation:
//   We use sort to compare the publicationYear of each book.
//   The comparison function (a, b) => a.publicationYear - b.publicationYear sorts the books in ascending order of their publication year (oldest first).  