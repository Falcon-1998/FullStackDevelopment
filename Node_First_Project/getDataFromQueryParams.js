export const getDataFromQueryParams = (queryParams, destinations) => {
  const {continent, country, is_open_to_public} = queryParams;
  if (!continent && !country && !is_open_to_public) {
    return destinations; // No filters applied, return all destinations
  }

  return destinations.filter((place) => {
    let matches = true;
    if (continent) {
      matches = matches && place.continent.toLowerCase() === continent.toLowerCase();
    }
    if (country) {
      matches = matches && place.country.toLowerCase() === country.toLowerCase();
    }
    if (is_open_to_public) {
      const isOpen = is_open_to_public.toLowerCase() === 'true';
      matches = matches && place.is_open_to_public === isOpen;
    }
    return matches;
  });
};