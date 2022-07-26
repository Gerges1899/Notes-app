const chalk=require('chalk')
const { describe, demandOption } = require('yargs')
const yargs=require('yargs')
const notes = require('./notes.js')
// customize yargs version

yargs.version('1.1.0')

// create add command

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'the bode of the note',
            demandOption:true,
            type:'string'
        }
        
    },
    handler (argv){
        notes.addNote(argv.title,argv.body) 
    }
})
// create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
// create read command
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler (argv){
        notes.readNote(argv.title)
    }
})
// create list command
yargs.command({
    command:'list',
    describe:'list the notes',
    handler (){
        notes.listNotes()
    }
})
// add, remove, read, list
yargs.parse()










// const add = require('./utils.js')

// const sum = add(4,-2)

// console.log(sum)