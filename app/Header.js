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
import { GiConsoleController, GiSchoolBag } from "react-icons/gi";
import { GiJewelCrown } from "react-icons/gi";
import { GiSunglasses } from "react-icons/gi";
import { PiSneakerThin } from "react-icons/pi";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import logo from "./assets/images/chowkbazzar-logo.svg";
import usaFlag from "./assets/images/usa-flag.png";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import reebook from "./assets/images/reebook.webp"
import dior from "./assets/images/dior.webp"



const allCategories = [
  { icon: <PiDress />, label: `Women's Fashion` },
  // { icon: <IoShirtOutline />, label: `Men's Fashion` },
  { icon: <BsSmartwatch />, label: `Watches` },
  { icon: <IoWalletOutline />, label: `Wallets` },
  { icon: <GiSchoolBag />, label: `Bags` },
  { icon: <GiJewelCrown />, label: `Jewelry` },
  { icon: <GiSunglasses />, label: `Sunglasses` },
  { icon: <PiSneakerThin />, label: `Sneakers` },
];

const topWear = [
  "Top Wear",
  "T-Shirt",
  "Casual Shirts",
  "Formal Shirts",
  "Blazwers & Coats",
  "Suits",
  "Jackets",
  "Belt, Scarves & More",
  "Watches & Wearables",
];

const westernWear = [
  "Western Wear",
  "Dresses",
  "Jumpsuits",
  "Tops, T-shirts & Shirts",
  "Shorts & Skirts",
  "Shurgs",
  "Blazers",
  "Plus Size",
  "Sunglasses & Frames",
];

const footwear = [
  "Footwear",
  "Facts",
  "Casual Shoes",
  "Heels",
  "Boots",
  "Sports & Active Wear",
  "Clothing",
  "Footwear",
  "Sports Accessories",
];

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

const Header = () => {
  const List = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const { icon, list } = props;
    return (
      <div
        className=""
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {list?.map((items) => (
          <>
            <ListItemButton>
              {icon === "true" && <ListItemIcon>{items.icon}</ListItemIcon>}
              <ListItemText
                className="whitespace-nowrap group"
                primary={items.label || items}
              />
            </ListItemButton>
            {/* {showDivider === items && <Divider />} */}
          </>
        ))}
        {isHovered ? <HoverPopUp title="women-clothes" /> : <></>}
      </div>
    );
  };

  const InsideList = (props) => {
    const { list, bold, showDivider } = props;
    return (
      <div>
        {list?.map((items) => (
          <>
            <ListItemButton>
              <ListItemText
                className={`whitespace-nowrap group ${
                  bold.includes(items) ? "font-bold" : "font-medium"
                }`}
                primary={
                  <Box sx={{ fontWeight: bold.includes(items) ? 700 : 500 }}>
                    {items}
                  </Box>
                }
              />
            </ListItemButton>
            {showDivider === items && <Divider />}
          </>
        ))}
      </div>
    );
  };

  const Category = () => {
    return <List icon={true} list={allCategories} />;
  };

  const WomenClothes = () => {
    return (
        <div className="flex w-full">
          <InsideList
            list={topWear}
            showDivider={"Jackets"}
            bold={["Top Wear", "Belt, Scarves & More", "Watches & Wearables"]}
          />
          <InsideList
            list={westernWear}
            showDivider={"Blazers"}
            bold={["Western Wear", "Plus Size", "Sunglasses & Frames"]}
          />
          <InsideList
            list={footwear}
            showDivider={"Boots"}
            bold={["Footwear", "Sports & Active Wear"]}
          />
         
          <div className="w-full">
            <div className="grid grid-cols-3">
              <div className="col-span-1 bg-slate-300"><Image src={reebook}/></div>
              <div className="col-span-1"><Image src={dior}/></div>
              {/* <div className="col-span-1"><Image src={}/></div>
              <div className="col-span-1"><Image src={}/></div>
              <div className="col-span-1"><Image src={}/></div>
              <div className="col-span-1"><Image src={}/></div> */}
            </div>
            <div className="flex gap-4 ">
              <Image />
              <Image />
            </div>
          </div>
        </div>
    );
  };

  const HoverPopUp = ({ title }) => {
    console.log(title);
    const content = data.find((item) => item.title === title)?.content || null;
    // console.log(content)
    return (
      <div
        className={`${
          title === "women-clothes" ? "left-36 -top-0" : "left-0"
        } invisible group-hover:visible absolute top-9 `}
      >
        {content}
      </div>
    );
  };

  const data = [
    {
      title: "women-clothes",
      content: (
        <div>
          <WomenClothes />
        </div>
      ),
    },
    {
      title: "all-categories",
      content: (
        <div>
          <Category />
        </div>
      ),
    },
  ];

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
          <div className="group relative">
            <Button
              variant="contained"
              startIcon={<MenuIcon />}
              sx={{
                fontWeight: "bold",
                "&.MuiButton-contained": {
                  backgroundColor: "black",
                },
              }}
              className="whitespace-nowrap"
            >
              All Categories
            </Button>
            <HoverPopUp title="all-categories" />
          </div>
          <div className="flex gap-2 items-center group relative ">
            <div>Demos</div>
            <div className="group-hover:hidden block">
              <BsChevronDown />
            </div>
            <div className="group-hover:block hidden">
              <BsChevronUp />
            </div>
            {/* <HoverPopUp title="demos" /> */}
          </div>
          <div className="flex gap-2 items-center group relative ">
            <div className="whitespace-nowrap">Men Wear</div>
            <div className="group-hover:hidden block">
              <BsChevronDown />
            </div>
            <div className="group-hover:block hidden">
              <BsChevronUp />
            </div>
            {/* <HoverPopUp title="men-wear" /> */}
          </div>
          <div className="flex gap-2 items-center group relative ">
            <div className="whitespace-nowrap">Women Wear</div>
            <div className="group-hover:hidden block">
              <BsChevronDown />
            </div>
            <div className="group-hover:block hidden">
              <BsChevronUp />
            </div>
            {/* <HoverPopUp title="women-wear" /> */}
          </div>
          <div>Search</div>
          <div>Shops</div>
          <div className="flex gap-2 items-center group relative ">
            <div>Pages</div>
            <div className="group-hover:hidden block">
              <BsChevronDown />
            </div>
            <div className="group-hover:block hidden">
              <BsChevronUp />
            </div>
            {/* <HoverPopUp title="pages" /> */}
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
