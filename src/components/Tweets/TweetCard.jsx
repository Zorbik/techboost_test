import { Box, Button, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addToFollowing } from "../../redux/users/followSlice";
import { removeFromFollowing } from "../../redux/users/followSlice";

export const TweetCard = ({ tweet }) => {
  const { id, user, tweets, followers, avatar } = tweet;
  const followingCards = useSelector((state) => state.following.items);
  const isFollowing = followingCards?.includes(id);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isFollowing) {
      dispatch(removeFromFollowing(id));
    } else {
      dispatch(addToFollowing(id));
    }
  };

  const formatNumberWithCommas = (number) => {
    const numString = String(number);

    if (numString.length <= 3) {
      return numString;
    } else {
      const remainingDigits = numString.slice(0, -3);
      const lastThreeDigits = numString.slice(-3);
      return formatNumberWithCommas(remainingDigits) + "," + lastThreeDigits;
    }
  };

  const formatedTweets = formatNumberWithCommas(tweets);
  const formatedFollowers = formatNumberWithCommas(followers);

  return (
    <>
      <Box
        h={"460px"}
        w={"380px"}
        bg={"cardBg"}
        position={"relative"}
        borderRadius={"md"}
        shadow={"cardShadow"}
      >
        <Box position={"absolute"} left={"20px"} top={"20px"}>
          <Image src="/src/assets/logo.svg" alt="logo" />
        </Box>
        <Box position={"absolute"} left={"36px"} top={"28px"}>
          <Image src="../../assets/picture.svg" alt="background" />
        </Box>
        <Box
          position={"absolute"}
          top={"214px"}
          w={"380px"}
          h={"8px"}
          bg={"textColor"}
          shadow={"lineShadow"}
        ></Box>
        <Box
          position={"absolute"}
          left={"150px"}
          top={"178px"}
          borderRadius={"full"}
          borderWidth={"8px"}
          overflow={"hidden"}
          w={"80px"}
          h={"80px"}
        >
          <Image src={avatar} alt={user} />
        </Box>
        <Text variant={"textCard"} mt={"284px"}>
          {formatedTweets} TWEETS
        </Text>
        <Text variant={"textCard"} mt={"16px"}>
          {formatedFollowers} FOLLOWERS
        </Text>
        {isFollowing ? (
          <Button variant={"followingBtn"} onClick={handleClick}>
            FOLLOWING
          </Button>
        ) : (
          <Button variant={"followBtn"} onClick={handleClick}>
            FOLLOW
          </Button>
        )}
      </Box>
    </>
  );
};

TweetCard.propTypes = {
  tweet: PropTypes.shape({
    id: PropTypes.string,
    user: PropTypes.string,
    tweets: PropTypes.number,
    followers: PropTypes.number,
    avatar: PropTypes.string,
  }),
};
