let schools = [
    { name: 'Yorktown' },
    { name: 'Stratford' },
    { name: 'Washington & Lee' },
    { name: 'Wakefield' },
];



function editSchools(...newValues) {

    // копия масива schools
    let newSchools = schools.map(school => ({ ...school }));

    // проверка если значений больше или меньше основного масива
    if (newValues.length > newSchools.length || newValues.length < newSchools.length) {
        throw "Значений больше или меньше исходных"
    }

    // перебор елементов и изменение их значений
    newSchools.forEach((element, index) => {
        element.name = newValues[index];
    });

    return newSchools
}


try {
    let updatedNameSchools = editSchools('Yorktown School', 'Stratford School', 'Washington & Lee School', 'Wakefield School');
    console.log(updatedNameSchools);
    console.log(schools);
} catch (error) {
    console.log("error:", error);
}


/* let schools = [
    { name: 'Yorktown' },
    { name: 'Stratford' },
    { name: 'Washington & Lee' },
    { name: 'Wakefield' },
];



function editSchools(...newValues) {
     // копия масива schools
    let newSchools = schools.slice(0);

    // проверка если значений больше или меньше основного масива
    if (newValues.length > newSchools.length || newValues.length < newSchools.length) {
        throw "error"
    }
    // перебор елементов и изменение их значений
    newSchools.forEach((element, index) => {
        element.name = newValues[index];
    });

    return newSchools
}


try {
    let updatedNameSchools = editSchools('Yorktown School', 'Stratford School', 'Washington & Lee School', 'Wakefield School');
    console.log(updatedNameSchools);
    console.log(schools);
} catch (error) {
    console.log("error:", error);
}
 */