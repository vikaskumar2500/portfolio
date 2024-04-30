"use client";
import React, { useCallback, useEffect, useState } from "react";
import { SectionHeading } from "../section-heading";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useActiveSection } from "@/hooks/use-active-section";
import { useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { Send, XCircle } from "lucide-react";
import { z, ZodError } from "zod";

const ContactSchema = z.object({
  email: z.string().email("Invalid email"),
  description: z.string().min(9, "Write the description atleast in 10 words"),
});

type FieldValues = z.infer<typeof ContactSchema>;
type FieldErrors = {
  email?: string[] | undefined;
  description?: string[] | undefined;
};

const Contact = () => {
  const [errors, setErrors] = useState<FieldErrors | null>(null);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { activeSection, setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) setActiveSection("Contact");
  }, [inView, activeSection]);

  const handleContact = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const description = formData.get("description") as string;
    const { error, data } = await ContactSchema.safeParseAsync({
      email,
      description,
    });
    if (error) {
      return setErrors(error.formErrors.fieldErrors);
    }
    setErrors(null);
    console.log("res", data);
    console.log("description", description);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="scroll-mt-28 flex flex-col gap-2 w-[min(100%, 38rem)] !bg-white p-10"
    >
      <SectionHeading className="mb-4">Contact me</SectionHeading>
      <p className="text-neutral-700 font-sm text-xs mb-5">
        <span>Please contact me directly </span>
        <a
          href="mailto:vikas.nits8084@gmail.com"
          className="underline text-blue-700"
        >
          vikas.nits8084@gmail.com
        </a>{" "}
        <span>or through this form!</span>
      </p>
      <form className="flex flex-col gap-2" action={handleContact}>
        <div>
          <div className="flex flex-col items-start gap-1">
            <Label htmlFor="email" className="font-semibold text-base">
              Email address or Phone
            </Label>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Email address or phone"
            />
          </div>
          {errors?.email && (
            <div className="flex items-center gap-1 p-2">
              <XCircle color="red" size={16} className="text-xs" />
              <p className="text-red-500 text-xs">{errors?.email[0]}</p>
            </div>
          )}
        </div>
        <div>
          <div className="flex flex-col items-start gap-1">
            <Label htmlFor="description" className="font-semibold text-base">
              Description
            </Label>

            <Textarea
              typeof="text"
              id="description"
              name="description"
              placeholder="Please write the description"
            />
          </div>
        </div>
        {errors?.description && (
          <div className="flex items-center gap-1 p-1">
            <XCircle color="red" size={16} className="text-xs" />
            <p className="text-red-500 text-xs">{errors?.description[0]}</p>
          </div>
        )}
        <Button
          type="submit"
          size="sm"
          className="mt-2 hover:scale-y-110 flex items-center justify-center gap-5"
        >
          <span>Contact</span>
          <Send size={20} className="" />
        </Button>
        {/* <Button className="flex items-center justify-center gap-2">
          <Spinner className="w-5 h-5 animate-spin border-[3.1px]" />
          <p>
            Please wait
            <span className="transition animate-ping font-bold text-xl">
              ...
            </span>
          </p>
        </Button> */}
      </form>
    </section>
  );
};

export default Contact;
