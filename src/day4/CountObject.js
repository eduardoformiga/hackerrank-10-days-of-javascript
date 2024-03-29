/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  const isEqual = ({ x, y }) => x === y
  const resultArray = objects.filter(isEqual)
  return resultArray.length
}
