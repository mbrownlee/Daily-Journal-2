const makeJournalEntryComponent = (journalEntry) => {
    
    return `
    <div class="entry">
    <h2>${journalEntry.topic}</h2>
    <h4>${journalEntry.date}</h4>
    <p>${journalEntry.entry}</p>
    <h4>${journalEntry.mood}</h4>
    <button id="edit--${journalEntry.id}" class="edit__btn">Edit</button>
    <button id="delete--${journalEntry.id}" class="delete__btn">Delete</button>
    </div>`

    
}

export default makeJournalEntryComponent