const getURL = (dataSet) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return dataSet.match(urlRegex) || [];
};
  
const greedyQuery = (dataSet) => {
    const greedyRegex = /(https?:\/\/[^\s]+\?[^\s]*(&[^\s]*){2,})/g;
    return dataSet.match(greedyRegex) || [];
};
  
const notSoGreedy = (dataSet) => {
    const urlPattern = /https?:\/\/[^\s]+(?:\?[^\s#]*)?/g;
    
    const urls = dataSet.match(urlPattern) || [];
    
    return urls.filter(url => {
        const queryString = url.split('?')[1];
        if (queryString) {
            const params = queryString.split('&');
            return params.length >= 2 && params.length <= 3;
        }
        return false;
    });
};
  
  
  // Example usage
//   const dataSet = `qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you`;
  
//   console.log("All URLs:", getURL(dataSet));
//   console.log("URLs with 3+ query params:", greedyQuery(dataSet));
//   console.log("URLs with 2-3 query params:", notSoGreedy(dataSet));
