// Gastric Cancer Epidemiology Data — Sources: GLOBOCAN 2024, WHO, ICMR
export const globalStats = {
  newCasesPerYear: 1089103,
  deathsPerYear: 768793,
  fiveYearSurvivalEarlyStage: 68,
  fiveYearSurvivalLateStage: 6,
  indiaNewCases: 57394,
  indiaDeaths: 51529,
  earlyDetectionRate: 20,
  rankAmongCancers: 5,
};

export const globalIncidenceByYear = {
  labels: ['2010','2012','2014','2016','2018','2020','2022','2024'],
  datasets: [
    {
      label: 'Global New Cases (thousands)',
      data: [952, 984, 1010, 1032, 1050, 1068, 1080, 1089],
      borderColor: '#2d6bc4',
      backgroundColor: 'rgba(30,77,140,0.15)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'India New Cases (thousands)',
      data: [45, 47, 49, 51, 53, 54.5, 56, 57.4],
      borderColor: '#00b4d8',
      backgroundColor: 'rgba(0,180,216,0.1)',
      fill: true,
      tension: 0.4,
    },
  ],
};

export const incidenceByRegion = {
  labels: ['East Asia','South/Central Asia','Eastern Europe','South America','Western Europe','North America','Africa'],
  datasets: [
    {
      label: 'Age-Standardized Rate (per 100,000)',
      data: [28.4, 12.8, 14.2, 11.5, 6.1, 3.8, 4.2],
      backgroundColor: [
        'rgba(239,68,68,0.8)','rgba(245,158,11,0.8)','rgba(59,130,246,0.8)',
        'rgba(139,92,246,0.8)','rgba(6,214,160,0.8)','rgba(0,180,216,0.8)','rgba(156,163,175,0.8)',
      ],
      borderColor: ['#ef4444','#f59e0b','#3b82f6','#8b5cf6','#06d6a0','#00b4d8','#9ca3af'],
      borderWidth: 1,
    },
  ],
};

export const indiaStateWise = {
  labels: ['Mizoram','Nagaland','Manipur','Arunachal Pradesh','Meghalaya','Sikkim','Assam','Tripura','Kerala','West Bengal','Delhi','Maharashtra','Tamil Nadu','Karnataka'],
  datasets: [
    {
      label: 'Incidence Rate (per 100,000)',
      data: [36.4, 28.1, 22.5, 19.8, 17.2, 16.9, 14.1, 12.8, 11.2, 9.4, 7.8, 7.2, 6.8, 6.5],
      backgroundColor: 'rgba(30,77,140,0.7)',
      borderColor: '#2d6bc4',
      borderWidth: 1,
      borderRadius: 6,
    },
  ],
};

export const survivalRateByStage = {
  labels: ['Stage I','Stage II','Stage III','Stage IV'],
  datasets: [
    {
      label: '5-Year Survival Rate (%)',
      data: [68, 31, 18, 6],
      backgroundColor: ['rgba(6,214,160,0.8)','rgba(0,180,216,0.8)','rgba(245,158,11,0.8)','rgba(239,68,68,0.8)'],
      borderColor: ['#06d6a0','#00b4d8','#f59e0b','#ef4444'],
      borderWidth: 2,
    },
  ],
};

export const genderDistribution = {
  labels: ['Male','Female'],
  datasets: [
    {
      data: [63, 37],
      backgroundColor: ['rgba(30,77,140,0.8)','rgba(0,180,216,0.7)'],
      borderColor: ['#2d6bc4','#00b4d8'],
      borderWidth: 2,
    },
  ],
};

export const highRiskCountries = [
  { country: 'Mongolia', rate: 58.7, continent: 'Asia' },
  { country: 'Japan', rate: 37.9, continent: 'Asia' },
  { country: 'South Korea', rate: 36.1, continent: 'Asia' },
  { country: 'China', rate: 28.3, continent: 'Asia' },
  { country: 'Russia', rate: 22.4, continent: 'Europe' },
  { country: 'Peru', rate: 21.8, continent: 'South America' },
  { country: 'Bolivia', rate: 19.5, continent: 'South America' },
  { country: 'Belarus', rate: 18.2, continent: 'Europe' },
  { country: 'India', rate: 5.3, continent: 'Asia' },
  { country: 'USA', rate: 3.8, continent: 'North America' },
  { country: 'UK', rate: 4.1, continent: 'Europe' },
];
