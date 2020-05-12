
    // What should happen when we finally have the array?
    import makeJournalEntryComponent from "./entryComponent.js"
    const entryContainer = document.querySelector(".entryLog")

    
    const renderToDom = (parsedEntries) => {
        entryContainer.innerHTML = ""
        parsedEntries.forEach(entry => entryContainer.innerHTML += makeJournalEntryComponent(entry))


    }

    export default renderToDom
  