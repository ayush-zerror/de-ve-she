// import ProfileLayout from "../user_data/User";
import { useState, useEffect } from "react";
// import "../../styles/dashboard.css";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { GoPlus } from "react-icons/go";
// import { BsChevronDown } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
// import "../../styles/address.css";
// import Profilebtn from "../common/Profilebtn2"
import Addaddress from "./PopUpAddress";
// import { Checkaddress } from "../../../api_fetch/admin/User";

const General = ({ email }) => {
  const [open, Setopen] = useState(false);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    addressline1: "",
    addressline2: "",
    flat: "",
    phone: "",
    city: "",
    country: "",
    pincode: "",
  });
  // const [errors, setErrors] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   phoneno: "",
  //   dob: "",
  //   gender: "",
  //   country: "",
  // });
  const [address, Setaddress] = useState([]);

  const handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  // let validate = () => {
  //   let formErrors = {};
  //   let regex = userData.email
  //     .toLowerCase()
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     );
  //   if (!userData.name) {
  //     formErrors.name = "Full Name is Required";
  //   }

  //   if (!userData.email) {
  //     formErrors.email = "Email is Required";
  //   } else if (!regex) {
  //     formErrors.email = "This is not a valid email format";
  //   }
  //   if (!userData.phone) {
  //     formErrors.phone = "Phone is Required";
  //   }
  //   if (!userData.gender) {
  //     formErrors.gender = "Gender is Required";
  //   }
  //   if (!userData.dob) {
  //     formErrors.dob = "Date of Birth is Required";
  //   }
  //   if (!userData.country) {
  //     formErrors.country = "Country is Required";
  //   }

  //   return formErrors;
  // };
  // const fetchUserData = async () => {
  //   try {
  //     // Extract JWT token from localStorage
  //     const token = localStorage.getItem("token");

  //     const response = await fetch(
  //       `https://backend.mamoshfashion.com/api/user/getone`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ token }),
  //       }
  //     );

  //     if (!response.ok) {
  //       console.log("error");
  //       throw new Error("Failed to fetch user data");
  //     }

  //     const userData = await response.json();
  //     console.log("Data :", userData);
  //     setUserData(userData);
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  // const fetchaddress = async () => {
  //   try {
  //     // Extract JWT token from localStorage
  //     const token = localStorage.getItem("token");

  //     // const response = await fetch(
  //     //   `https://backend.mamoshfashion.com/api/address/checkaddress`,
  //     //   {
  //     //     method: "POST",
  //     //     headers: {
  //     //       "Content-Type": "application/json",
  //     //     },
  //     //     body: JSON.stringify({ token }),
  //     //   }
  //     // );

  //     const userDataadd = await Checkaddress(token);

  //     if (!userDataadd) {
  //       console.log("error");
  //       throw new Error("Failed to fetch user data");
  //     }

  //     // const userDataadd = await response.json();
  //     //   console.log(userDataadd,"ookokkokokokokokokokoko")
  //     if (userDataadd.error == "Addresses not found") {
  //       Setaddress([]);
  //     } else {
  //       Setaddress(userDataadd);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  // useEffect(() => {
  //   // fetchUserData();
  //   fetchaddress();
  // }, []);

  return (
    <>
      <Tooltip id="my-tooltip" style={{ width: "20vw" }} />
      <div className="order-div" style={{ marginInline: "-31px" }}>
        <div className="pay-top2">
          <div className="pay-head">
            <h4>Saved Address</h4>
            <p>
              Easily manage your saved addresses for seamless checkout
              experiences.
            </p>
            <p>
              Your information is kept safe and secure with us.{" "}
              {/* <span style={{ color: "#3b82f6", cursor:'pointer' }}>
               Learn more.
            </span> */}
            </p>
          </div>
          <div className="fixed-right">
            <div
              className="_btn_wrapper _btn_height _w-full"
              onClick={() => {
                Setopen(true);
              }}
              style={{ width: "200px" }}
            >
              Add address
            </div>
          </div>
        </div>

        <div className="pay-outer">
          <div className="my-2"></div>

          {address.length == 0 ? (
            <div className="no-order-div">
              <div>
                <p className="no-order-p">There is no address to show</p>
              </div>
            </div>
          ) : (
            <div className="setadd">
              {address.length !== 0 && (
                <>
                  {address.map((el, i) => (
                    <div key={i} className="address-div">
                      <div className="locationlogo">
                        <IoLocationOutline className="localogo" />
                      </div>
                      <div className="add-detail">
                        <div className="name-btn">
                          <p className="add-name">
                            {el.firstname} {el.lastname}
                          </p>
                          <div className="actions">{/* <Profilebtn/> */}</div>
                        </div>
                        <p className="add-name">
                          {el.flat} {el.addressline1}
                        </p>
                        <p className="add-name">{el.addressline2}</p>
                        <p className="add-name">
                          {el.city}, {el.country}
                        </p>
                        <p className="add-name">{el.pincode}</p>
                        <div className="phone-btn">
                          <p
                            className="add-name"
                            style={{ fontWeight: "400", marginTop: "5px" }}
                          >
                            {" "}
                            {el.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
          {open && (
            <Addaddress
              open={open}
              Setopen={Setopen}
              userData={userData}
              setUserData={setUserData}
              address={address}
              Setaddress={Setaddress}
              email={email}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default General;
