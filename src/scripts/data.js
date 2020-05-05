const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries") // Fetch from the API
        .then(entries => entries.json()) }// Parse as JSON
    }


    
export default  API

    
    