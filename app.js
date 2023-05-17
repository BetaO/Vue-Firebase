const app = Vue.createApp({
    // data, functions
    data() {
        return {
            url: 'https://github.com/BetaO',
            showBooks: true,
            title: 'The War of the Worlds',
            author: 'H.G. Wells',
            age: 65,
            x: 0,
            y: 0,
            books: [
                { title: 'Song of Ice and Fire', author: 'G.R.R. Martin', img: 'assets/sif.jpg', isFav: true},
                { title: 'Lord of the Rings', author: 'J.R.R. Tolkien', img: 'assets/lr.jpg', isFav: false}
            ]
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e){
            console.log(e, e.type)  //log the event
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)  //if true it stays in the array
        }
    }
})

app.mount('#app')