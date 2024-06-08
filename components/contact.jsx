import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function contact() {
  return (
    <div
      id="contact"
      className="container h-full flex flex-col gap-4 justify-evenly py-14 lg:py-20 lg:w-2/3 lg:mx-auto xl:h-screen"
    >
      <p className="text-4xl text-center font-normal text-teal-400 lg:py-6 ">
        CONTACT
      </p>
      <Input placeholder="Name" className="lg:h-14" />
      <Input type="email" placeholder="Email" className="lg:h-14" />
      <div className="grid w-full gap-2">
        <Textarea
          placeholder="Type your message here."
          className="lg:h-48 mb-10"
        />
        <Button>Send message</Button>
      </div>
    </div>
  );
}
