"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  emailRegex,
  mobileRegex,
  nameRegex,
  OTPRegex,
} from "@/utils/regexValidator";
import { useRouter, useSearchParams } from "next/navigation";
import "./form.css";
import { userExistsCheck, storeLeads } from "../../utils/storeleads";

const Form = ({ data, handleChange, options, onSubmit, errors, setData }) => {
  const [toggleState, setToggleState] = useState(true);
  const clickToggleState = () => {
    setToggleState(!toggleState);
  };

  const setItem = (value) => {
    setData({ ...data, city: value });
    clickToggleState();
  };

  return (
    <div className="mx-auto bg-[#FFFFFF]  opacity-80 rounded-lg md:px-8  px-4 md:pt-4 pt-2 md:pb-4 pb-2 mb-4 ">
      <p className="text-xl md:text-2xl  font-['nohemiSemiBold'] font-semibold    tracking-wider mt-4">
        Take the first step
      </p>
      <p className="font-medium font-['hind-regular'] md:text-[1.063rem] text-base   tracking-wide  md:leading-6 leading-5  md:py-2 py-0">
        And get a free consultation before you start a project with us!
      </p>

      <div className="w-full ">
        <form onSubmit={onSubmit}>
          <div className="mt-4 mb-2">
            <div className="flex flex-col md:flex-row gap-x-[20px] gap-y-2 ">
              <input
                className={` shadow font-['hind-regular'] appearance-none text-xs  px-4   py-2  tracking-wider bg-transparent border placeholder-black border-[#FDA170] rounded w-full  text-black mb-3 leading-tight focus:outline-none focus:shadow-outline font-normal ${
                  errors.errorName ? "border-red-600" : ""
                }`}
                id="firstname"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
                type="text"
                placeholder="FIRST NAME"
              />
              <input
                className={` shadow font-['hind-regular'] appearance-none text-xs  px-4   py-2  tracking-wider bg-transparent border placeholder-black border-[#FDA170] rounded w-full  text-black mb-3 leading-tight focus:outline-none focus:shadow-outline font-normal ${
                  errors.errorName ? "border-red-600" : ""
                }`}
                id="lastname"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
                type="text"
                placeholder="LAST NAME"
              />
            </div>
            {errors.errorName && (
              <div className="text-red-500 text-xs pb-1 pl-1 ">
                {errors.errorName}
              </div>
            )}
          </div>
          <div className="mb-2">
            <input
              className={`font-['hind-regular'] shadow appearance-none text-xs  px-4   py-2  tracking-wider bg-transparent border placeholder-black border-[#FDA170] rounded w-full  text-black mb-3 leading-tight focus:outline-none focus:shadow-outline font-normal ${
                errors.errorPhone ? "border-red-600" : ""
              }`}
              id="email"
              name="email"
              onChange={handleChange}
              value={data.email}
              type="email"
              placeholder="EMAIL"
            />

            {errors.errorEmail && (
              <div className="text-red-500 text-xs pb-1 pl-1">
                {errors.errorEmail}
              </div>
            )}
          </div>
          <div className="mb-2">
            <div className="relative inline-block text-left w-full">
              <div>
                <button
                  id="dropdown-button"
                  type="button"
                  className=" font-['hind-regular'] inline-flex justify-between items-center bg-transparent text-black  border  text-xs  px-4   py-2 focus:ring-blue-500 border-[#FDA170] focus:border-[#FDA170] w-full rounded   mb-3 leading-tight focus:outline-none focus:shadow-outline font-normal "
                  onClick={clickToggleState}
                >
                  {data.city}

                  <svg
                    className="-mr-1 ml-2 h-3.5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0l4 4a1 1 0 001.414 0l4-4a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div
                id="dropdown-menu"
                className={`origin-top-right absolute    w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
                  toggleState ? "hidden" : "block"
                }`}
              >
                <div
                  className="py-1 h-[8.5rem] overflow-y-auto"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-button"
                  style={{ scrollbarWidth: "thin" }}
                >
                  {options.map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setItem(option)}
                      className="font-['hind-regular'] block w-full text-start px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {errors.errorCity && (
              <div className="text-red-500 text-xs pb-1 pl-1">
                {errors.errorCity}
              </div>
            )}
          </div>

          <div className="mb-2">
            <input
              className={`font-['hind-regular'] shadow appearance-none text-xs  px-4   py-2  tracking-wider bg-transparent border placeholder-black border-[#FDA170] rounded w-full  text-black mb-3 leading-tight focus:outline-none focus:shadow-outline font-normal ${
                errors.errorPhone ? "border-red-600" : ""
              }`}
              name="phone"
              onChange={handleChange}
              value={data.phone}
              id="number"
              maxLength="10"
              type="number"
              placeholder="PHONE"
            />
            {errors.errorPhone && (
              <div className="text-red-500 text-xs pb-1 pl-1 ">
                {errors.errorPhone}
              </div>
            )}

            {errors.errorLeadCopy !== "" && (
              <div className="text-red-500 text-xs pb-1 pl-1  mb-2 ">
                {errors.errorLeadCopy}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#FF5900] text-sm md:text-base tracking-widest text-white font-semibold md:py-3 py-2  mb-4 px-4 border border-gray-400 rounded-lg shadow w-full"
          >
            GET OTP
          </button>
        </form>
      </div>
    </div>
  );
};

const OtpForm = ({
  prevState,
  onSubmit,
  OTP,
  setOTP,
  errors,
  resendCode,
  loading,
  phoneNumber,
}) => {
  const [countdown, setCountdown] = useState(10);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const timeoutIdRef = useRef();
  const [resend, setResend] = useState(true);

  const startCountdown = (currentCountdown) => {
    setCountdown(currentCountdown);

    if (currentCountdown > 0) {
      timeoutIdRef.current = setTimeout(
        () => startCountdown(currentCountdown - 1),
        1000
      );
    } else {
      setButtonDisabled(true);
      setResend(false);
    }
  };

  // Start the countdown when your component mounts
  useEffect(() => {
    startCountdown(120);
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);
  const padTime = (time) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };

  const format = (time) => {
    // Convert seconds into minutes and take the whole part
    const minutes = Math.floor(time / 60);

    // Get the seconds left after converting minutes
    const seconds = time % 60;

    //Return combined values as string in format mm:ss
    return `${minutes}:${padTime(seconds)}`;
  };

  return (
    <div className="mx-auto bg-[#FFFFFF]  opacity-80 rounded-lg px-8 pt-4 pb-4 mb-4">
      <div className="text-xl md:text-2xl  font-['nohemiSemiBold'] font-semibold    tracking-wider mt-4">
        <p className="tracking-wider">Almost There!</p>
        <p className="tracking-wider">Verify With OTP</p>
      </div>

      <p className="font-medium font-['hind-regular']  md:text-[1.125rem] text-base  tracking-wider leading-6   md:py-3 py-1">
        Enter one time password sent to XXXXXX{phoneNumber} for verification.
      </p>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          prevState();
        }}
        className="font-['hind-regular'] md:text-xl text-base  underline py-1 text-[#FF5900]"
      >
        Edit Number
      </a>

      <div className="w-full ">
        <form onSubmit={onSubmit}>
          {resend ? (
            <div className="mt-4 mb-2 flex font-['hind-regular']  text-sm md:text-base  tracking-wider py-1 md:space-x-1">
              <p>Your OTP will expire in {format(countdown)} secs</p>
            </div>
          ) : (
            <div className="mt-4 mb-2">
              <p className="font-['hind-regular'] text-sm md:text-base tracking-wider py-1">
                Didn&apos;t get it?{" "}
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    resendCode();
                    setResend(true);
                    startCountdown(120);
                    setButtonDisabled(false);
                  }}
                  className="text-sm md:text-base underline py-1 text-[#FF5900]"
                >
                  Resend OTP
                </a>
              </p>
            </div>
          )}
          <div className="mt-4 mb-10">
            <input
              className="font-['hind-regular'] shadow appearance-none text-xs  px-4   py-2 3   tracking-wider bg-transparent border placeholder-black border-[#FDA170] rounded w-full  text-black mb-3 leading-tight focus:outline-none focus:shadow-outline font-normal"
              id="password"
              type="number"
              maxLength="6"
              onChange={(e) => {
                e.target.value = e.target.value.slice(0, 6);
                setOTP(e.target.value);
              }}
              value={OTP}
              placeholder="OTP"
            />
            {errors.errorOTP !== "" && (
              <div className="text-red-500 text-xs pb-1 pl-1 ">
                {errors.errorOTP}
              </div>
            )}
          </div>

          <button
            type="submit"
            // className={` relative text-sm md:text-base tracking-widest text-white font-semibold md:py-4 py-2  mb-4 px-4 border border-gray-400 rounded-lg shadow w-full `}

            className={` relative text-sm md:text-base tracking-widest text-white font-semibold md:py-4 py-2  mb-4 px-4 border border-gray-400 rounded-lg shadow w-full ${
              !isButtonDisabled && !loading
                ? "class1"
                : loading
                ? "class1 class2"
                : isButtonDisabled
                ? "class3"
                : "class1"
            }`}
            disabled={isButtonDisabled}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

const FinalForm = ({}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const [options, setOptions] = useState([
    "Mumbai Metropolitan",
    "Pune",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Kolkata",
    "Delhi NCR",
    "Ahmedabad",
    "Jaipur",
    "Surat",
    "Coimbatore",
  ]);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    city: "CITY",
    phone: "",
    LeadSource: "",
  });
  const [truncatedPhone, setTruncatedPhone] = useState("");
  const [OTP, setOTP] = useState("");
  const [session, setSession] = useState("");
  const [changedSlide, setChangedSlide] = useState(false);

  const [errors, setError] = useState({
    errorName: "",
    errorPhone: "",
    errorCity: "",
    errorOTP: "",
    errorEmail: "",
    errorLeadCopy: "",
  });

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    window.adobeDataLayer = window.adobeDataLayer || [];
    window.adobeDataLayer.push({
      event: "page_view",
      page: "PaintCraft",
      url: "/",
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "phone") {
      // Limit the value to 10 characters
      let inputValue = value.slice(0, 10);
      // Update the state with the modified value
      setData({ ...data, phone: inputValue });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const validateErrors = async (validateEvent) => {
    let validationErrors = {};
    let moveForward = false;
    const emailError = emailRegex(validateEvent.email);
    const firstnameError = nameRegex(validateEvent.firstname);
    const lastnameError = nameRegex(validateEvent.lastname);
    const cityError = options.includes(validateEvent.city);
    const phoneError = mobileRegex(validateEvent.phone);
    let userExistsCheckResponse;

    if (!emailError)
      validationErrors.errorEmail = "*Please enter your email ID";
    if (!firstnameError || !lastnameError)
      validationErrors.errorName = "*Please enter your full name";
    if (!cityError) validationErrors.errorCity = "*Please choose your city";
    if (!phoneError)
      validationErrors.errorPhone = "*Please enter your mobile number";

    if (
      phoneError &&
      emailError &&
      firstnameError &&
      lastnameError &&
      cityError
    ) {
      userExistsCheckResponse = await userExistsCheck(validateEvent.phone);
      if (userExistsCheckResponse) {
        validationErrors.errorLeadCopy =
          "*Your phone number is already registered";
      }
    }

    if (
      !emailError ||
      !firstnameError ||
      !lastnameError ||
      !cityError ||
      !phoneError ||
      (userExistsCheckResponse !== undefined && userExistsCheckResponse)
    ) {
      moveForward = false;
    } else {
      moveForward = true;
    }

    return { validationErrors, moveForward };
  };

  const sendOTP = async () => {
    const formdata = {
      method: "POST",
      body: JSON.stringify(data),
    };
    let response = await fetch("/api/otp", formdata);
    window.adobeDataLayer.push({
      event: "Get OTP",
      page: "PaintCraft",
    });
    const response1 = await response.json();
    window.adobeDataLayer.push({
      event: "OTP Status",
      page: "PaintCraft",
      eventInfo: {
        "OTP Response": `${response1.Status}`,
      },
    });

    if (response1.Status === "Success") {
      setSession(response1?.Details);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setError({
      ...errors,
      errorName: "",
      errorPhone: "",
      errorCity: "",
      errorOTP: "",
      errorEmail: "",
      errorLeadCopy: "",
    });

    const { validationErrors, moveForward } = await validateErrors(data);

    setError((errors) => ({
      ...errors,
      ...validationErrors,
    }));

    if (moveForward) {
      try {
        await sendOTP();

        const phoneDataTrunc = data?.phone.slice(6);
        setTruncatedPhone(phoneDataTrunc);
      } catch (error) {
        console.log(error);
      }

      setActiveTab((prev) => prev + 1);
    }
  };

  const movePrevious = () => {
    setActiveTab((prev) => prev - 1);
  };

  const SendToSFDC = async (data) => {
    let Campaign_Medium__c = searchParams?.get("utm_medium");
    let Campaign_Name__c = searchParams?.get("utm_campaign");
    let Campaign_Source__c = searchParams?.get("utm_source");
    Campaign_Medium__c =
      Campaign_Medium__c === "" ? "direct" : Campaign_Medium__c;
    Campaign_Name__c = Campaign_Name__c === "" ? "direct" : Campaign_Name__c;
    Campaign_Source__c =
      Campaign_Source__c === "" ? "direct" : Campaign_Source__c;

    const finaldata = {
      firstName: data?.firstname,
      lastName: data?.lastname,
      email: data?.email,
      mobilePhone: data?.phone,
      LeadSource: "Customer Landing Page 2",
      City__c: data?.city,
      Campaign_Medium__c: Campaign_Medium__c || "direct",
      Campaign_Name__c: Campaign_Name__c || "direct",
      Campaign_Source__c: Campaign_Source__c || "direct",
    };

    const sdfcResponse = await storeLeads(finaldata);

    if (sdfcResponse) {
      const { bodyData, leadCreated } = sdfcResponse;
      window.adobeDataLayer.push({
        event: "lead_generated",
        page: "PaintCraft",
        eventInfo: {
          fullname: `${bodyData?.firstName} ${bodyData?.lastName}`,
          email: `${bodyData?.email}`,
          mobilenumber: `${bodyData?.mobilePhone}`,
          crmId: `${leadCreated?.id}`,
        },
      });

      localStorage.setItem("isPublicUser", true);

      return true;
    } else {
      return false;
    }
  };
  const downloadPDF = async (event) => {
    setError({
      ...errors,
      errorName: "",
      errorPhone: "",
      errorCity: "",
      errorOTP: "",
      errorEmail: "",
      errorLeadCopy: "",
    });

    event.preventDefault();

    if (!OTPRegex(OTP)) {
      setError((errors) => ({
        ...errors,
        errorOTP: "*Entered OTP is invalid",
      }));
      return;
    }

    try {
      const formdata = {
        method: "POST",
        body: JSON.stringify({ OTP, session }),
      };
      let response1 = await fetch("/api/validateotp", formdata);
      const OtpValidationResponse = await response1.json();

      if (OtpValidationResponse.Status === "Success") {
        setLoading(true);

        const response = await SendToSFDC(data);
        if (response) {
          const link = document.createElement("a");
          link.href = "/We Are PaintCraft by Aditya Birla!.pdf";
          link.setAttribute(
            "download",
            "We Are PaintCraft by Aditya Birla!.pdf"
          ); //or any other extension
          document.body.appendChild(link);
          link.click();
          window.adobeDataLayer.push({
            event: "page_view",
            page: "PaintCraft | Thank you",
            url: "/thank-you",
          });
          router.push("/thank-you");
        } else {
          setError((errors) => ({
            ...errors,
            errorOTP: "*Please try again",
          }));
        }
      } else if (OtpValidationResponse.Status === "Error") {
        setError((errors) => ({
          ...errors,
          errorOTP: "*Entered OTP is invalid or expired",
        }));

        window.adobeDataLayer.push({
          event: "OTP Status",
          page: "PaintCraft",
          eventInfo: {
            "OTP Response": `Entered OTP is invalid`,
          },
        });
        return;
      } else {
        setError((errors) => ({
          ...errors,
          errorOTP: "*Your OTP is expired Please resend the OTP",
        }));
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formElements = [
    <Form
      key={0}
      data={data}
      handleChange={handleChange}
      options={options}
      onSubmit={onSubmit}
      errors={errors}
      setData={setData}
    />,
    <OtpForm
      key={1}
      OTP={OTP}
      setOTP={setOTP}
      handleChange={handleChange}
      prevState={movePrevious}
      onSubmit={downloadPDF}
      errors={errors}
      resendCode={sendOTP}
      loading={loading}
      phoneNumber={truncatedPhone}
    />,
  ];
  return <>{formElements[activeTab]}</>;
};

export default FinalForm;
