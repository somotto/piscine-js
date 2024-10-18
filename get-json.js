function getJSON(path, params = {}) {
    const baseUrl = 'http://example.com';
    const url = new URL(path, baseUrl);

    // Add query parameters
    Object.keys(params).forEach(key => {
        url.searchParams.append(key, params[key]);
    });

    return fetch(url.toString())
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.error) {
                throw new Error(data.error);
            }
            return data.data;
        });
}