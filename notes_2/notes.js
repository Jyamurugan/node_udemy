const fs = require('fs');

const writeFile = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const readFile = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json'));
    } catch (e) {
        return [];
    }
}

const addNote = (title, body) => {
    const note = {
        title,
        body
    };
    const notes = readFile();
    const duplicateNotes = notes.filter((item) => { return item.title === title });
    if (duplicateNotes.length === 0) {
        notes.push(note);
        writeFile(notes);
        return note;
    } else {
        return null;
    }
};

const listNotes = () => {
    return readFile();
};

const readNote = (title) => {
    return readFile().find(notes => {
        return notes.title === title;
    });
};

const deleteNote = (title) => {
    const notes = readFile();
    const filteredNotes = notes.filter(note => note.title !== title);
    if (filteredNotes.length !== notes.length) {
        writeFile(filteredNotes);
        return true;
    } else {
        return false;
    }
};

module.exports = {
    addNote,
    listNotes,
    readNote,
    deleteNote
};