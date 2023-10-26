import showArray from "/src/components/Data/Api";

const sortedArr = showArray.sort((a, b) => {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }
  return 0;
});

export default sortedArr;