/**
 *  Openlibrary
 *
 *  Api URL:
 *  https://openlibrary.org
 *
 *
 *  https://openlibrary.org/api/books?bibkeys=ISBN:0261102435&,ISBN:2724215907&format=json&jscmd=data
 *
 *  {
 *      0261102435: {
 *          title: "Lord of The Rings",
 *          number_of_pages: 1192
 *          ...
 *      }
 *      2724215907: {
 *          title: "Dune",
 *          number_of_pages: 723
 *          ..
 *      }
 * }
 *
 */

 export interface Book {}

 function fetchBooks() {}
 