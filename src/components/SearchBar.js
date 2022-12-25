import React, { useState, useEffect } from "react";
import { Font } from "../config/Font";
import { Colors } from "../config/Colors";
import { AiOutlineMenu, AiFillCaretDown } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

export default function SearchBar({ selectedCategory, queryParams }) {
  const [queryState, setQueryState] = useState(queryParams);
  useEffect(() => {
    setQueryState(queryParams);
  }, [queryParams]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="py-2"
      style={{
        backgroundColor: Colors.Primary,
        color: "white",
        fontSize: Font.Medium,
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div
          style={{ border: `1px solid ${Colors.PrimaryDark}` }}
          className="mx-3 border-radius d-flex align-items-center"
        >
          <div
            className="p-2 px-3"
            style={{
              backgroundColor: Colors.PrimaryDark,
              fontSize: Font.Large,
            }}
          >
            <AiOutlineMenu
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            ></AiOutlineMenu>

            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 8.5,
                  width: "30ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <button
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            className="px-3"
            style={{
              fontSize: Font.Medium,
              fontWeight: "500",
              textTransform: "uppercase",
              outline: "none",
              border: "none",
              color: "white",
              backgroundColor: Colors.Primary,
            }}
          >
            All Categories
          </button>
          <div className="pe-3">
            <AiFillCaretDown />
          </div>
        </div>

        <div
          className="border-radius d-flex align-items-center bg-white"
          style={{ border: `1px solid ${Colors.PrimaryDark}` }}
        >
          <div
            className="px-3 py-2"
            style={{ backgroundColor: Colors.PrimaryLight }}
          >
            {selectedCategory}
            <AiFillCaretDown
              className="ms-2"
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            ></AiFillCaretDown>
          </div>
          <input
            type="text"
            className="border-0 px-3"
            placeholder="Search"
            value={queryState}
            onChange={(e) => setQueryState(e.target.value)}
            style={{ width: "25rem", outline: "none" }}
          />
          <Link
            to={`/search?product=${queryState}&category=${selectedCategory}`}
            className="mx-2"
            style={{ fontSize: "20px", color: Colors.PrimaryDark }}
          >
            <FiSearch />
          </Link>
        </div>
        <div className="me-3" style={{ fontSize: "23px" }}>
          <span
            className="mx-3"
            style={{
              fontSize: Font.Normal,
              textTransform: "uppercase",
              fontWeight: "500",
            }}
          >
            Free Shipping
          </span>{" "}
          <BsTruck />
        </div>
      </div>
    </div>
  );
}
