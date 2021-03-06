import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";

const Admin = () => {
  // 1. hard code the render
  // 2. move the values to this.state
  // 3. make the api call to return the data dynamically.
  // 3a. Import useEffect - when to go get the data.
  // 3b. Import axios
  // 3c. Inside useEffect, make an axios call.
  // 3d. set the response.data on state (setProducts) NEVER DIRECTLY MUTATE STATE

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="center-align">Admin View</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <table className="striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Featured</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {/* TODO: Move this out to a separate component */}
              {products.map(
                ({
                  _id,
                  title,
                  description,
                  price,
                  imageURL,
                  category,
                  quantity,
                  featured,
                }) => (
                  <tr key={_id}>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>{price}</td>
                    <td>
                      <img
                        src={imageURL}
                        alt={title}
                        style={{ height: "3em" }}
                      ></img>
                    </td>
                    <td>{category}</td>
                    <td>{quantity}</td>
                    <td>
                      {/* TODO: Toggle feature status via PUT request when clicked. */}
                      <FontAwesomeIcon
                        icon={featured ? faStar : faStarOutline}
                      />
                    </td>
                    <td>
                      {/* TODO: Open an edit form with values pre-populated */}
                      <FontAwesomeIcon icon={faEdit} />
                    </td>
                    <td>
                      {/* TODO: Make a DELETE request when clicked. */}
                      <FontAwesomeIcon icon={faTrash} />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
