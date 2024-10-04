function dogYears(planet, ageInSec) {
    const orbitalPeriods = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    };

    const secInEarthYr = 31557600;
    const ageInYrs = ageInSec / secInEarthYr;
    const planetOrbitalPeriod = orbitalPeriods[planet]

    if (planetOrbitalPeriod) {
     const dogAgeOnPlanet = ageInYrs * 7 / planetOrbitalPeriod;
     
     return parseFloat(dogAgeOnPlanet.toFixed(2))
    } 
} 
