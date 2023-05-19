import { Oval } from "react-loader-spinner";
import { LoaderCenter } from "./Loading.styled";
const Loading = () => {
  return (
    <LoaderCenter>
      <Oval
        height={80}
        width={80}
        color="#e6373d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoaderCenter>
  );
};

export default Loading;
