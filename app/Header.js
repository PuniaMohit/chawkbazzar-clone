"use client";

import { useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { RiShoppingBag2Line } from "react-icons/ri";
import { RxLightningBolt } from "react-icons/rx";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { PiDress } from "react-icons/pi";
import { IoShirtOutline } from "react-icons/io";
import { BsSmartwatch } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";
import { PiCaretUpDownBold } from "react-icons/pi";
import { GiSchoolBag } from "react-icons/gi";
import { GiJewelCrown } from "react-icons/gi";
import { GiSunglasses } from "react-icons/gi";
import { PiSneakerThin } from "react-icons/pi";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logo from "./assets/images/chowkbazzar-logo.svg";
import usaFlag from "./assets/images/usa-flag.png";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const allCategories = [
    { icon: <PiDress />, label: `Women's Fashion` },
    // { icon: <IoShirtOutline />, label: `Men's Fashion` },
    { icon: <BsSmartwatch />, label: `Watches` },
    // { icon: <IoWalletOutline />, label: `Wallets` },
    { icon: <GiSchoolBag />, label: `Bags` },
    { icon: <GiJewelCrown />, label: `Jewelry` },
    { icon: <GiSunglasses />, label: `Sunglasses` },
    { icon: <PiSneakerThin />, label: `Sneakers` },
  ];

  const Category = () => {
    return (
      <div>
        {allCategories.map((items) => (
          <ListItemButton>
            <ListItemIcon>{items.icon}</ListItemIcon>
            <ListItemText primary={items.label} />
          </ListItemButton>
        ))}
      </div>
    );
  };
const HoverPopUp = ({title}) => {
    const [openedPopover, setOpenedPopover] = useState(false);
    const popoverAnchor = useRef(null);
  
    const popoverEnter = () => {
      setOpenedPopover(true);
    };
  
    const popoverLeave = () => {
      setOpenedPopover(false);
    };
    return (
      <div>
        <Typography
          aria-haspopup="true"
          onMouseEnter={popoverEnter}
          onMouseLeave={popoverLeave}
          ref={popoverAnchor}
        >
          {title}
        </Typography>
        <Popover
          open={openedPopover}
          anchorEl={popoverAnchor.current}
          sx={{
            pointerEvents: "none",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          PaperProps={{
            onMouseEnter: popoverEnter,
            onMouseLeave: popoverLeave,
          }}
          style={{top:'2%', }}
        >
          <Box sx={{ pointerEvents: "auto" }}>{title==="All Categories" && <Category/>}</Box>
        </Popover>
      </div>
    );
  };


const Header = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#F7F7F7",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      //   marginLeft: theme.spacing(3),
      //   width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      height: "2.435rem",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  
  return (
    <div className="bg-white">
      <div className="border-b-2 border-black ">
        <div className="flex justify-between items-center mx-auto w-11/12 mt-8 pb-8">
          <div className="flex gap-8 items-center">
            <div>
              <Image src={logo} />
            </div>
            <div className="flex gap-4 items-center">
              <div className="whitespace-nowrap">Deals Today</div>
              <RxLightningBolt />
            </div>
            <div>Offers</div>
            <div>FAQ</div>
            <div>Contact</div>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Anything…"
                inputProps={{ "aria-label": "Search" }}
              />
            </Search>
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={1} color="primary">
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>
              <div>Wishlist</div>
            </div>
            <div className="flex gap-2 items-center">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="primary">
                  <RiShoppingBag2Line />
                </Badge>
              </IconButton>
              <div>Shopping</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mx-auto w-11/12 mt-8">
        <div className="flex gap-8 items-center">
          <div>
            <Button
              variant="contained"
              startIcon={<MenuIcon />}
              sx={{
                fontWeight: "bold",
                "&.MuiButton-contained": {
                  backgroundColor: "black",
                },
              }}
            >
              {/* All Categories */}
              <HoverPopUp title='All Categories'/>
            </Button>
          </div>
          <div className="flex gap-2 items-center">
            <div>Demos</div>
            <div>
              <BsChevronUp />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div>Men Wear</div>
            <div>
              <BsChevronUp />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div>Women Wear</div>
            <div>
              <BsChevronUp />
            </div>
          </div>
          <div>Search</div>
          <div>Shops</div>
          <div className="flex gap-2 items-center">
            <div>Pages</div>
            <div>
              <BsChevronUp />
            </div>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-2 items-center">
            <div>
              <GrUserManager />
            </div>
            <div>Login</div>
          </div>
          <div>
            <Button
              variant="outlined"
              startIcon={<Image src={usaFlag} width={30} />}
              endIcon={<PiCaretUpDownBold />}
              sx={{
                color: "black",
                fontWeight: "bold",
                border: "1px solid black",
              }}
            >
              English - EN
            </Button>
          </div>
        </div>
      </div>
      <div></div>
      <div className=""></div>
    </div>
  );
};

export default Header;
