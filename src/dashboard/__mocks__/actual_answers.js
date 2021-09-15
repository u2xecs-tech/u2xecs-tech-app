function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const comments = [
    'I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it. I hated it.',
    'It was disgusting. The developer should be ashamed.',
    'Dishonor on YOU, dishonor on your COW.'
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
