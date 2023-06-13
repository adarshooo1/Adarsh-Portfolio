import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import HeroBanner from "@/components/HeroBanner";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2100);

    return () => clearTimeout(timer);
  }, []);

  return(
  <div>{loading ? <Loader /> : " "}
  <HeroBanner/>
  </div>)
};

export default HomePage;
