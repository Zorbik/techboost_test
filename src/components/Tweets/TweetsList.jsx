import { Box, Button, Spinner } from "@chakra-ui/react";
import { useGetUsersQuery } from "../../redux/users/userApi";
import { TweetCard } from "./TweetCard";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";

export const TweetsList = () => {
  const { data: allData } = useGetUsersQuery();
  const [query, setQuery] = useState({ p: 1, l: 6 });
  const { data, isLoading, isFetching } = useGetUsersQuery(query);

  const filter = useSelector((state) => state.following.filter);
  const followingCards = useSelector((state) => state.following.items);

  const shownData = useMemo(() => {
    switch (filter) {
      case "follow":
        return data?.filter((item) => !followingCards?.includes(item.id));
      case "followings":
        return data?.filter((item) => followingCards?.includes(item.id));
      default:
        return data;
    }
  }, [data, filter, followingCards]);

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
        {shownData?.map((item) => (
          <TweetCard key={item.id} tweet={item} />
        ))}
      </Box>
      {allData?.length > data?.length && (
        <Button
          onClick={() =>
            setQuery((prevQuery) => ({
              ...prevQuery,
              l: prevQuery.l + 6,
            }))
          }
          variant={"followingBtn"}
          isLoading={isFetching}
          mb={"20px"}
        >
          Load more...
        </Button>
      )}
    </>
  );
};
