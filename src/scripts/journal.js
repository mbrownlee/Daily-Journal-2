/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry = [
    {
    date: "date",
    topic: "topic", 
    entry: "yada yada yada",
    mood: "pit of despair"
}
]

const entries = []

entries.push(journalEntry)



const makeJournalEntryComponent = (journalEntry) => {
    
    return `
    <div class="entry">
    <h2>${journalEntry.topic}</h2>
    <h4>${journalEntry.date}</h4>
    <p>${journalEntry.entry}</p>
    <h4>${journalEntry.mood}</h4>
    </div>`

    
}
const entryContainer = document.querySelector(".entryLog")

const renderJournalEntries = (entries) => {
    entryContainer.innerHTML = ""
    entries.forEach(entry => entryContainer.innerHTML += makeJournalEntryComponent(entry))
}

// Invoke the render function
renderJournalEntries(journalEntry)



