function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const comments = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat felis at orci bibendum, quis tincidunt tortor venenatis. Fusce blandit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor lorem et arcu rutrum rhoncus. Maecenas imperdiet lobortis urna, ac.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum enim in eros lobortis posuere. Nam congue lorem fringilla nunc luctus, in ornare nunc tincidunt. Aliquam sagittis erat vitae turpis tempus sagittis. Mauris at purus nec risus sollicitudin sollicitudin. Aliquam.'
]

function getAnswer() {
    const answer = getRandomInt(5)
    return {answer: answer, comment: answer === 0 ? null : comments[getRandomInt(3)]}
}

function getAnswers(n) {
    return Array.apply(null, {length: n}).map((i) => getAnswer())
}

export default function actualAnswers() {
    return {
        'User Satisfaction': getAnswers(7),
        'Efficiency': getAnswers(4),
        'Aesthetics/Appeal': getAnswers(2),
        'Motivation': getAnswers(1),
    }
};
