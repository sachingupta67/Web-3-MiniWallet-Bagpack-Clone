import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { saveDataToLocalStorage } from "@/utils/localStorage";
import { LC_CONST } from "@/constants/localStorage";
import { useLocation, useNavigate } from "react-router-dom";
import ROUTES from "@/constants/routes";
import { useAppDispatch } from "@/core/redux";
import { createPasswordAction } from "@/core/redux/reducers/globalSlice";
import useAccount from "@/utils/hooks/useAccounts";

const FormSchema = z
  .object({
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Confirm Password must be at least 8 characters.",
    }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      path: ["confirmPassword"], // Error is associated with confirmPassword field
      message: "Passwords do not match.",
    }
  );

function CreatePassword() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { createAccount } = useAccount();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // Define the onSubmit function to handle form submission
  function onSubmit(data: z.infer<typeof FormSchema>) {
    saveDataToLocalStorage(LC_CONST.CRED, data.confirmPassword);
    createAccount({ ...location.state }); // create account with password
    dispatch(createPasswordAction(data.confirmPassword));
    navigate(ROUTES.home); // once logged in need to navigate to Home
  }

  return (
    <div className="">
      <div className="mt-40 mb-10">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mb-2 text-white">
          Create a Password
        </h1>
        <h6 className="text-center text-neutral-400">
          It should be at least 8 characters.
        </h6>
        <h6 className="text-center text-neutral-400">
          You’ll need this to unlock Mini Wallet.
        </h6>
        <div className="flex items-center justify-center mt-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-1/3 space-y-6"
            >
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter Password"
                          {...field}
                          className="bg-neutral-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Confirm Password"
                          {...field}
                          className="bg-neutral-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <div className="flex justify-center items-center pt-10">
                <Checkbox
                  checked={isChecked}
                  className="bg-white checked:bg-blue mr-2"
                  onClick={() => setIsChecked(!isChecked)}
                />
                <span className="text-neutral-400">
                  I agree to the{" "}
                  <span className="text-blue-500">Terms of service</span>
                </span>
              </div>
              <div className="flex justify-center items-center">
                <Button
                  type="submit"
                  disabled={!isChecked}
                  className="w-[250px] bg-white text-black-400 hover:bg-white/90"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">Hello</div>
    </div>
  );
}

export default CreatePassword;
