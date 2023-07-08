import { useRef } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {};

function Contact({}: Props) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y34piq1",
        "template_42vuntv",
        e.target as HTMLFormElement,
        "F-dMfiA1oGrqpZXvo"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (form.current) {
            form.current.reset();
          }
          toast.success('Message sent successfully!', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send message!', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
      );
  };
  

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-center items-center max-w-full justify-center mx-auto z-0   xl:h-screen   lg:h-[120vh]   md:h-[120vh]">
       <ToastContainer />
      <h3 className="absolute top-24 uppercase text-2xl text-white">
        <span className="tracking-[20px]">Contact m</span>e
      </h3>

      {/* The Big Container that have the heading , contact and form items */}
      <div className="flex flex-col items-center mt-20     xl:mt-32     lg:mt-2     md:-mt-6     xs:mt-20">
        <h4 className="font-semibold text-center    xl:text-5xl    lg:text-4xl    md:text-3xl    sm:text-xl    xs:mt-7">
          I have got just what you need.{" "}
          <span className="text-orange-500 animate-pulse">
            Let&apos;s Talk
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
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-2 w-fit   xs:justify-center   xs:items-center"
          >
            <div className="flex space-x-2 flex-row   xs:flex-col   xs:space-x-0   xs:space-y-2">
              <input
                placeholder="Name"
                name="user_name"
                className="contactInput"
                type="text"
              />
              <input
                placeholder="Email"
                name="user_email"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              placeholder="Subject"
              name="subject"
              className="contactInput"
              type="text"
            />
            <textarea
              placeholder="Message"
              name="message"
              className="contactInput"
            />
            <button type="submit" value="Send" className="bg-orange-500 cursor-pointer py-5 px-10 text-black font-bold text-lg rounded-md   xs:w-36   xs:h-16">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
