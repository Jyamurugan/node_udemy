console.log('Importing Notes module');

module.exports.addNote = () => {
    console.log('Calling add note');
    return 'Notes';
};

module.exports.add = (a, b) => {
    return (a + b);
};