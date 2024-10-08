function citiesOnly(arr) {
    return arr.map(obj => obj.city);
}

function upperCasingStates(arr) {
    return arr.map(state => 
        state.split(' ')
             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
             .join(' ')
    );
}

function fahrenheitToCelsius(arr) {
    return arr.map(temp => {
        const fahrenheit = parseInt(temp); 
        const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
        return `${celsius}°C`;
    });
}

function trimTemp(arr) {
    return arr.map(obj => ({
        city: obj.city,
        state: obj.state,
        region: obj.region,
        temperature: obj.temperature.trim().replace(/\s+/g, '')
    }));
}

function tempForecasts(arr) {
    return arr.map(obj => {
        const fahrenheit = parseInt(obj.temperature); 
        const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
        const capitalizedState = obj.state.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        return `${celsius}°Celsius in ${obj.city}, ${capitalizedState}`;
    });
}




// console.log(citiesOnly([
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ])); 

// console.log(upperCasingStates(['alabama', 'new jersey'])); 

// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])); 

// console.log(trimTemp([
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ])); 

// console.log(tempForecasts([
//     { city: 'Pasadena', temperature: ' 101 °F', state: 'california', region: 'West' },
// ])); 
