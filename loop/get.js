const get = (src, path) => {
    return path.split('.').reduce((obj, key) => obj && obj[key] !== undefined ? obj[key] : undefined, src);
  };