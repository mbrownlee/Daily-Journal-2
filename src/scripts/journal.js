/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
fetch("http://localhost:3000/entries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedEntries => {
        // What should happen when we finally have the array?
        
        console.table(parsedEntries)
        const entryContainer = document.querySelector(".entryLog")

        
        
        parsedEntries.forEach(entry => entryContainer.innerHTML += makeJournalEntryComponent(entry))
       


    })

//const entries = []

//entries.push(journalEntry)

const makeJournalEntryComponent = (journalEntry) => {
    
    return `
    <div class="entry">
    <h2>${journalEntry.topic}</h2>
    <h4>${journalEntry.date}</h4>
    <p>${journalEntry.entry}</p>
    <h4>${journalEntry.mood}</h4>
    </div>`

    
}




