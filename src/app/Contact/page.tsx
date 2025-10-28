"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const Info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 326954731",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "arfa.naved0906@gmail.com",
  },
  {
    icon: <FaGithub />,
    title: "Github",
    description: "https://github.com/Development-With-Arfa",
  },
  {
    icon: <SiVercel />,
    title: "Vercel",
    description: "https://vercel.com/arfa-naveeds-projects",
  },
];

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "1d55e920-43c4-42dc-98b3-45f0ced53148",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setSuccessMessage("✅ Form submitted successfully!");
      e.target.reset(); // Clear form after submit
    } else {
      setSuccessMessage("❌ Failed to submit form. Please try again.");
    }
  }

  return (
    <section className="py-15 text-white">
      <h2 className="text-5xl flex justify-center font-bold text-white/90 mb-10">
        Contact
      </h2>
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-[30px] xl:px-15">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-3xl text-cyan-200">
                Let&apos;s Work Together
              </h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, reiciendis?Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Impedit, repellendus?
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="name" type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input name="email" type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone No" />
              </div>
              {/* Message */}
              <Textarea
                name="message"
                placeholder="Type your message here..."
                className="h-[200px]"
              />
              {/* success message */}
              {successMessage && (
                <p className="text-cyan-300 text-sm">{successMessage}</p>
              )}
              {/* button */}
              <Button
                size="lg"
                className="max-w-40 rounded-full bg-cyan-400 text-[#0d0d1f] hover:bg-cyan-800 hover:text-white"
              >
                Submit
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 mx-5 xl:mx-0">
            <ul className="flex flex-col gap-10">
              {Info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-cyan-300 flex items-center justify-center rounded-md">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
