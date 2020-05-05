const makeJournalEntryComponent = (journalEntry) => {
    
    return `
    <div class="entry">
    <h2>${journalEntry.topic}</h2>
    <h4>${journalEntry.date}</h4>
    <p>${journalEntry.entry}</p>
    <h4>${journalEntry.mood}</h4>
    </div>`

    
}
