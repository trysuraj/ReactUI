import { useEffect, useState } from "react";
import { Form } from "../../components";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const store = JSON.parse(localStorage.getItem("bookStore"));
  const [values, setValues] = useState({
    author: "",
    title: "",
    genre: "",
    publicationYear: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newstore = store;
    newstore.splice(bookId, 1, values);
    localStorage.setItem("bookStore", JSON.stringify(newstore));
    navigate("/");
  };

  useEffect(() => {
    const data = store[bookId];
    setValues(data);
  }, []);
  return (
    <div>
      <Form
        title="Edit"
        values={values}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditBook;
