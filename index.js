function piggyTalk(sentence) {
    return sentence
        .split(' ')
        .map(word => word.slice(1) + word[0] + 'ay')
        .join(' ');
}

module.exports = piggyTalk;

console.log(piggyTalk("I do not need to get a new kitten"));
console.log(piggyTalk("I am so excited to go to the zoo"));
console.log(piggyTalk("I love coding in JavaScript"));
