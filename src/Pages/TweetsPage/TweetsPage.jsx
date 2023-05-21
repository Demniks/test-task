import { useNavigate } from "react-router-dom";
import TweetsList from "components/TweetsList/TweetsList";
import { GoBack } from "./TweetsPage.styled";


const HomePage = () => {
  const navigate = useNavigate()
  const goBack = () => navigate("/");
  return (
    <main>
      <div>
        <GoBack onClick={goBack}>
          {/* <FaArrowLeft /> */}
          Go Back
        </GoBack>
        <TweetsList />
      </div>
    </main>
  );
};

export default HomePage;
