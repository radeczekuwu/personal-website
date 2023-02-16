// Data urodzenia w formacie YYYY-MM-DD
const birthDate = new Date('2005-02-25');
  
// funkcja, która aktualizuje wiek co 1/10 sekundy
setInterval(() => {
// oblicz różnicę między bieżącą datą a datą urodzenia w milisekundach
const ageInMs = Date.now() - Date.parse(birthDate);
    
// oblicz wiek w latach, z dokładnością do jednej dziesiątej
const age = (ageInMs / (1000 * 60 * 60 * 24 * 365.25)).toFixed(8);
    
// dodaj wiek do elementu span w dokumencie HTML
document.getElementById('age').textContent = age;
}, 100);