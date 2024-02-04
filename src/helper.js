let allowedCharacters = 'abcdefghijklmnopqrstuvwxyz'.toLowerCase();
allowedCharacters += allowedCharacters.toUpperCase();
allowedCharacters += '0123456789';

export function generateRandomId(n = 16) {
    let randomId = '';
    for (let i = 0; i < n; i++) {
        const randomNumber = Math.floor(Math.random() * allowedCharacters.length);
        randomId += allowedCharacters[randomNumber];
    }
    return randomId;
}

// Function to count entities with 'Yes' as pinned
export function countEntitiesWithYesPinned(entities) {
    let count = 0;
    for (const entity of entities) {
        if (entity.pinned === 'Yes') {
            count++;
        }
    }
    return count;
}
