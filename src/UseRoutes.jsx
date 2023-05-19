import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "components/Loading/loading";

const HomePage = lazy(() => import("./components/Pages/HomePage/HomePage"));
const TweetsPage = lazy(() => import("./components/Pages/TweetsPage/TweetsPage"));

const UseRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default UseRoutes;
