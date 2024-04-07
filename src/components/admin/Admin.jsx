import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios"; // Changed import statement
import { toast } from "react-toastify";
import { Bounce } from "react-toastify"; // Added import statement for Bounce transition

import "./Admin.css";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must have at least 3 characters")
    .required("Name is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),
  gender: yup.string().required("Gender is required"),
  tshirt: yup.string().required("T-shirt size is required"),
  address: yup.string().required("Address is required"),
});

const initialValues = {
  name: "",
  phone: "",
  gender: "",
  tshirt: "",
  address: "",
  time: new Date(),
};

const Admin = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      axios
        .post(
          "https://ssc-reunion-default-rtdb.firebaseio.com/members.json",
          values
        )
        .then((response) => {
          toast.success("A member has been added!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        })
        .catch((err) => {
          toast.error("Sorry! Something went Wrong", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        });

      resetForm({ values: "" });
    },
  });

  return (
    <div className="container">
      <form
        onSubmit={formik.handleSubmit}
        style={{
          border: "1px solid grey",
          borderRadius: "5px",
          padding: "10px",
          marginBottom: "20px",
          backgroundColor: "grey",
        }}
      >
        <div className="form-control">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            id="name"
            className="full-width"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="error-message">{formik.errors.name}</div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            placeholder="Your phone number"
            name="phone"
            id="phone"
            className="full-width"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.errors.phone && formik.touched.phone && (
            <div className="error-message">{formik.errors.phone}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            className="full-width"
            value={formik.values.gender}
            onChange={formik.handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {formik.errors.gender && formik.touched.gender && (
            <div className="error-message">{formik.errors.gender}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="tshirt">T-shirt Size:</label>
          <select
            name="tshirt"
            id="tshirt"
            className="full-width"
            value={formik.values.tshirt}
            onChange={formik.handleChange}
          >
            <option value="">Select T-shirt Size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="3XL">3XL</option>
          </select>
          {formik.errors.tshirt && formik.touched.tshirt && (
            <div className="error-message">{formik.errors.tshirt}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="address">Address:</label>
          <textarea
            name="address"
            id="address"
            className="full-width"
            value={formik.values.address}
            onChange={formik.handleChange}
          ></textarea>
          {formik.errors.address && formik.touched.address && (
            <div className="error-message">{formik.errors.address}</div>
          )}
        </div>

        <div style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
