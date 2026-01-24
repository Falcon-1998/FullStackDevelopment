export const getDataByPathParams = (locationsType,locationName, destinations) => 
destinations.filter((place) => place[locationsType].toLowerCase() === locationName.toLowerCase());
       

