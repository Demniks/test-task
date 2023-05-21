import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "components/Loading/loading";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const TweetsPage = lazy(() => import("./Pages/TweetsPage/TweetsPage"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage/NotFoundPage"));

const UseRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UseRoutes;
