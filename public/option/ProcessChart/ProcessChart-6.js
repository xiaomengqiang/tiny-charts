const option = {   
    name: 'ProcessBarChart',
    theme: 'light',
    type:'double-sides',
    padding: [48, 48, 20, 48], 
    color:[ '#00aaee','#41ba41'],
    legend:{
        show:true,
        right:'3%',
        left:'auto',
        top:'3%'
    },
    data: [
    {
        name: 'China',
        children: [
        { name: 'Game', value: 30 },
        { name: 'Move', value: 20 },
        { name: 'Animation', value: 45 },
        { name: 'Fiction', value: 60 },
        ],
    },
    {
        name: 'Mexico',
        children: [
        { name: 'School', value: 12 },
        { name: 'Hospital', value: 14 },
        { name: 'Cinema', value: 33 },
        { name: 'Library', value: 44 },
        ],
    }
    ] 
};
