export const getLocation = () => {
  let result;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (r) => {
        result = r.coords.latitude;
        console.log(result);
      },
      (e) => {
        console.log(e);
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  return result;
};

//   const showPosition = (position) => {
//     console.log(position.coords.latitude, position.coords.longitude);
//     setLocation({
//       lat: position.coords.latitude,
//       lng: position.coords.longitude,
//     });
//   };
