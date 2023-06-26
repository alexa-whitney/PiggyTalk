function piggyTalk(sentence) {
    return sentence
        .split(' ')
        .map(word => word.slice(1) + word[0] + 'ay')
        .join(' ');
}

module.exports = piggyTalk;


console.log(piggyTalk("hello world"));