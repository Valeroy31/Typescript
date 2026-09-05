"use strict";
// shelfUtils.js
Object.defineProperty(exports, "__esModule", { value: true });
function addToShelf(book, shelf, userShelves) {
    const existingEntry = userShelves.find(entry => entry.bookId === book.id);
    if (existingEntry) {
        existingEntry.shelf = shelf;
        existingEntry.addedAt = Date.now();
        return existingEntry;
    }
    const newEntry = {
        id: crypto.randomUUID(),
        userId: book.ownerId,
        bookId: book.id,
        shelf,
        addedAt: Date.now(),
        finishedAt: null,
    };
    userShelves.push(newEntry);
    return newEntry;
}
function getShelfCounts(userShelves) {
    return userShelves.reduce((counts, entry) => {
        counts[entry.shelf] = (counts[entry.shelf] || 0) + 1;
        return counts;
    }, {});
}
function formatRating(rating, precision = 1) {
    return rating.toFixed(precision);
}
