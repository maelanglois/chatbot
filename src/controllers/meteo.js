import axios from 'axios';
import codes from './weather-code'

export default () => {
  const tab = [];
  const promesse = new Promise ((resolve, reject) => { navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    axios.get(`https://geo.api.gouv.fr/communes?lat=${lat}&lon=${long}&&fields=code&format=json&geometry=centre`)
      .then((res) => {
        const { data } = res
        const { code } = data[0];

        axios.get(`https://api.meteo-concept.com/api/forecast/daily/0?token=eb04c30ea6c2690fadb84ccd77cb59b701b2be447dce9273e235a1014815a673&insee=${code}`)
        .then((res) => {
          const { forecast } = res.data;
          const { weather } = forecast;
          codes().forEach((element) => {
            if (element.code === weather){
              const meteo = element.description;
              tab.push(meteo);
              resolve(meteo);
            }
          })
        })
        .catch((error) => {
          reject(error);
        });
      })
      .catch((error) => {
        reject(error);
      });
    }); 
  });

  return tab;
}