const data = {
    workdays: [
        {
            time: '8:00 AM',
            work: 'Social Media'
        },
        {
            time: '9:00 AM',
            work: 'Bath + L + Cleaning + Break-Fast'
        },
        {
            time: '9:30 AM',
            work: 'Office'
        },
        {
            time: '1:30 PM',
            work: 'Lunch (Social Media)'
        },
        {
            time: '7:00 PM',
            work: 'Youtube and Social Media'
        },
        {
            time: '8:00 PM',
            work: 'Research'
        },
        {
            time: '9:00 PM',
            work: 'Cooking + Dinner'
        },
        {
            time: '10:00 PM',
            work: 'Learning'
        },
        {
            time: '11:00 PM',
            work: 'DS Algo / Project'
        },
        {
            time: '12:00 PM',
            work: 'Social Media'
        },
    ],
    weekends: [
        {
            time: '8:00 AM',
            work: 'Social Media'
        },
        {
            time: '9:00 AM',
            work: 'Bath + L + Cleaning + Break-Fast'
        },
        {
            time: '10:00 AM',
            work: 'Learning / Research'

        },
        {
            time: '1:30 PM',
            work: 'Lunch + (Social Media / Entertainment / Youtube)'
        },
        {
            time: '2:00 PM',
            work: 'Project / DS Algo'
        },
        {
            time: '8:00 PM',
            work: 'Youtube and Social Media'
        },
        {
            time: '9:00 PM',
            work: 'Cooking + Dinner'
        },
        {
            time: '10:00 PM',
            work: 'Movie / Web Series'
        },
        {
            time: '12:00 PM',
            work: 'Social Media / Backup / Other Imp docs'
        }
    ]
}

function buildTable(table, data){
    data.forEach(item => {
        const row = document.createElement('tr');
        const time = document.createElement('td');
        const work = document.createElement('td');

        time.innerText = item.time;
        work.innerText = item.work;

        row.append(time, work);
        table.appendChild(row);
    })
}

// const currentTime = new Date();
// const currentLocalTime = currentTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

window.onload = () => {
    const workdaysTable = document.querySelector('table#workdays');
    const weekendsTable = document.querySelector('table#weekends');

    buildTable(workdaysTable, data.workdays);
    buildTable(weekendsTable, data.weekends);
}

// use setInterval