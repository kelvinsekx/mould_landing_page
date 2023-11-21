"use client";
import * as React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Container } from "@/components/creators/creators_container";

import { useForm } from "react-hook-form";

export default function WailtList() {
  return (
    <main className="text-moundUpWhite">
      <Container
        pad
        bg
        className="grid gap-8 md:grid-cols-[1fr_1fr] relative overflow-hidden"
      >
        <WailtList.Header />
        <WailtList.Form />
        <svg
          width="120vw"
          height="1112"
          viewBox="0 0 500 1412"
          fill="none"
          className="max-md:hidden absolute top-10"
        >
          <path
            d="M-721.692 667C-721.692 980.974 -464.255 1235.5 -146.692 1235.5C170.872 1235.5 428.308 980.974 428.308 667C428.308 353.026 -108.128 0 -425.692 0C-743.255 0 -721.692 353.026 -721.692 667Z"
            fill="#C4C4C4"
            fillOpacity="0.2"
          />
        </svg>
        <svg
          width="513"
          height="536"
          viewBox="0 0 513 536"
          fill="none"
          className="max-md:hidden absolute -top-[60px] -right-[20rem] -rotate-[15deg]"
        >
          <path
            d="M661.413 123.106C661.413 295.913 513.351 436 330.707 436C148.062 436 0 295.913 0 123.106C0 -49.6999 308.527 -244 491.171 -244C673.815 -244 661.413 -49.6999 661.413 123.106Z"
            fill="#C4C4C4"
            fill-opacity="0.2"
          />
        </svg>
      </Container>
    </main>
  );
}

const FormHeader = () => {
  return (
    <hgroup className="text-right md:relative md:top-20">
      <h1 className="text-moundUpGreen leading-[173.4%] text-2xl md:text-3xl lg:text-5xl font-black">
        JOIN THE WAITLIST
      </h1>
      <p className="text-lg font-normal text-moundUpBlack">
        {` Please fill out the form below, and we'll send you an invitation as soon as we are fully launched!`}
      </p>
    </hgroup>
  );
};
WailtList.Header = FormHeader;

const Form = () => {
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const { register, handleSubmit, watch } = useForm();
  const selectedOption = watch("user_type");

  const supabase = createClientComponentClient();
  const submitForm = async (d: {}) => {
    setError(false);
    setSuccess(false);

    const result = await supabase.from("waitlist").insert({ ...d });

    if (result.error) {
      setError(true);
    } else {
      setSuccess(true);
    }
    console.log(result);
  };
  return (
    <div className=" bg-moundUpBrown py-10 z-20">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="w-[80%] mx-auto flex gap-6 flex-col"
      >
        <header className="text-center font-extrabold text-lg">
          Join our Mailing List!
        </header>
        <div className="FULL_NAME">
          <label className="text-moundUpWhite">Full name</label>
          <div className="h-[48px] mt-2">
            <input
              type="text"
              className="w-full rounded-[3px] h-full text-moundUpBlack"
              {...register("full_name", { required: true })}
            />
          </div>
        </div>

        <div className="EMAIL">
          <label className="text-moundUpWhite">Email</label>
          <div className="h-[48px] mt-2">
            <input
              type="email"
              className="w-full rounded-[3px] h-full text-moundUpBlack"
              {...register("email", { required: true })}
            />
          </div>
        </div>

        <div className="PHONE_NO">
          <label className="text-moundUpWhite">Phone number</label>
          <div className="h-[48px] mt-2">
            <input
              type="text"
              className="w-full rounded-[3px] h-full text-moundUpBlack"
              {...register("phone_number", { required: true })}
            />
          </div>
        </div>

        <div>
          What best describes you?
          <div className="flex gap-3  mt-2">
            <div className="flex items-center mr-4 mb-4">
              <input
                id="radio1"
                type="radio"
                {...register("user_type")}
                className="hidden"
                value={"Investor"}
              />
              <label
                htmlFor="radio1"
                className="flex items-center cursor-pointer"
              >
                <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                Investor
              </label>
            </div>
            <div className="flex items-center mr-4 mb-4">
              <input
                id="radio2"
                type="radio"
                {...register("user_type")}
                className="hidden"
                value={"Fundraiser"}
              />
              <label
                htmlFor="radio2"
                className="flex items-center cursor-pointer"
              >
                <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                Fundraiser
              </label>
            </div>
          </div>
        </div>
        {selectedOption === "Fundraiser" ? (
          <div className="NAME_OF_COMPANY">
            <label className="text-moundUpWhite">Name of your company</label>
            <div className="h-[48px] mt-2">
              <input
                type="text"
                className="w-full rounded-[3px] h-full text-moundUpBlack"
                {...register("company_name")}
              />
            </div>
          </div>
        ) : (
          <div />
        )}
        <button className="bg-moundUpGreen__light text-moundUpGreen h-[48px] rounded font-semibold mt-4">
          Submit
        </button>
        {error && (
          <p className="bg-red-600 text-moundUpWhite p-2">
            There was an error reaching the server...
          </p>
        )}
        {success && (
          <p className="bg-green-600 text-moundUpWhite p-2">
            Thanks, your form is successfully collected...
          </p>
        )}
      </form>
    </div>
  );
};
WailtList.Form = Form;
