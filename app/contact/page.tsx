"use client";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";

export default function ContactForm() {
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLInputElement | null>(null);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [textError, setTextError] = useState("");

  const sendEmail = async function name(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPhoneError("");
    setTextError("");

    let isValid = true;
    if (!firstNameRef.current?.value) {
      setFirstNameError("First name is required");
      isValid = false;
    }
    if (!lastNameRef.current?.value) {
      setLastNameError("Last name is required");
      isValid = false;
    }
    if (!emailRef.current?.value) {
      setEmailError("Email is required");
      isValid = false;
    }

    if (
      phoneRef.current?.value &&
      phoneRef.current?.value.toString().length <= 6
    ) {
      setPhoneError("Phone number is at least 6 digits long");
      isValid = false;
    }

    if (
      textRef.current?.value &&
      textRef.current?.value.toString().length <= 12
    ) {
      setTextError("Please send us some details.");
      isValid = false;
    }

    if (isValid) {
      try {
        const firstName = firstNameRef.current?.value;
        const lastName = lastNameRef.current?.value;
        const email = emailRef.current?.value;
        const phone = phoneRef.current?.value;
        const text = textRef.current?.value;
        const data = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          text: text,
        };
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className="mt-16 mb-16">
      <div className="h-screen flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className="dark:border-white/[0.2] border border-transparent max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to Impact Studios
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            To make a website for you, enter us your contact info. We will reach
            out to you on your contact info.
          </p>

          <form className="my-8" onSubmit={sendEmail}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="Tyler"
                  type="text"
                  ref={firstNameRef}
                />
                {firstNameError && (
                  <p className="text-red-500 text-sm">{firstNameError}</p>
                )}
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Durden"
                  type="text"
                  ref={lastNameRef}
                />
                {lastNameError && (
                  <p className="text-red-500 text-sm">{lastNameError}</p>
                )}
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address / Discord ID</Label>
              <Input
                id="email"
                placeholder="imaginee@lol.com / avalynndev"
                type="text"
                ref={emailRef}
              />
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="phone">Phone Number (optional)</Label>
              <Input
                id="phone"
                placeholder="1919191919"
                type="number"
                ref={phoneRef}
              />
              {phoneError && (
                <p className="text-red-500 text-sm">{phoneError}</p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="text">Any message (optional)</Label>
              <Input
                id="text"
                placeholder="blah blah blah"
                type="string"
                ref={textRef}
              />
              {textError && <p className="text-red-500 text-sm">{textError}</p>}
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send &rarr;
              <BottomGradient />
            </button>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
