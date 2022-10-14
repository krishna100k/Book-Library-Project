import "./App.css";

const books = [
  {
    id: 1,
    author: "Yoru Sumino",
    img: "https://m.media-amazon.com/images/I/81o4oV5OsvS.jpg",
    title: "I Want To Eat Your Pancreas."
  },

  {
    id: 2,
    author: "Ranmaru Kotone",
    img:
      "https://m.media-amazon.com/images/M/MV5BNjhiN2FjMWUtMDAyMi00ODJkLWE3MDgtODJlYTA1NDk5M2MyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    title: "The Girl Who Leapt Through Time"
  },

  {
    id: 3,
    author: "Makoto Shinkai",
    img:
      "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    title: "Your Name"
  },

  {
    id: 4,
    author: "Makoto Shinkai",
    img: "https://m.media-amazon.com/images/I/91t2id4bgiL.jpg",
    title: "Weathering With You."
  },

  {
    id: 5,
    author: "Naoshi Arakawa",
    img: "https://m.media-amazon.com/images/I/91x9MDuv5eL.jpg",
    title: "Your Lie In April."
  },

  {
    id: 6,
    author: "Shinji Kajio",
    img: "https://m.media-amazon.com/images/I/91Cvh+mA67L.jpg",
    title: "Memories Of Emanon."
  }
];

function Booklist(props) {
  const { author, img, title } = props.book;

  return (
    <div className="bookstyle">
      <img src={img} alt="Book Poster"></img>
      <h1 className="title">{title}</h1>
      <h1 className="author">{author}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="projecttitle">Book Library</h1>

      <section className="App">
        {books.map((book) => {
          return <Booklist key={book.id} book={book}></Booklist>;
        })}
      </section>
    </div>
  );
}

export default App;
