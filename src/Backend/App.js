const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Dummy database data
const data = [
    { id: 1, emissionType: 'Industrial Process Emissions', facilty: 'Facility1', reportingYear: '2022-2023', month: 'January', typeofGas: 'METHANE', quantity: 14478, units: 'KG', emission: 876},
    { id: 2, emissionType: 'Industrial Process Emissions', facilty: 'Facility2', reportingYear: '2021-2022', month: 'February', typeofGas: 'NAPHTHA', quantity: 463, units: 'KG', emission: 853},
    { id: 3, emissionType: 'Industrial Process Emissions', facilty: 'Facility3', reportingYear: '2018-2019', month: 'March', typeofGas: 'NAPHTHA', quantity: 19767, units: 'KG', emission: 254},
    { id: 4, emissionType: 'Industrial Process Emissions', facilty: 'Facility4', reportingYear: '2020-2021', month: 'January', typeofGas: 'AMMONIA', quantity: 80, units: 'KG', emission: 233},
    { id: 5, emissionType: 'Industrial Process Emissions', facilty: 'Facility5', reportingYear: '2022-2023', month: 'March', typeofGas: 'METHANE', quantity: 177, units: 'KG', emission: 55},
    { id: 6, emissionType: 'Industrial Process Emissions', facilty: 'Facility2', reportingYear: '2017-2018', month: 'April', typeofGas: 'NAPHTHA', quantity: 677, units: 'KG', emission: 507},
    { id: 7, emissionType: 'Industrial Process Emissions', facilty: 'Facility1', reportingYear: '2022-2023', month: 'May', typeofGas: 'AMMONIA', quantity: 1600, units: 'KG', emission: 1000}
];
app.use(cors());
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
console.log(`your endpoint will be at :http://localhost:5000/api/data`);