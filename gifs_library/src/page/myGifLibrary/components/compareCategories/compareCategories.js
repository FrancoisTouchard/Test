// function to handle gifs display by category in alphabetical order
// uncategorized gifs go to the end of the list
export function compareCategories(a, b) {
  if (!a.category && !b.category) {
    return 1;
  } else if (!a.category) {
    return 1;
  } else if (!b.category) {
    return -1;
  } else {
    return a.category > b.category ? 1 : -1;
  }
}
