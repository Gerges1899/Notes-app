const fs = require('fs')
const chalk = require('chalk')

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

const addNote = (title, body)=> {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=>note.title === title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    }else{
        console.log(chalk.bgRed('Note Title taken'))
    }

    
}

const removeNote = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>note.title !== title)
    if(notes.length > notesToKeep.length){
    console.log(chalk.bgGreen('Note Removed'))
    saveNotes(notesToKeep)
    }
    else{
        
        console.log(chalk.bgRed('Note not found'))
  
    }
    
}
const listNotes=()=>{
    const notes = loadNotes()
    console.log(chalk.bgBlue('your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    });
}
const readNote=(title)=>{
    const notes = loadNotes()
    const found=notes.find((note)=>note.title === title)
    if(found){
        console.log(chalk.bgGreen(found.title))
        console.log(found.body)
    }else{
        console.log(chalk.bgRed('Error!'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}