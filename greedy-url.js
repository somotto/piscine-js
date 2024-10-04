const getURL = (dataSet) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return dataSet.match(urlRegex) || [];
};
  
const greedyQuery = (dataSet) => {
    const greedyRegex = /(https?:\/\/[^\s]+\?[^\s]*(&[^\s]*){2,})/g;
    return dataSet.match(greedyRegex) || [];
};
  
const notSoGreedy = (dataSet) => {
    const notSoGreedyRegex = /(https?:\/\/[^\s]+\?[^&\s]+(&[^&\s]+){1,2})(?!&)/g;
    return dataSet.match(notSoGreedyRegex) || [];
};
  
  
  // Example usage
//   const dataSet = `qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you`;
  
//   console.log("All URLs:", getURL(dataSet));
//   console.log("URLs with 3+ query params:", greedyQuery(dataSet));
//   console.log("URLs with 2-3 query params:", notSoGreedy(dataSet));