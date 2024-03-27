import "../Card/index.css";
// import img from "../../assets/react.svg";

function Card() {
  let Data = [
    {
      author: "Chinua Achebe",
      country: "Nigeria",
      imageLink: "images/things-fall-apart.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      pages: 209,
      title: "Things Fall Apart",
      year: 1958,
    },
  ];

  return (
    <div className="card">
      <ul>
        {Data.map((v, i) => {
          return (
            <li key={i}>
              <div>
                <p>Author:{v.author}</p>
              </div>
              <div>
                <p>Country: {v.country}</p>
              </div>
              <div>
                <div>
                  <p>language: {v.language}</p>
                </div>
                <div>
                  <p>Link: {v.link}</p>
                </div>
                <div>
                  <p>Pages: {v.pages}</p>
                </div>
                <div>
                  <p>Title: {v.title}</p>
                </div>
                <div>
                  <p>Year: {v.year}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Card;
