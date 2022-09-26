let books = [
    [1, "Start with why", "Simon Sinek", 80.0, 13],
    [2, "But how do it know", "J. Clark Scott", 59.9, 22],
    [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
    [4, "Zero to One", "Peter Thiel", 45.0, 12],
    [5, "You don't know JS", "Kyle Simpson", 39.9, 9],
];

//القدرة على الاستعلام عن كتاب
function searchABook() {
    let bookId;
    let title = "Clean Code";
    let author;

    for (let i = 0; i < books.length; i++) {
        for (let j = 0; j < books.length; j++) {
            if (
                bookId === 1 ||
                title === "Start with why" ||
                author === "Simon Sinek"
            ) {
                if (books[i][j] == books[0][j]) {
                    console.log(books[i][j]);
                }
            } else if (
                bookId === 2 ||
                title === "But how do it know" ||
                author === "J. Clark Scott"
            ) {
                if (books[i][j] == books[1][j]) {
                    console.log(books[i][j]);
                }
            } else if (
                bookId === 3 ||
                title === "Clean Code" ||
                author === "Robert Cecil Martin"
            ) {
                if (books[i][j] == books[2][j]) {
                    console.log(books[i][j]);
                }
            } else if (
                bookId === 4 ||
                title === "Zero to One" ||
                author === "Peter Thiel"
            ) {
                if (books[i][j] == books[3][j]) {
                    console.log(books[i][j]);
                }
            } else if (
                bookId === 5 ||
                title === "You don't know JS" ||
                author === "Kyle Simpson"
            ) {
                if (books[i][j] == books[4][j]) {
                    console.log(books[i][j]);
                }
            }
        }
    }
}

// call a method

//searchABook()

//بيع كتاب وتصدير فاتورة
let aBooksSale = (bookTitle, quantity, availableBalance) => {
    for (let i = 0; i < books.length; i++) {
        if (!books.includes(bookTitle) ) {
            for (let j = 0; j < books.length; j++) {
                if (quantity <= books[i][4] && availableBalance >= books[i][3] * quantity && bookTitle ===  books[i][1]) {
                    let a =  quantity;
                    availableBalance -= books[i][3]*quantity;
                    books[i][4] - a 
                    if( books[i][4] - a ){
                        books[i][4] -= quantity;
                   
                    console.log(`
                    book Title : ${bookTitle}
                    you order ${quantity} books.   
                    your availableBalance : ${availableBalance}
                    books remining ${books[i][4]} `);
                    break;
                    }

                } else if (quantity >= books[i][4] && bookTitle ===  books[i][1]) {
                    console.log(
                        ` quintity of books is not avalible we hava  a ${books[i][4]} books`
                    );
                    break;
                } else if (availableBalance <= books[i][3] * quantity && bookTitle ===  books[i][1]) {
                    console.log(` 
                    your current balance = ${availableBalance}
                    you don't have a money you need :  ${books[i][3] * quantity}`);
                    break;
                }
            }
        }    else {
            console.log(` this book is not available..... ${bookTitle}`);
            break;
        } 
       
    }

};

// call a method
aBooksSale("Clean Code", 3, 10);







//  test
//    // رقم الكتاب Book Id
// switch (bookId) {
//     case 1:
//         if (books[i][j] == books[0][j]) {
//             console.log(books[i][j]);
//         }
//         break;

//     case 2:
//         if (books[i][j] == books[1][j]) {
//             console.log(books[i][j]);
//         }
//         break;

//     case 3:
//         if (books[i][j] == books[2][j]) {
//             console.log(books[i][j]);
//         }
//         break;
//     case 4:
//         if (books[i][j] == books[3][j]) {
//             console.log(books[i][j]);
//         }
//         break;
//     case 5:
//         if (books[i][j] == books[4][j]) {
//             console.log(books[i][j]);
//         }
//         break;

// }

// switch (title) {
//     case "Start with why":
//         if (books[i][j] == books[0][j]) {
//             console.log(books[i][j]);
//         }
//         break;

//     case "But how do it know":
//         if (books[i][j] == books[1][j]) {
//             console.log(books[i][j]);
//         }
//         break;

//     case "Clean Code":
//         if (books[i][j] == books[2][j]) {
//             console.log(books[i][j]);
//         }
//         break;
//     case "Zero to One":
//         if (books[i][j] == books[3][j]) {
//             console.log(books[i][j]);
//         }
//         break;
//     case "You don't know JS":
//         if (books[i][j] == books[4][j]) {
//             console.log(books[i][j]);
//         }
//         break;
// }

// switch (author) {
//     case "Simon Sinek":
//         if (books[i][j] == books[0][j]) {
//             console.log(books[i][j]);
//         }
//         break;

//     case "J. Clark Scott":
//         if (books[i][j] == books[1][j]) {
//             console.log(books[i][j]);
//         }
//         break;

//     case "Robert Cecil Martin":
//         if (books[i][j] == books[2][j]) {
//             console.log(books[i][j]);
//         }
//         break;
//     case "Peter Thiel":
//         if (books[i][j] == books[3][j]) {
//             console.log(books[i][j]);
//         }
//         break;
//     case "Kyle Simpson":
//         if (books[i][j] == books[4][j]) {
//             console.log(books[4][j]);
//         }
//         break;
// }
