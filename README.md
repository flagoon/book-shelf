This is a small application for showing owned books, show which one is read, at what page, add books manually or by ISBN

build a system that let users define a list of books they are reading, users should be able to add a book (by isbn or by hand, if user's using the isbn option, you can try fetching the data from one of the options in the link - bbvaopen4u.com/en/actualidad/…)
While the user has the list of his books, he can bookmark the page he's currently reading (just saving page number per book). He can mark book as completed, then the book removed from his list and move to a new list - archive.

For now, let's avoid any overhead and let's store all the data we need for the next time in local storage or any other in-browser storage that you find appropriate.

Using google bookApi: https://developers.google.com/books/docs/v1/using
