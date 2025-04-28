import { Suspense, lazy } from "react";
import Layout from "./layout/Layout";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";

const Testimonials = lazy(
  () => import("./components/testimonials/Testimonials")
);
const Pricing = lazy(() => import("./components/pricing/Pricing"));

const App = () => {
  return (
    <Layout>
      <Hero />
      <Features />

      <Suspense
        fallback={
          <div className="text-center py-10">Loading testimonials...</div>
        }
      >
        <Testimonials />
      </Suspense>

      <Suspense
        fallback={<div className="text-center py-10">Loading pricing...</div>}
      >
        <Pricing />
      </Suspense>
    </Layout>
  );
};

export default App;
