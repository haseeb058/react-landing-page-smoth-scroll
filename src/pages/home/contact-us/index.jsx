import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "components/input";
import Card from "components/card";
import Button from "components/button";
import { createNotification } from "common/create-notification";

import style from "./contact-us.module.scss";
import Container from "components/container";

function ContactUsSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    createNotification("success", "Your message has been sent successfully");
  };
  return (
    <Container>
      <div id="contact-us" className={style.mainWrapper}>
        <Card className={style.FormWrapper}>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
            <div className={style.gridTwo} style={{ marginTop: "15px" }}>
              <Input
                register={register}
                name={"fullName"}
                label={"Full Name *"}
                errorMessage={errors?.fullName?.message}
              />
              <Input
                register={register}
                name={"phoneNo"}
                label={"Phone No *"}
                errorMessage={errors?.phoneNo?.message}
              />
            </div>
            <Input
              register={register}
              name={"email"}
              label={"Email"}
              errorMessage={errors?.email?.message}
            />
            <div className={style.messageWrapper}>
              <label className={style.messageLabel}>Message *</label>
              <textarea
                {...(register && register("message"))}
                name={"message"}
                label={"message *"}
                rows={10}
                errorMessage={errors?.message?.message}
              />
            </div>
            <div className={style.footerDiv}>
              <Button
                title={"Submit"}
                type={"Submit"}
                className={style.btnLogin}
              />
            </div>
          </form>
        </Card>
      </div>
    </Container>
  );
}

export default ContactUsSection;

export const formSchema = yup.object().shape({
  fullName: yup.string().required("Please select full name"),
  email: yup.string().required("Please enter the email"),
  phoneNo: yup.string().required("Please enter the phone number"),
});
