import { fetchData } from "../src/fetchData";

describe.skip("fetchData", () => {
  it.each`
    key           | expectedName        | expectedBirthDate
    ${"OL26320A"} | ${"J.R.R. Tolkien"} | ${"3 January 1892"}
    ${"OL79034A"} | ${"Frank Herbert"}  | ${"8 October 1920"}
  `(
    "Should return author ($expectedName, born $expectedBirthDate)",
    async ({ key, expectedName, expectedBirthDate }) => {
      const author = await fetchData("authors", key);

      expect(author.name).toEqual(expectedName);
      expect(author.birth_date).toEqual(expectedBirthDate);
    }
  );

  it.each`
    key              | expectedName                    | expectedNumberOfPages
    ${"OL14933414W"} | ${"The Fellowship of the Ring"} | ${1193}
    ${"OL893415W"}   | ${"Dune"}                       | ${undefined}
  `(
    "Should return book title ($expectedName, pages $expectedNumberOfPages)",
    async ({ key, expectedName, expectedNumberOfPages }) => {
      const book = await fetchData("works", key);

      expect(book.title).toEqual(expectedName);
      expect(book.number_of_pages).toEqual(expectedNumberOfPages);
    }
  );
});
