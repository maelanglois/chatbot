import axios from 'axios';

export default () => { 
  const codes = [{
    code: 0,
    description: 'soleil'
  }, {
    code: 1,
    description: 'peu nuageux'
  }, {
    code: 2,
    description: 'ciel voilé'
  }, {
    code: 3,
    description: 'nuageux'
  }, {
    code: 4,
    description: 'très nuageux'
  }, {
    code: 5,
    description: 'couvert'
  }, {
    code: 6,
    description: 'brouillard'
  }, {
    code: 7,
    description: 'brouillard givrant'
  }, {
    code: 10,
    description: 'pluie faible'
  }, {
    code: 11,
    description: 'pluie modérée'
  }, {
    code: 12,
    description: 'pluie forte'
  }, {
    code: 13,
    description: 'pluie faible verglaçante'
  }, {
    code: 14,
    description: 'pluie modérée verglaçante'
  }, {
    code: 15,
    description: 'pluie forte verglaçante'
  }, {
    code: 16,
    description: 'bruine'
  }, {
    code: 20,
    description: 'neige faible'
  }, {
    code: 21,
    description: 'neige modérée'
  }, {
    code: 22,
    description: 'neige forte'
  }, {
    code: 30,
    description: 'pluie et neige mêlées faibles'
  }, {
    code: 31,
    description: 'pluie et neige mêlées modérées'
  }, {
    code: 32,
    description: 'pluie et neige mêlées fortes'
  }, {
    code: 40,
    description: 'averses de pluie locales et faibles'
  }, {
    code: 41,
    description: 'averses de pluie locales'
  }, {
    code: 42,
    description: 'averses de pluie locales et fortes'
  }, {
    code: 43,
    description: 'averses de pluie faibles'
  }, {
    code: 44,
    description: 'averses de pluie'
  }, {
    code: 45,
    description: 'averses de pluie fortes'
  }, {
    code: 46,
    description: 'averses de pluie faibles et fréquentes'
  }, {
    code: 47,
    description: 'averses de pluie fréquentes'
  }, {
    code: 48,
    description: 'averses de pluie fortes et fréquentes'
  }, {
    code: 60,
    description: 'averses de neiges localisées et faibles'
  }, {
    code: 61,
    description: 'averses de neige localisées'
  }, {
    code: 62,
    description: 'averses de neiges localisées et fortes'
  }, {
    code: 63,
    description: 'averses de neige faibles'
  }, {
    code: 64,
    description: 'averses de neige'
  }, {
    code: 65,
    description: 'averses de neiges fortes'
  }, {
    code: 66,
    description: 'averses de neige faibles et fréquentes'
  }, {
    code: 67,
    description: 'averses de neige fréquentes'
  }, {
    code: 68,
    description: 'averses de neige fortes et fréquentes'
  }, {
    code: 70,
    description: 'averses de pluie et neige mêlées localisées et faibles'
  }, {
    code: 71,
    description: 'averses de pluie et neige mêlées localisées'
  }, {
    code: 72,
    description: 'averses de pluie et neige mêlées localisées et fortes'
  }, {
    code: 73,
    description: 'averses de pluie et neige mêlées faibles'
  }, {
    code: 74,
    description: 'averses de pluie et neige mêlées'
  }, {
    code: 75,
    description: 'averses de pluie et neige mêlées fortes'
  }, {
    code: 76,
    description: 'averses de pluie et neige mêlées faibles et nombreuses'
  }, {
    code: 77,
    description: 'averses de pluie et neige mêlées fréquentes'
  }, {
    code: 78,
    description: 'averses de pluie et neige mêlées fortes et fréquentes'
  }, {
    code: 100,
    description: 'orages faibles et locaux'
  }, {
    code: 101,
    description: 'orages locaux'
  }, {
    code: 102,
    description: 'orages fort et locaux'
  }, {
    code: 103,
    description: 'orages faibles'
  }, {
    code: 104,
    description: 'orages'
  }, {
    code: 105,
    description: 'orages forts'
  }, {
    code: 106,
    description: 'orages faibles et fréquents'
  }, {
    code: 107,
    description: 'orages fréquents'
  }, {
    code: 108,
    description: 'orages forts et fréquents'
  }, {
    code: 120,
    description: 'orages faibles et locaux de neige ou grésil'
  }, {
    code: 121,
    description: 'orages locaux de neige ou grésil'
  }, {
    code: 122,
    description: 'orages locaux de neige ou grésil'
  }, {
    code: 123,
    description: 'orages faibles de neige ou grésil'
  }, {
    code: 124,
    description: 'orages de neige ou grésil'
  }, {
    code: 125,
    description: 'orages de neige ou grésil'
  }, {
    code: 126,
    description: 'orages faibles et fréquents de neige ou grésil'
  }, {
    code: 127,
    description: 'orages fréquents de neige ou grésil'
  }, {
    code: 128,
    description: 'orages fréquents de neige ou grésil'
  }, {
    code: 130,
    description: 'orages faibles et locaux de pluie et neige mêlées ou grésil'
  }, {
    code: 131,
    description: 'orages locaux de pluie et neige mêlées ou grésil'
  }, {
    code: 132,
    description: 'orages fort et locaux de pluie et neige mêlées ou grésil'
  }, {
    code: 133,
    description: 'orages faibles de pluie et neige mêlées ou grésil'
  }, {
    code: 134,
    description: 'orages de pluie et neige mêlées ou grésil'
  }, {
    code: 135,
    description: 'orages forts de pluie et neige mêlées ou grésil'
  }, {
    code: 136,
    description: 'orages faibles et fréquents de pluie et neige mêlées ou grésil'
  }, {
    code: 137,
    description: 'orages fréquents de pluie et neige mêlées ou grésil'
  }, {
    code: 138,
    description: 'orages forts et fréquents de pluie et neige mêlées ou grésil'
  }, {
    code: 140,
    description: 'pluies orageuses'
  }, {
    code: 141,
    description: 'pluie et neige mêlées à caractère orageux'
  }, {
    code: 142,
    description: 'neige à caractère orageux'
  }, {
    code: 210,
    description: 'pluie faible intermittente'
  }, {
    code: 211,
    description: 'pluie modérée intermittente'
  }, {
    code: 212,
    description: 'pluie forte intermittente'
  }, {
    code: 220,
    description: 'neige faible intermittente'
  }, {
    code: 221,
    description: 'neige modérée intermittente'
  }, {
    code: 222,
    description: 'neige forte intermittente'
  }, {
    code: 230,
    description: 'pluie et neige mêlées'
  }, {
    code: 231,
    description: 'pluie et neige mêlées'
  }, {
    code: 232,
    description: 'pluie et neige mêlées'
  }, {
    code: 235,
    description: 'averses de grêle'
  }];
  const tab = [];
  const promesse = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      axios.get(`https://geo.api.gouv.fr/communes?lat=${lat}&lon=${long}&&fields=code&format=json&geometry=centre`)
        .then((res) => {
          const { data } = res;
          const { code } = data[0];

          axios.get(`https://api.meteo-concept.com/api/forecast/daily/0?token=eb04c30ea6c2690fadb84ccd77cb59b701b2be447dce9273e235a1014815a673&insee=${code}`)
            .then((res) => {
              const { forecast } = res.data;
              const { weather } = forecast;
              codes.forEach((element) => {
                if (element.code === weather) {
                  const meteo = element.description;
                  tab.push(meteo);
                  resolve(meteo);
                }
              });
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
};
