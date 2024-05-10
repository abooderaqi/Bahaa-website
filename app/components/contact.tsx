"use client"
import React, { FormEvent } from "react"
import { useForm } from "react-hook-form"
import { CgMail } from "react-icons/cg"

import { sendEmail } from "../api/mail/sendEmail"

const Contact = () => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      subject: "",
      email: "",
      textarea: "",
    },
  })

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget)
    const message = formData.get("message")
    const email = formData.get("email")
    const subject = formData.get("subject")
    console.log(message, email, subject)

    reset()
  }

  return (
    <div
      className="h-fit w-full mx-auto flex flex-col gap-y-10 lg:mb-0 p-[9.8rem] container max-sm:p-8 max-sm:mb-8 md:p-8 md:mb-8 sm:p-8 sm:mb-8"
      id="contactSection"
    >
      <div className="flex flex-col justify-center items-center gap-1 ">
        <p className="text-[0.9rem]">Get In Touch</p>
        <h1 className="text-5xl font-bold">Contact Me</h1>
      </div>
      <div className="flex justify-center items-center">
        {/* <form
          onSubmit={handleSubmit(() => onSubmit)}
          className="flex flex-col gap-4"
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "This field is required",
            })}
            className="border border-slate-900 rounded-lg p-2 w-fit"
          />
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            {...register("subject", {
              required: "This field is required",
            })}
            className="border border-slate-900 rounded-lg p-2 w-fit"
          />

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            {...register("textarea", { required: "Please leave a comment" })}
            rows={4}
            className="block p-2.5 w-full text-sm border-slate-900 text-gray-900 bg-gray-50 rounded-lg border  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
          <button
            onClick={() => onSubmit}
            className="border border-slate-900 p-3  text-center flex justify-center items-center rounded-xl mx-auto w-fit"
          >
            Submit
          </button>
        </form> */}
        <div className="dev">
          <a
            href="mailto:devabood64@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-3xl justify-center cursor-pointer text-md font-bold border border-slate-900    hover:text-white hover:bg-slate-900 dark:hover:bg-[#fff] dark:hover:text-slate-900  dark:border-white"
          >
            <CgMail size={25} />
            devabood64@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
