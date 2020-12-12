const randNumGen = num => {
    return Math.floor(Math.random() * num);
};

const wisdom = {
    badThing: ['empty', 'dark', 'sad', 'broken', 'a dumpster fire', 'stressful', 'a nightmare'],
    adj: ['smart', 'kind', 'important', 'beautiful', 'intelligent', 'powerful', 'empowered', 'compassionate', 'nice', 'incredible', 'hard-working', 'wonderful', 'lovely'],
    encouragement: ['Keep hanging on', 'You can do it', 'Everything will be okay', 'You are stronger than this', 'Take a breath, everything will be fine']
};

const advice = [];

for(let prop in wisdom) {
    let randIndex = randNumGen(wisdom[prop].length);

    switch (prop) {
        case 'badThing':
            advice.push(`The world is ${wisdom[prop][randIndex]}, but`);
            break;
        case 'adj':
            advice.push(`you are ${wisdom[prop][randIndex]}!`);
            break;
        case 'encouragement':
            advice.push(`${wisdom[prop][randIndex]}!`);
            break;
        default:
            return 'not enough info';
    }
}

const formatWisdom = () => {
    const formatted = advice.join(' ');
    console.log(formatted);
};

formatWisdom(wisdom);