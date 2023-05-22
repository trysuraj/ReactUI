import { useState } from "react";
import { Form } from "../../components";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();
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

  const handleSubmit = (event) => {
    event.preventDefault();

    let store = JSON.parse(localStorage.getItem("bookStore"));

    if (localStorage.getItem("bookStore") === null) {
      let newstore = [];
      newstore.push(values);
      localStorage.setItem("bookStore", JSON.stringify(newstore));
    } else {
      store.push(values);
      localStorage.setItem("bookStore", JSON.stringify(store));
    }

    navigate("/");
  };
  return (
    <div>
      <Form
        title="New Book"
        values={values}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddBook;
