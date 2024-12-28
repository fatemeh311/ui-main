"use client";

import { Button } from "@/app/_components/button/button";
import { useForm } from "react-hook-form";
import { SignIn } from "../_types/signin.types";
import { TextInput } from "@/app/_components/form-input";
import { useRouter } from "next/navigation";
import { useSignIn } from "../_api/signin";
import { useNotificationStore } from "@/stores/notification.store";


const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm<SignIn>();

    const router = useRouter();

    const showNotification = useNotificationStore(state => state.showNotification);

    const signIn = useSignIn({
      onSuccess: () => {
          router.push(`/verify?mobileNumber=${getValues('mobileNumber')}`)
          showNotification({
            message: 'کد تایید به شماره شما ارسال شد',
            type: 'info'
        })
      }
  })

  const onSubmit = (data: SignIn) => {
    signIn.submit(data);
}
  return (
    <>
      <h5 className="text-2xl">ورود | ثبت نام</h5>
      <p className="mt-2"></p>
      <form className="flex flex-col gap-6 mt-16" onSubmit={handleSubmit(onSubmit)}>
      <TextInput<SignIn>
                  register={register}
                  name={"mobileNumber"}
                  rules={{
                    required: 'شماره موبایل الزامی است',
                    maxLength: {
                        value: 11,
                        message: 'شماره موبایل باید 11 رقم باشد'
                      },
                      minLength: {
                        value: 11,
                        message: 'شماره موبایل باید 11 رقم باشد'
                      }
                  }}
                  errors={errors}
                />
        <Button type="submit" variant="primary" isLoading={signIn.isPending}>
          تایید و دریافت کد
        </Button>
      </form>
    </>
  );
};

export default SignInForm;