/* sources of toposon files 
https://github.com/zcreativelabs/react-simple-maps
https://github.com/deldersveld/topojson
https://github.com/CodeWritingCow/CodeWritingCow.com
https://github.com/jgoodall/us-maps
https://github.com/zarkzork/russia-topojson
https://github.com/g0v/twgeojson
https://github.com/ywng/d3-js-map-hong-kong
https://github.com/cartdeco/Australia-json-data
https://github.com/junwatu/indonesia.json
https://github.com/kcjpop/vietnam-topojson
https://github.com/cvibhagool/thailand-map
https://github.com/davelandry/bra-atlas
https://github.com/ginseng666/GeoJSON-TopoJSON-Austria
https://github.com/n4cr/iran-geojson
https://github.com/GusGA/venezuela-jsonmaps
https://github.com/jhjanicki/Ukraine
https://github.com/dedunu/sri-lanka-cartogram
https://github.com/laem/regions-topojson
https://gist.github.com/atwj/b2350b7083c001a74505647a61e89c0e
https://gist.github.com/saifulazfar/76053d7a7d420a3a0bc0fb5849006309
https://gist.github.com/rkini/0debc65592d85da286425948ed07df1f
https://gist.github.com/diegovalle/5129746
https://gist.github.com/carnby/5894781
https://gist.github.com/MichalisM/6745759
*/

export const mapSettings = {
  'World': { center: [0, 20], scale: 150, rotation: [0,0,0], filename: 'world-50m.json' },
  'World (High resolution)': { center: [0, 20], scale: 150, rotation: [0,0,0], filename: 'world-10m.json' },
  'Africa': { center: [30, 0], scale: 350, rotation: [0,0,0], filename: 'africa.json' },
  'Asia': { center: [80, 45], scale: 200, rotation: [-10,0,0], filename: 'asia.json' },
  'Europe': { center: [15, 60], scale: 300, rotation: [0,0,0], filename: 'europe.json' }, 
  'North America': { center: [-100, 50], scale: 250, rotation: [-10,0,0], filename: 'north-america.json' },
  'Oceania': { center: [140, -25], scale: 500, rotation: [0,0,0], filename: 'oceania.json' },
  'South America': { center: [-70, -25], scale: 350, rotation: [0,0,0], filename: 'south-america.json' },
  'Afghanistan': { center: [68, 34], scale: 2000, rotation: [0,0,0], filename: 'afg-adm1.json' },
  'Alegria': { center: [0, 30], scale: 1000, rotation: [0,0,0], filename: 'algeria-provinces.json' },
  'Argentina': { center: [-70, -40], scale: 650, rotation: [0,0,0], filename: 'argentina-provinces.json' },
  'Australia': { center: [135, -25], scale: 600, rotation: [0,0,0], filename: 'australia.json' },
  'Austria (Districts)': { center: [13, 48], scale: 4000, rotation: [0,0,0], filename: 'austria-districts-2017.json' },
  'Austria (States)': { center: [13, 48], scale: 4000, rotation: [0,0,0], filename: 'austria-states-2017.json' },
  'Azerbaijan': { center: [48, 40], scale: 5000, rotation: [0,0,0], filename: 'azerbaijan-districts.json' },
  'Belgium (Arrondissements)': { center: [5, 50.5], scale: 7000, rotation: [0,0,0], filename: 'belgium-arrondissements.json' },
  'Belgium (Provinces)': { center: [5, 50.5], scale: 7000, rotation: [0,0,0], filename: 'belgium-provinces.json' },
  'Brazil': { center: [-52, -15], scale: 600, rotation: [0,0,0], filename: 'bra-states.json' },
  'Canada': { center: [-105, 65], scale: 300, rotation: [0,0,0], filename: 'canada.json' },
  'Chile': { center: [-72, -38], scale: 550, rotation: [0,0,0], filename: 'chile.json' },
  'China (Mainland)': { center: [105, 40], scale: 600, rotation: [0,0,0], filename: 'china-provinces.json' },
  'Colombia': { center: [-75, 4.5], scale: 1500, rotation: [0,0,0], filename: 'colombia-departments.json' },
  'Czech Republic': { center: [15, 50], scale: 4000, rotation: [0,0,0], filename: 'czech-republic-regions.json' },
  'Denmark (Counties)': { center: [10, 56], scale: 4000, rotation: [0,0,0], filename: 'denmark-counties.json' },
  'Denmark (Municipalities)': { center: [10, 56], scale: 4000, rotation: [0,0,0], filename: 'denmark-municipalities.json' },
  'Egypt': { center: [31, 27], scale: 2000, rotation: [0,0,0], filename: 'egypt.json' },
  'Finland': { center: [25, 65], scale: 1000, rotation: [0,0,0], filename: 'finland-regions.json' },
  'France (Departments)': { center: [2, 46], scale: 1800, rotation: [0,0,0], filename: 'fr-departments.json' },
  'France (Regions)': { center: [2, 46], scale: 1800, rotation: [0,0,0], filename: 'fr-regions.json' },
  'Germany (States)': { center: [10, 51], scale: 2000, rotation: [0,0,0], filename: 'deu-adm1.json' },
  'Germany (Regions)': { center: [10, 51], scale: 2000, rotation: [0,0,0], filename: 'germany-regions.json' },
  'Greece': { center: [23, 39], scale: 2800, rotation: [0,0,0], filename: 'greece.json' },
  'Hong Kong': { center: [114.1, 22.4], scale: 40000, rotation: [0,0,0], filename: 'hkg-adm.json' },
  'India (Districts)': { center: [80, 22], scale: 1000, rotation: [0,0,0], filename: 'india-districts.json' },
  'India (States)': { center: [80, 22], scale: 1000, rotation: [0,0,0], filename: 'india-states.json' },
  'Indonesia': { center: [118, 0], scale: 800, rotation: [0,0,0], filename: 'indonesia.json' },
  'Iran': { center: [54, 32], scale: 1400, rotation: [0,0,0], filename: 'iran.json' },
  'Iraq': { center: [44, 33], scale: 2000, rotation: [0,0,0], filename: 'irq-adm1.json' },
  'Ireland': { center: [-8, 53.5], scale: 4000, rotation: [0,0,0], filename: 'ireland-counties.json' },
  'Israel': { center: [35, 31.5], scale: 6000, rotation: [0,0,0], filename: 'israel.json' },
  'Italy (Provinces)': { center: [13, 42], scale: 1600, rotation: [0,0,0], filename: 'italy-provinces.json' },
  'Italy (Regions)': { center: [13, 42], scale: 1600, rotation: [0,0,0], filename: 'italy-regions.json' },
  'Japan (Prefectures)': { center: [140, 38], scale: 1800, rotation: [0,0,0], filename: 'jp-prefectures.json' },
  'Japan (Towns)': { center: [140, 38], scale: 1800, rotation: [0,0,0], filename: 'jp-towns.json' },
  'Lebanon': { center: [36, 34], scale: 12000, rotation: [0,0,0], filename: 'lebanon.json' },
  'Liberia (Counties)': { center: [-9.5, 6.5], scale: 5000, rotation: [0,0,0], filename: 'liberia-counties.json' },
  'Liberia (Districts)': { center: [-9.5, 6.5], scale: 5000, rotation: [0,0,0], filename: 'liberia-districts.json' },
  'Malaysia (Districts)': { center: [110, 5], scale: 2000, rotation: [0,0,0], filename: 'malaysia-districts.json' },
  'Malaysia (States)': { center: [110, 5], scale: 2000, rotation: [0,0,0], filename: 'malaysia-states.json' },
  'Mexico': { center: [-102, 24], scale: 1000, rotation: [0,0,0], filename: 'mexico.json' },
  'Nepal (Districts)': { center: [84, 28.5], scale: 4000, rotation: [0,0,0], filename: 'nepal-districts.json' },
  'Nepal (Zones)': { center: [84, 28.5], scale: 4000, rotation: [0,0,0], filename: 'nepal-zones.json' },
  'Netherlands': { center: [5, 52.5], scale: 6000, rotation: [0,0,0], filename: 'nl-gemeentegrenzen-2016.json' },
  'New Zealand (Districts)': { center: [175, -41], scale: 1500, rotation: [0,0,0], filename: 'new-zealand-districts.json' },
  'New Zealand (Regions)': { center: [175, -41], scale: 1500, rotation: [0,0,0], filename: 'new-zealand-regional-councils.json' },
  'North Korea': { center: [128, 40.5], scale: 3500, rotation: [0,0,0], filename: 'prk-adm1.json' },
  'Norway (Counties)': { center: [10, 66], scale: 800, rotation: [0,0,0], filename: 'norway-counties.json' },
  'Norway (Municipalities)': { center: [10, 66], scale: 800, rotation: [0,0,0], filename: 'norway-municipalities.json' },
  'Pakistan (Districts)': { center: [70, 30.5], scale: 1500, rotation: [0,0,0], filename: 'pakistan-districts.json' },
  'Pakistan (Divisions)': { center: [70, 30.5], scale: 1500, rotation: [0,0,0], filename: 'pakistan-divisions.json' },
  'Pakistan (Provinces)': { center: [70, 30.5], scale: 1500, rotation: [0,0,0], filename: 'pakistan-provinces.json' },
  'Peru': { center: [-75, -9], scale: 1500, rotation: [0,0,0], filename: 'peru-departments.json' },
  'Phillippines (Municipalities)': { center: [122, 13], scale: 1600, rotation: [0,0,0], filename: 'philippines-municipalities.json' },
  'Phillippines (Provinces)': { center: [122, 13], scale: 1600, rotation: [0,0,0], filename: 'philippines-provinces.json' },
  'Poland': { center: [19, 52], scale: 2000, rotation: [0,0,0], filename: 'poland-provinces.json' },
  'Portugal': { center: [-8, 40], scale: 3000, rotation: [0,0,0], filename: 'portugal-districts.json' },
  'Romania': { center: [25, 46], scale: 3000, rotation: [0,0,0], filename: 'romania-counties.json' },
  'Russia': { center: [100, 65], scale: 300, rotation: [-10,0,0], filename: 'russia.json' },
  'Singapore': { center: [103.8, 1.35], scale: 60000, rotation: [0,0,0], filename: 'singapore.json' },
  'South Africa': { center: [23, -28], scale: 1600, rotation: [0,0,0], filename: 'south-africa-provinces.json' },
  'South Korea (Municipalities)': { center: [128, 36], scale: 4000, rotation: [0,0,0], filename: 'skorea-municipalities.json' },
  'South Korea (Provinces)': { center: [128, 36], scale: 4000, rotation: [0,0,0], filename: 'skorea-provinces.json' },
  'Spain (Autonomies)': { center: [-5, 40], scale: 2000, rotation: [0,0,0], filename: 'spain-comunidad-with-canary-islands.json' }, 
  'Spain (Provinces)': { center: [-5, 40], scale: 2000, rotation: [0,0,0], filename: 'spain-province-with-canary-islands.json' },
  'Sri Lanka': { center: [81, 8], scale: 6000, rotation: [0,0,0], filename: 'sri-lanka.json' },
  'Sweden (Counties)': { center: [19, 63], scale: 800, rotation: [0,0,0], filename: 'sweden-counties.json' },
  'Sweden (Municipalities)': { center: [19, 63], scale: 800, rotation: [0,0,0], filename: 'sweden-municipalities.json' },
  'Switzerland': { center: [8, 47], scale: 6000, rotation: [0,0,0], filename: 'switzerland.json' },
  'Syria': { center: [39, 35], scale: 3500, rotation: [0,0,0], filename: 'syr-adm2.json' },
  'Taiwan': { center: [120, 23.5], scale: 6000, rotation: [0,0,0], filename: 'tw-counties.json' },
  'Thailand': { center: [101, 14], scale: 1600, rotation: [0,0,0], filename: 'thailand-provinces.json' },
  'Turkey': { center: [35, 40], scale: 2000, rotation: [0,0,0], filename: 'turkiye.json' },
  'Ukraine': { center: [31, 49], scale: 2000, rotation: [0,0,0], filename: 'ukraine-provinces.json' },
  'United Arab Emirates': { center: [54, 24], scale: 6000, rotation: [0,0,0], filename: 'united-arab-emirates.json' },
  'United Kingdom': { center: [-3, 55], scale: 1600, rotation: [0,0,0], filename: 'uk-counties.json' },
  'United States (Counties)': { center: [-95, 40], scale: 700, rotation: [0,0,0], filename: 'us-counties-20m.json' },
  'United States (States)': { center: [-95, 40], scale: 700, rotation: [0,0,0], filename: 'us-states.json' },
  'Venezuela': { center: [-67, 6], scale: 2000, rotation: [0,0,0], filename: 'venezuela.json' },
  'Vietnam': { center: [108, 16], scale: 1600, rotation: [0,0,0], filename: 'vietnam-adm2.json' }
}

export const mapProjections = [
  { projection: 'times', title: 'The Times'},
  { projection: 'robinson', title: 'Robinson'},
  { projection: 'eckert4', title: 'Eckert IV'},
  { projection: 'winkel3', title: 'Winkel tripel'},
  { projection: 'mercator', title: 'Mercator'},
  { projection: 'miller', title: 'Miller Cylindrical'}
]
