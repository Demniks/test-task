import React, { useState } from "react";
import TweetComp from "../Tweet/Tweet";
import { useSelector } from "react-redux";
import { selectLoading, selectUsers } from "../../redux/usersSelectors";
import { StyledBtn, StyledUl } from "./TweetsList.styled";

const TweetsList = () => {
  const [visible, setVisible] = useState(3);

  const onLoadMoreBtn = () => {
    setVisible((prevState) => prevState + 3);
  };

  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);
  return (
    <>
      <StyledUl>
        {!isLoading &&
          users.length > 0 &&
          users.slice(0, visible).map((user) => {
            return (
              <li key={user.id}>
                <TweetComp user={user} />
              </li>
            );
          })}
      </StyledUl>
      {visible < users.length && (
        <StyledBtn type="button" onClick={onLoadMoreBtn}>
          Load more
        </StyledBtn>
      )}
    </>
  );
};

export default TweetsList;
