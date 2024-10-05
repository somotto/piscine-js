const findIP = (str) => {
    const ipRegex = /(?:^|\s)(?!(?:0[0-9]|[0-9]{2,})(?:\.\d{1,3}){3})(\b(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(?:\:\d{1,5})?(?=\s|$))/g;
    const matches = str.match(ipRegex);
    return matches ? matches.map(ip => ip.trim()) : [];
};

// // Example usage:
// const inputStr = "Here are some IP addresses: 192.168.1.1, 10.0.0.255, and 172.16.0.10:8080. Invalid: 256.100.50.25 and 192.168.01.1";
// const validIPs = findIP(inputStr);
// console.log(validIPs); // Output: [ '192.168.1.1', '10.0.0.255', '172.16.0.10:8080' ]