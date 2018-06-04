const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// user modules
const notes = require('./notes');
const argv = yargs.command('add', 'add note', {
        title: {
            demand: true,
            describe: 'title of note',
            alias: 't'
        },
        body: {
            demand: true,
            describe: 'body of note',
            alias: 'b'
        }
    })
    .command('read', 'read a note', {
        title: {
            demand: true,
            describe: 'title of note',
            alias: 't'
        }
    })
    .command('list', 'list all notes')
    .command('remove', 'remove a note', {
        title: {
            demand: true,
            describe: 'title of note',
            alias: 't'
        }
    })
    .help()
    .argv;

// use yargs to avoid parsing arguments
// arguments [ nodepath, executingfile,args]
// console.log('Process arguments', process.argv);
// console.log('yargs arguments', argv);

const command = argv._[0];

switch (command) {
    case 'add':
        const result = notes.addNote(argv.title, argv.body);
        if (result) {
            console.log('Note created');
            console.log(`Title: ${result.title} Body: ${result.body}`)
        } else {
            console.warn('Duplicate notes');
        }
        break;
    case 'list':
        console.log(notes.listNotes());
        break;
    case 'read':
        const note = notes.readNote(argv.title);
        note ? console.log(note) : console.log('Not found');
        break;
    case 'remove':
        if (notes.deleteNote(argv.title)) {
            console.log('Node removed');
        } else {
            console.warn('Node not removed');
        }
        break;
    default:
        console.log('command not recognized');
}