"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading, SubmitButton } from "../UI";
import { useSectionInView } from "@/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "sonner";

type Props = {};

const Contact = (props: Props) => {
  const { ref } = useSectionInView({
    sectionName: "Contact",
    threshold: 0.5,
  });
  const formElementRef = useRef<HTMLFormElement | null>(null);

  const resetFormValues = () => {
    if (formElementRef.current) {
      formElementRef.current.reset();
    }
  };

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      ref={ref}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 text-center -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:shreyasvaidya963@gmail.com">
          shreyasvaidya963@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        id="contact-form"
        className="mt-10 flex flex-col dark:text-black"
        ref={formElementRef}
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            resetFormValues();
            return;
          }

          if (data?.error) {
            toast.error(data?.error?.message);
            resetFormValues();
            return;
          }

          toast.success("Email sent successfully");
          resetFormValues();
        }}
      >
        <input
          name="email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          aria-label="Enter your email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          aria-label="Enter your message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
