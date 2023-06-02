import { Box, Button, Spinner } from "@chakra-ui/react";
import { useGetUsersQuery } from "../../redux/users/userApi";
import { TweetCard } from "./TweetCard";
import { useSelector } from "react-redux";
import { useState } from "react";

export const TweetsList = () => {
  const [query, setQuery] = useState({ p: 1, l: 3 });
  const { data, isLoading } = useGetUsersQuery(query);
  const filter = useSelector((state) => state.following.filter);
  const followingCards = useSelector((state) => state.following.items);

  const shouldShow = (data) => {
    switch (filter) {
      case "follow":
        return data.filter((item) => !followingCards.includes(item.id));
      case "followings":
        return data.filter((item) => followingCards.includes(item.id));
      default:
        return data;
    }
  };

  const shownData = shouldShow(data);

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="textColor"
        color="accentColor"
        size="xl"
      />
    );

  return (
    <>
      <Box
        display={"flex"}
        gap={"20px"}
        p={"20px 0"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {data &&
          shownData.map((item) => <TweetCard key={item.id} tweet={item} />)}
      </Box>
      {query && (
        <Button onClick={() => setQuery()} variant={"followingBtn"}>
          Load more...
        </Button>
      )}
    </>
  );
};
