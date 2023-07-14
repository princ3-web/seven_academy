import { Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Button from "@mui/material/Button";
import { green, grey } from "@mui/material/colors";
import faceFemale from "../assets/icons/faceFemale.png";
import faceMale from "../assets/icons/faceMale.png";
import Image from "./Image";

const OpinionCard = ({ name, text, role, gender, workplace, isMobile }) => {
  return (
    <Box display={"flex"} flexDirection={isMobile ? "column" : "row"} justifyContent={"space-between"} width={"100%"} px={10}>
      <Box
        width={isMobile ? "60vw" : "50vw"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <FormatQuoteIcon />
        <Typography>{text}</Typography>
        <Button>
          <Typography color={grey[900]}>Read full story</Typography>
        </Button>
      </Box>
      <Box
        width={isMobile ? "60vw" : "50vw"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box borderRadius={"100%"} overflow={"hidden"}>
          <Image src={gender === "female" ? faceFemale : faceMale} width={150} />
        </Box>
        <Typography fontSize={20} fontWeight={600}>
          {name}
        </Typography>
        <Typography color={grey[600]}> {role}</Typography>
        <Typography>{workplace}</Typography>
      </Box>
    </Box>
  );
};

export default OpinionCard;
