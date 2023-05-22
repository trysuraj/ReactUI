import { FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Button } from "../../components";

import styles from "./home.module.scss";
import "./home.module.scss";
import { Link } from "react-router-dom";
const Home = () => {
  let bookstore = JSON.parse(localStorage.getItem("bookStore"));

  const handleDelete = (index) => {
    bookstore.splice(index, 1);
    localStorage.setItem("bookStore", JSON.stringify(bookstore));
    window.location.reload();
  };
  return (
    <div className={styles.home_layout}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <h1 className={styles["title"]}>Books</h1>
        <Link to="/add-book">
          <Button>
            <FiPlus style={{ margin: "0px", padding: "0px" }} />
          </Button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>TItle</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Publication year</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {bookstore?.map((book, index) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.publicationYear}</td>
              <td>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Link
                    to={`/edit-book/${index}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{ position: "relative", marginRight: "8px" }}>
                      <span className={styles["edit_link"]}>Edit</span>
                    </div>
                  </Link>

                  <MdDelete
                    color="#DC2626"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleDelete(index);
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
