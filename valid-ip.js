const findIP = (str) => {
    const ipRegex = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?::(?:[1-9]\d{0,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5]))?\b/g;
    
    const results = str.match(ipRegex) || [];
    
    return results.filter(ip => {
      const [address, port] = ip.split(':');
      const octets = address.split('.');
      
      if (octets.some(octet => octet.length > 1 && octet[0] === '0')) {
        return false;
      }
      
      if (port && (parseInt(port) < 1 || parseInt(port) > 65535)) {
        return false;
      }
      
      return true;
    });
  };