const data = {
    workdays: [
        {
            work: 'Social Media',
            timeInfo: {
                hours: 8,
                minutes: 0,
            },
        },
        {
            work: 'Bath + L + Cleaning + Break-Fast',
            timeInfo: {
                hours: 9,
                minutes: 0,
            },
        },
        {
            work: 'Office',
            timeInfo: {
                hours: 9,
                minutes: 30,
            },
        },
        {
            work: 'Lunch (Social Media)',
            timeInfo: {
                hours: 13,
                minutes: 30,
            },
        },
        {
            work: 'Youtube and Social Media',
            timeInfo: {
                hours: 19,
                minutes: 00,
            },
        },
        {
            work: 'Research',
            timeInfo: {
                hours: 20,
                minutes: 00
            },
        },
        {
            work: 'Cooking + Dinner',
            timeInfo: {
                hours: 21,
                minutes: 00
            },
        },
        {
            work: 'Learning',
            timeInfo: {
                hours: 22,
                minutes: 00
            },
        },
        {
            work: 'DS Algo / Project',
            timeInfo: {
                hours: 23,
                minutes: 00
            },
        },
        {
            work: 'Social Media',
            timeInfo: {
                hours: 00,
                minutes: 00
            },
        },
    ],
    weekends: [
        {
            work: 'Social Media',
            timeInfo: {
                hours: 8,
                minutes: 0,
            },
        },
        {
            work: 'Bath + L + Cleaning + Break-Fast',
            timeInfo: {
                hours: 9,
                minutes: 0,
            },
        },
        {
            work: 'Learning / Research',
            timeInfo: {
                hours: 10,
                minutes: 00,
            },
        },
        {
            work: 'Lunch + (Social Media / Entertainment / Youtube)',
            timeInfo: {
                hours: 13,
                minutes: 30,
            },
        },
        {
            work: 'Project / DS Algo',
            timeInfo: {
                hours: 14,
                minutes: 00,
            },
        },
        {
            work: 'Youtube and Social Media',
            timeInfo: {
                hours: 20,
                minutes: 00,
            },
        },
        {
            work: 'Cooking + Dinner',
            timeInfo: {
                hours: 21,
                minutes: 00,
            },
        },
        {
            work: 'Movie / Web Series',
            timeInfo: {
                hours: 22,
                minutes: 00,
            },
        },
        {
            work: 'Social Media / Backup / Other Imp docs',
            timeInfo: {
                hours: 00,
                minutes: 00,
            },
        }
    ]
}

// display date in human readable form
function dateDisplayFormat(date) {
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

// highlight current work
// function highlight(data, workspace) {
//     const demo = new Date();
//     demo.setHours(18);
//     demo.setMinutes(14);
//     // console.log(dateDisplayFormat(demo));
// }

// const currentTime = new Date();

// get time for a work
function getTime(timeInfo) {
    const date = new Date();
    date.setHours(timeInfo.hours);
    date.setMinutes(timeInfo.minutes);
    return date;
}

// build table from data
function buildTable(table, data, namespace) {
    const currentTime = new Date();
    let flag = true;
    let currentWork = null;

    data.forEach((item, i) => {
        const row = document.createElement('tr');
        const timeColumn = document.createElement('td');
        const workColumn = document.createElement('td');

        const time = getTime(item.timeInfo);


        console.log(time)
        if (flag) {
            if (time <= currentTime) {
                currentWork = row;
            } else {
                flag = false;
            }
        }

        timeColumn.innerText = dateDisplayFormat(time);
        workColumn.innerText = item.work;

        row.id = `${namespace}-${i}`
        row.append(timeColumn, workColumn);
        table.appendChild(row);
    })

    currentWork.classList.add('highlight');
}


window.onload = () => {
    const workdaysTable = document.querySelector('table#workdays');
    const weekendsTable = document.querySelector('table#weekends');

    buildTable(workdaysTable, data.workdays, 'workdays');
    buildTable(weekendsTable, data.weekends, 'weekends');

    // highlight();
}

// use setInterval  