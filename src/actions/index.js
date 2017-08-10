export function selectBook(book) {
  // Returning an action (object with a type property).
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}