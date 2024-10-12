console.log('Hello');
const messageContainer = {
    firstHalf: ['Have you tried ',
        'Why don\'t you ',
        'You should try ',
        'You should\'nt '
    ], 
    secondHalf: ['getting more sleep',
        'working out more',
        'dating apps',
        'trying a new hobby'
    ]
}

function generateMessage(){
    let message = '';
    let randValA = Math.floor(Math.random() * messageContainer.firstHalf.length);
    let randValB = Math.floor(Math.random() * messageContainer.secondHalf.length);
    message = messageContainer.firstHalf[randValA] + messageContainer.secondHalf[randValB];
    return message;
}

console.log(generateMessage());