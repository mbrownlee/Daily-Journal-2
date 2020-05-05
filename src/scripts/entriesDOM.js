
    // What should happen when we finally have the array?
    
    const entryContainer = document.querySelector(".entryLog")

    
    const renderToDom = (parsedEntries) => {
        parsedEntries.forEach(entry => entryContainer.innerHTML += makeJournalEntryComponent(entry))


    }
