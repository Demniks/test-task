import { MovieLink } from "./NotFound.styled";

const NotFoundPage = () => {
  return (
    <main>
      <img
        src="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_960_720.png"
        alt="Not Found"
        width={300}
      />
      <h2>Page not found</h2>
      <MovieLink to="/">To Home Page</MovieLink>
    </main>
  );
};
export default NotFoundPage;
