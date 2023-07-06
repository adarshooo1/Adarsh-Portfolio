import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:adarshsinghak001@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message} (${formData.email})`);

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-center items-center max-w-full justify-center mx-auto z-0   xl:h-screen   lg:h-[120vh]   md:h-[120vh]">
      <h3 className="absolute top-24 uppercase text-2xl text-white">
        <span className="tracking-[20px]">Contact m</span>e
      </h3>

      {/* The Big Container that have the heading , contact and form items */}
      <div className="flex flex-col items-center mt-20     xl:mt-32     lg:mt-2     md:-mt-6     xs:mt-20">
        <h4 className="font-semibold text-center    xl:text-5xl    lg:text-4xl    md:text-3xl    sm:text-xl    xs:mt-7">
          I have got just what you need.{" "}
          <span className="text-orange-500 animate-pulse">
            Lets&apos;s Talk
          </span>
        </h4>

        {/* Div of Line just for styling */}
        {/*           |                   Global                        |  Extra large   |            Large        |        medium        |       Smaller        |     Extra Samll   |*/}
        <div className="flex h-[1px] mx:auto bg-white hover-translate     xl:my-10       lg:w-[900px] lg:my-10    md:my-6 md:w-[700px]   sm:w-[550px] sm:my-5   xs:w-[280px] xs:my-8"></div>

        {/* Container That have all contact information like contact and form */}
        {/*           |          Global                        |       Extra large      |   Large      |   medium    |   Smaller   |           Extra Samll            |    */}
        <div className="flex space-x-10  mx-auto items-center       xl:flex-row xl:mt-2    lg:flex-row   md:flex-col   sm:flex-col   xs:justify-center  xs:space-x-0">
          {/* Container that have Contact, mail and address in a text format */}
          <div className="space-y-5 flex flex-col     xl:items-start     lg:-mt-1     md:items-center md:mb-8     sm:items-center sm:mb-5 sm:space-y-2    xs:hidden ">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-orange-500 h-7 w-7 animate-pulse" />
              <p className="text-2xl   sm:text-lg   md:text-md   xs:text-sm ">
                +91-7011116245
              </p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-orange-500 h-7 w-7 animate-pulse" />
              <p className="text-2xl   sm:text-lg   md:text-md   xs:text-sm ">
                adarshsinghak001@gmail.com
              </p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-orange-500 h-7 w-7 animate-pulse" />
              <p className="text-2xl   sm:text-lg   md:text-md   xs:text-sm ">
                Sec-102, Noida, G.B Nagar
              </p>
            </div>
          </div>

          {/* Form Section that have  Name , E-mail , Subject , Message and Submit button */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit   xs:justify-center   xs:items-center"
          >
            <div className="flex space-x-2 flex-row   xs:flex-col   xs:space-x-0   xs:space-y-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button className="bg-orange-500 py-5 px-10 text-black font-bold text-lg rounded-md   xs:w-36   xs:h-16">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
