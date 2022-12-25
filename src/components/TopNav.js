import React, { useEffect, useState } from "react";
import { Colors } from "../config/Colors";
import IconButton from "../elements/IconButton";
import { AiFillSetting, AiFillPhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Font } from "../config/Font";
import { BsFillBagCheckFill } from "react-icons/bs";
import { contactInfo } from "../services/homePage";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import Login from "../pages/loginpage";
const TopNav = () => {
  const [openModel, setOpenModel] = useState(false);

  const [state, setState] = useState({
    mobile: 9999900000,
    email: "wwww.xxxxx@gmail.com",
  });

  const fetchData = async () => {
    const { data, status } = await contactInfo();
    setState(data);
    console.log("Basic Info", data, status);
  };

  console.log("Test1", 3);

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Test1", 1);

  const phoneNumber = 7644015588;
  const email = "praispranav@gmail.com";
  return (
    <div
      className="w-100 py-2"
      style={{
        backgroundColor: Colors.PrimaryDark,
        color: "white",
        fontSize: Font.ExtraSmall,
      }}
    >
      <div className="container d-flex justify-content-between align-items-center ">
        <div className="d-flex topNav-leftContent">
          <p className="mx-2">
            <AiFillPhone classNameName="mx-2" />
            {state.mobile}
          </p>
          /
          <p>
            <HiOutlineMail classNameName="mx-2" />
            {state.email}
          </p>
        </div>
        <div className="d-flex align-items-center">
          <Link to={"/myprofile"}>
            <IconButton
              classNameName="mx-2 px-2 topNav-setting-btn"
              hover={Colors.Primary}
              background={Colors.PrimaryDark}
            >
              <AiFillSetting className="me-2" /> Settings
            </IconButton>{" "}
          </Link>
          /
          <IconButton
            className="mx-2 px-2"
            hover={Colors.Primary}
            background={Colors.PrimaryDark}
          >
            <BsFillBagCheckFill className="me-2 topNav-order-btn" /> Orders
          </IconButton>
          /
          <IconButton
            className="mx-2 px-2"
            hover={Colors.Primary}
            background={Colors.PrimaryDark}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <MdLogout className="me-2" />
            Login
          </IconButton>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
          
            <div class="modal-dialog  modal-lg  modal-dialog-centered">
            
              <div className="modal-content">
          
                <Login />
              </div>
      
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
