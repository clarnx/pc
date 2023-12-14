"use client";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Languages from "@/Components/Language";
import Preloader from "@/Components/Preloader";

export default function page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="mt-14">
        <Languages />
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
      </main>
    </>
  );
}
