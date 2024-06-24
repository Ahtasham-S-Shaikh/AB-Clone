"use client";
import Image from "next/image";
import Banner from "../../sections/thankyou/banner/banner";
import Planner from "../../sections/thankyou/planner/planner";
import {useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/sections/Footer";

export default function Thankyou() {
  const router = useRouter();
  const [isPublicUser, setIsPublicUser] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("isPublicUser")) {
      router.push("/");
    }
    else {
      setIsPublicUser(true);
    }
  }, [router]);

  if (!isPublicUser) {
    return null;
  }

  return (
    <>
      <Banner />
      <Planner />
      <div className="flex-grow border-8 border-white"></div>
      <Footer />
    </>
  );
}
