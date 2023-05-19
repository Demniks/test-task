import React from "react";
import userLine from "../../images/Rectangle.png";
import userLine2x from "../../images/Rectangle@2x.png";
import userStroke from "../../images/Ellipse.png";
import userStroke2x from "../../images/Ellipse@2x.png";
import pictureBackground from "../../images/pictureBackground.png";
import pictureBackground2x from "../../images/pictureBackground@2x.png";
import logo from "../../images/Logo.png";
import logo2x from "../../images/Logo@2x.png";

import { StyledDiv } from "./Tweet.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../redux/usersSelectors";
import { putUsers } from "../../redux/usersSlice";

const TweetComp = ({ user }) => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const onFollowBtn = () => {
    const userData = users.filter((updUser) => updUser.id === user.id);
    const newFollowers = userData[0].followers + 1;
    const newFollowingStatus = true;

    const userDataToUpd = {
      id: user.id,
      followers: newFollowers,
      isFollowed: newFollowingStatus,
    };

    dispatch(putUsers(userDataToUpd));
  };

  const onUnFollowBtn = () => {
    const userData = users.filter((updUser) => updUser.id === user.id);
    const newFollowers = userData[0].followers - 1;
    const newFollowingStatus = false;

    const userDataToUpd = {
      id: user.id,
      followers: newFollowers,
      isFollowed: newFollowingStatus,
    };

    dispatch(putUsers(userDataToUpd));
  };

  return (
    <StyledDiv>
      <picture>
        <source srcSet={`${logo} 1x, ${logo2x} 2x`} />
        <img src={`${logo}`} alt="logo goit" className="logo" />
      </picture>
      <picture>
        <source srcSet={`${pictureBackground} 1x, ${pictureBackground2x} 2x`} />
        <img
          src={`${pictureBackground}`}
          alt="pictureBackground"
          className="pictureBackground"
        />
      </picture>
      <picture>
        <source srcSet={`${userLine} 1x, ${userLine2x} 2x`} />
        <img src={`${userLine}`} alt="decorative line" className="userLine" />
      </picture>
      <img
        src={`${user.avatar}`}
        alt="userAvatar"
        width="80px"
        className="userAvatar"
      />
      <picture>
        <source srcSet={`${userStroke} 1x, ${userStroke2x} 2x`} />
        <img
          src={`${userStroke}`}
          alt="decorative line"
          className="userStroke"
        />
      </picture>

      <p className="tweets">{user.tweets} tweets</p>
      <p className="followers">
        {user.followers.toLocaleString("en", { useGrouping: true })} followers
      </p>
      {user.isFollowed ? (
        <button type="button" className="followed" onClick={onUnFollowBtn}>
          following
        </button>
      ) : (
        <button type="button" onClick={onFollowBtn}>
          follow
        </button>
      )}
    </StyledDiv>
  );
};

export default TweetComp;
