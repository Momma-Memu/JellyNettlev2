const generateGreeting = () => {
    const greetings = [
        'I used to be an adventurer like you, until I took an arrow to the knee.',
        'Git gud.',
        'You are filled with...DETERMINATION.',
        'Seek Seek Lest...',
        `Whenever you're feeling down, remember...You always have a skeleton inside of you.`,
        `It's dangerous to go alone! Take this.`,
        'Tank beats everything!',
        'History is written by the victor.',
        'Up, Up, Down, Down, Left, Right, Left, Right, B, A, Start',
        'The cake is a lie.',
        'I like shorts! They’re comfy and easy to wear!',
        'We can be all poetic and lose our minds together.',
        'I know this is not a path you would choose for me, but I must choose my own pah and do what I know is right.',
        'It is one thing to hunt a beast. Another to hunt a machine',
        'Let me guess, somebody stole your sweetroll?',
        `Hold on to your hat! If you lose it, you'll be injured easily.`,
        'In Russia, game plays you.',
        'Pass into the iris',
        'Apagando las luces',
        'Handsome fighters never lose a battle!',
        `There's always a lighthouse, always a man, always a city...`,
        'Everything is permitted, Nothing is true.',
        'It was just me against the world... and the world had it coming',
        'Do a barrel roll!',
        'Hesitation Is Defeat.',
        'A hero need not speak when he is gone, for the world will speak for him.'
    ]


    const index = Math.floor(Math.random() * Math.floor(greetings.length - 1));
    return greetings[index];
}

export default generateGreeting;