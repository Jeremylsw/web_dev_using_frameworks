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

// Function to generate current date time
export function generateCurrentTime() {
    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    const formattedTime = `${day}/${month}/${year}_${hours}:${minutes}:${seconds}`;
    return formattedTime;
}
