import { fetchBooks } from "../src/fetchBooks";

describe("fetchBooks", () => {
  it.each([
    {
      isbn: "ISBN:0261102435",
      expectedBook: { title: "The Lord of the Rings", number_of_pages: 1193 },
    },
    {
      isbn: "ISBN:2724215907",
      expectedBook: { title: "Dune", number_of_pages: undefined },
    },
  ])("Should work for single ISBN", async ({ isbn, expectedBook }) => {
    const book = await fetchBooks(isbn);

    expect(book.title).toEqual(expectedBook.title);
    expect(book.number_of_pages).toEqual(expectedBook.number_of_pages);
  });

  it.each([
    {
      isbns: ["ISBN:0261102435", "ISBN:2724215907"],
      expectedTitles: ["The Lord of the Rings", "Dune"],
      expectedPages: [1193],
    },
  ])(
    "Should work for multiple ISBNs",
    async ({ isbns, expectedTitles, expectedPages }) => {
      const books = await fetchBooks(isbns);

      expect(books.map(({ title }) => title)).toEqual(expectedTitles);
      expect(books.map(({ number_of_pages }) => number_of_pages)).toEqual(
        expectedPages
      );
    }
  );
});
