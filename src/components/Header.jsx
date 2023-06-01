import { Box, Button, Select } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { changeFilter } from "../redux/users/followSlice";

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Box
      as="header"
      display="flex"
      bg={"cardBg"}
      height={"70px"}
      width="100%"
      gap={"20px"}
      alignItems={"center"}
      p={"10px 30px"}
    >
      <Button variant={"headerBtn"} onClick={() => navigate("/")}>
        Home
      </Button>
      <Button variant={"headerBtn"} onClick={() => navigate("/tweets")}>
        Tweets
      </Button>
      {pathname === "/tweets" && (
        <Select
          defaultValue={"option1"}
          ml={"auto"}
          w={"150px"}
          onChange={handleChange}
        >
          <option value="showAll">Show all</option>
          <option value="follow">Follow</option>
          <option value="followings">Followings</option>
        </Select>
      )}
    </Box>
  );
};
