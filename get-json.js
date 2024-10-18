function getJSON(path, params = {}) {
    // Construct URL with path and params
    const url = new URL(path);
    url.search = new URLSearchParams(params).toString();

    return fetch(url)
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