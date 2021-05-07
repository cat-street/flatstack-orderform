import axios from 'axios';

const TOKEN = 'pk.a17616dfb3badf65fe0c823d043a6934';

async function getAddressFromCoords({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) {
  const response = await axios.get(
    `https://eu1.locationiq.com/v1/reverse.php?key=${TOKEN}&lat=${lat}&lon=${lon}&format=json`,
  );
  return response.data;
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function detectLocation(): Promise<{ lat: number; lon: number }> {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(
      async (success) => {
        const result = {
          lat: success.coords.latitude,
          lon: success.coords.longitude,
        };
        res(result);
      },
      (error) => rej(error.message),
      options,
    );
  });
}

async function getAddress() {
  const coordinates = await detectLocation();
  if (coordinates) {
    const data: Record<string, any> = await getAddressFromCoords(coordinates);
    if (data) {
      return {
        city: data.address.city,
        country: data.address.country,
        postcode: data.address.postcode,
      };
    }
  }
  return null;
}

export default getAddress;
