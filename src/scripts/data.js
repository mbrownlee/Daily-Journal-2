const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries") // Fetch from the API
      .then((entries) => entries.json());
  },
  createNewEntry(newJournalEntryObj) {
    return fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJournalEntryObj),
    });
  },
  deleteJournalEntries (entryId) {
    return fetch(`http://localhost:3000/entries/${entryId}`, {
    method: "DELETE"
  })
}
}



export default API


