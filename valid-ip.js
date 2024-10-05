const findIP = (str) => {
    const ipRegex = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?::(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{0,3}))?\b/g;
    
    const results = str.match(ipRegex) || [];
    
    return results.filter(ip => {
      const [address, port] = ip.split(':');
      const octets = address.split('.');
      
      if (octets.some(octet => octet.length > 1 && octet[0] === '0')) {
        return false;
      }
      
      if (octets.some(octet => isNaN(parseInt(octet)) || parseInt(octet) > 255)) {
        return false;
      }
      
      if (port && (parseInt(port) < 1 || parseInt(port) > 65535)) {
        return false;
      }
      
      return true;
    });
  };