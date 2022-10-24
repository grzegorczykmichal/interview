import { fetchData } from "../src/fetchData";

describe("fetchData", () => {
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
    key              | expectedName
    ${"OL14933414W"} | ${"The Fellowship of the Ring"}
    ${"OL893415W"}   | ${"Dune"}
  `(
    "Should return book title ($expectedName)",
    async ({ key, expectedName }) => {
      const book = await fetchData("works", key);

      expect(book.title).toEqual(expectedName);
    }
  );
});
