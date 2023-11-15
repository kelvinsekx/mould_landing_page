'use client'

import { Container } from "@/components/creators/creators_container";
import React from "react";

export default function WailtList() {
  return (
    <main className="text-moundUpWhite">
      <Container pad bg className="grid gap-8 md:grid-cols-[1fr_1fr] relative">
        <WailtList.Header />
        <WailtList.Form />
      </Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="429"
        viewBox="0 0 429 1112"
        fill="none"
        className="flex grow absolute top-0 -z-10"
      >
        <path
          d="M-721.692 667C-721.692 980.974 -464.255 1235.5 -146.692 1235.5C170.872 1235.5 428.308 980.974 428.308 667C428.308 353.026 -108.128 0 -425.692 0C-743.255 0 -721.692 353.026 -721.692 667Z"
          fill="#C4C4C4"
          fillOpacity="0.2"
        />
      </svg>
    </main>
  );
}

const FormHeader = () => {
  return (
    <hgroup className="text-right relative md:top-20">
      <h1 className="text-moundUpGreen leading-[173.4%] text-2xl md:text-3xl lg:text-5xl font-black">
        JOIN THE WAITLIST
      </h1>
      <p className="text-lg font-normal text-moundUpBlack">
       {` Please fill out the form below, and we'll send you an invitation as soon as we are fully launched!`}
      </p>

    </hgroup>
  );
};
WailtList.Header = FormHeader

const Form = () => {
  const submitForm = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const data: {
      whatYouWannaInvest?: string | File;
      phoneNumber?: string | File;
      fullName?: string | File;
      email?: string | File;
    } = {};
    data["whatYouWannaInvest"] = form.get("whatYouWannaInvest") || '';
    data["phoneNumber"] = form.get("phoneNumber") || '';
    data["fullName"] = form.get("fullName") || '';
    data["email"] = form.get("email") || '';


    console.log(data)
  }
  return (
    <div className=" bg-moundUpBrown py-10">
      <form
        onSubmit={submitForm}
        className="w-[80%] mx-auto flex gap-6 flex-col"
      >
        <header className="text-center font-extrabold text-lg">
          Join our Mailing List!
        </header>
        <InputField labelText="Full name" name="fullName" />
        <InputField labelText="Email" name="email" />
        <InputField labelText="Phone number" name="phoneNumber" />
        <InputField
          labelText="How much are you willing to invest? "
          name="whatYouWannaInvest"
        />
        <button className="bg-moundUpGreen__light text-moundUpGreen h-[48px] rounded font-semibold mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};
WailtList.Form = Form;

const InputField: React.FC<
 React.ComponentPropsWithoutRef<'input'> & {labelText: string}
> = ({labelText, name})=> {
  return (
    <div>
      <label className="text-moundUpWhite">{labelText}</label>
      <div className="h-[48px] mt-2">
        <input type="text" className="w-full rounded-[3px] h-full" name={name} />
      </div>
    </div>
  );
}

