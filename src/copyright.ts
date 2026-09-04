// shelfUtils.js

type ShelfType = 'want' | 'reading' | 'read'
type ExistingEntryType = NewEntry | undefined

type NewEntry = {
    id: string,
    userId: string | undefined
    bookId: string | undefined
    shelf: ShelfType
    addedAt: string | number
    finishedAt: null | string
}
type Book = {
    id: string,
    title: string,
    author_ids: string[],
    cover_url: string,
    isbn: string,
    description: string,
    ownerId: string | undefined,
    genre_ids: string[],
    publication_date: string,
    page_count: string | number,
    open_library_id: string,

    avg_rating: string | number,
    ratings_count: string | number,
    created_at: string
}
function addToShelf(book: Book, shelf: ShelfType, userShelves: NewEntry[]) {
    const existingEntry: ExistingEntryType = userShelves.find(entry => entry.bookId === book.id)

    if (existingEntry) {
        existingEntry.shelf = shelf;
        existingEntry.addedAt = Date.now()
        return existingEntry;
    }

    const newEntry: NewEntry = {
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

function getShelfCounts(userShelves: NewEntry[]): Record<ShelfType, number>  {
    return userShelves.reduce((counts: Record<ShelfType, number>, entry: NewEntry)=> {
        counts[entry.shelf] = (counts[entry.shelf] || 0) + 1;
        return counts;
    }, {} as Record<ShelfType, number> );
}

function formatRating(rating: number, precision = 1): string {
    return rating.toFixed(precision);
}