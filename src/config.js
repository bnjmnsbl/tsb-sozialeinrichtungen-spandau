export default {
  socialTags: {
  },
  map: {
    mapCenter: [13.4124999, 52.5040961],
    mapZoom: [10],
    marker: {
      color: {
        selected: 'green',
        default: 'black',
      }
    },
    config: {
      minZoom: 6,
      maxZoom: 17,
      dragRotate: false,
      bearing: 0,
      maxBounds: [
        [10, 50],
        [15, 54],
      ],
      accessToken: process.env.REACT_APP_MAP_TOKEN,
      style: process.env.REACT_APP_MAP_STYLE,
    },
  },
  about: {
    legend: {
      id: 'Kategorie'
    },
    title: "Berliner Innovationspreis",
    paragraphs: [
      {
        title: "Worum geht es?",
        content: "Dies ist eine Übersicht über den [Berliner Innovationspreis](https://www.google.de). Hier sehen sie die Projekte auf einer Karte verortet.",
      },
      {
        title: "Weitere Erklärungen",
        content: "Stehen hier, z.B. zum Bewerbungsverfahren oder zur Preisverleihung",
      },
    ]
  },
  fav: {
    title: 'Favoriten'
  },
  filter: {
    title: 'Filter und Suche',
    filter: [
      {
        id: "zielgruppe_themenspezifisch",
        component: "tags",
        label: "Zielgruppe Themenspezifisch"
      },
      {
        id: "angebote",
        component: "tags",
        label: "Angebote"
      },
    ]
  },
  pdfExport: {
    pdfName: 'Sozialeinrichtungen',
    columns: [
      { header: 'Name', dataKey: 'name', },
      { header: 'Träger', dataKey: 'traeger', },
      { header: 'Art d. Einrichtung', dataKey: 'art_einrichtung', },
      { header: 'E-Mail', dataKey: 'email', },
      { header: 'Adresse', dataKey: 'adresse', },
    ]
  },
  tooltip: [
    {
      id: "name",
      component: "title",
      label: "Institution",
    },
    {
      id: "Kategorie",
      component: "description",
      label: "Kateogire",
    }
  ],
  detail: [
    {
      id: "name",
      component: "title",
      label: "Institution",
    },
    {
      id: "Kategorie",
      component: "description",
      label: "Angebot",
    },
    {
      id: "adresse",
      component: "description",
      label: "Adresse",
    },
    {
      id: "inhalt",
      component: "description",
      label: "Inhalt",
    },
    /*{
      id: "email",
      component: "link",
      label: "E-Mail",
    },
    
  
    /*{
      id: "angebote",
      component: "tags",
      label: "Angebote",
    },
    {
      id: "zielgruppe_themenspezifisch",
      component: "tags",
      label: "Zielgruppen",
    },*/
  ],
};
