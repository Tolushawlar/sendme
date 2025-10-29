/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { User } from "@clerk/nextjs/server";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import supabase from "@/supabase";
import { deliveryFormSchema } from "@/schemas/deliver";
import { DeliveryApplicationType } from "@/types/database.types";

type DeliveryFormData = z.infer<typeof deliveryFormSchema>;

function CustomCheckboxField({
    control,
    name,
    label,
}: {
    control: any;
    name: string;
    label: string | React.ReactNode;
}) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                        <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {label}
                        </FormLabel>
                        <FormMessage />
                    </div>
                </FormItem>
            )}
        />
    );
}

// Custom FormField component
// function CustomFormField({
//     control,
//     name,
//     label,
//     placeholder,
//     type = "text"
// }: {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     control: any;
//     name: string;
//     label: string;
//     placeholder: string;
//     type?: string;
// }) {
//     return (
//         <FormField
//             control={control}
//             name={name}
//             render={({ field }) => (
//                 <FormItem>
//                     <FormLabel>{label}</FormLabel>
//                     <FormControl>
//                         {type === "date" ? (
//                             <Input
//                                 type="date"
//                                 {...field}
//                                 value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
//                                 className="w-full"
//                             />
//                         ) : (
//                             <Input
//                                 type={type}
//                                 {...field}
//                                 placeholder={placeholder}
//                                 className="w-full"
//                             />
//                         )}
//                     </FormControl>
//                     <FormMessage />
//                 </FormItem>
//             )}
//         />
//     );
// }

function CustomFormField({
    control,
    name,
    label,
    placeholder,
    type = "text"
}: {
    control: any;
    name: string;
    label: string;
    placeholder: string;
    type?: string;
}) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        {type === "date" ? (
                            <Input
                                type="date"
                                {...field}
                                value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                                className="w-full"
                            />
                        ) : type === "number" ? (
                            <Input
                                type="number"
                                {...field}
                                onChange={(e) => {
                                    // Convert string to number for number fields
                                    field.onChange(e.target.value ? Number(e.target.value) : '');
                                }}
                                placeholder={placeholder}
                                className="w-full"
                            />
                        ) : (
                            <Input
                                type={type}
                                {...field}
                                placeholder={placeholder}
                                className="w-full"
                            />
                        )}
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}


export function DeliveryApplicationForm({ userData }: { userData: User }) {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<DeliveryFormData>({
        resolver: zodResolver(deliveryFormSchema),
        defaultValues: {
            senderName: userData?.firstName ? `${userData.firstName} ${userData.lastName}` : "",
            senderPhoneNumber: userData?.phoneNumbers[0]?.phoneNumber || "",
            receiverName: "",
            receiverPhoneNumber: "",
            receiverEmail: "",
            receiverAddress: "",
            receiverCity: "",
            receiverPostalCode: "",
            packageWeight: 0,
            numberOfBoxes: 1,
            declaredValue: 0,
            deliveryDate: new Date(),
            acceptShippingPolicy: true,
        },
    });

    // async function onSubmit(values: DeliveryFormData) {
    //     setIsLoading(true);

    //     try {
    //         const { error } = await supabase
    //             .from("deliveryApplications")
    //             .insert({
    //                 ...values,
    //                 deliveryDate: values.deliveryDate.toISOString(),
    //                 userId: userData.id,
    //                 status: "pending",
    //             });

    //         if (error) throw error;

    //         toast.success("Delivery Application Submitted Successfully");
    //         form.reset();
    //     } catch (error) {
    //         toast.error("Failed to submit delivery application");
    //         console.error("Error submitting application:", error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }

    async function onSubmit(values: DeliveryFormData) {
        setIsLoading(true);

        try {
            const { error } = await supabase
                .from("deliveryapplications")
                .insert({
                    user_id: userData.id,
                    sendername: values.senderName,
                    senderphonenumber: values.senderPhoneNumber,
                    receivername: values.receiverName,
                    receiverphonenumber: values.receiverPhoneNumber,
                    receiveremail: values.receiverEmail,
                    receiveraddress: values.receiverAddress,
                    receivercity: values.receiverCity,
                    receiverpostal_code: values.receiverPostalCode,
                    packageweight: values.packageWeight,
                    numberofboxes: values.numberOfBoxes,
                    declaredvalue: values.declaredValue,
                    deliverydate: new Date().toISOString(),
                    acceptshippingpolicy: values.acceptShippingPolicy,
                    status: "pending"
                } as unknown as DeliveryApplicationType);

            if (error) {
                console.error("Supabase error:", error);
                throw error;
            }

            toast.success("Delivery Application Submitted Successfully");
            form.reset();
        } catch (error) {
            console.error("Error submitting application:", error);
            toast.error("Failed to submit delivery application");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-6">
                    {/* Sender Information Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Sender Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <CustomFormField
                                control={form.control}
                                name="senderName"
                                label="Sender Name"
                                placeholder="Enter sender's full name"
                            />
                            <CustomFormField
                                control={form.control}
                                name="senderPhoneNumber"
                                label="Sender Phone Number"
                                placeholder="Enter sender's phone number"
                            />
                        </div>
                    </div>

                    {/* Receiver Information Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Receiver Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <CustomFormField
                                control={form.control}
                                name="receiverName"
                                label="Receiver Name"
                                placeholder="Enter receiver's full name"
                            />
                            <CustomFormField
                                control={form.control}
                                name="receiverPhoneNumber"
                                label="Receiver Phone Number"
                                placeholder="Enter receiver's phone number"
                            />
                            <CustomFormField
                                control={form.control}
                                name="receiverEmail"
                                label="Receiver Email"
                                placeholder="Enter receiver's email"
                            />
                            <CustomFormField
                                control={form.control}
                                name="receiverAddress"
                                label="Receiver Address"
                                placeholder="Enter delivery address"
                            />
                            <CustomFormField
                                control={form.control}
                                name="receiverCity"
                                label="Receiver City"
                                placeholder="Enter city"
                            />
                            <CustomFormField
                                control={form.control}
                                name="receiverPostalCode"
                                label="Postal/ZIP Code"
                                placeholder="Enter postal code"
                            />
                        </div>
                    </div>

                    {/* Package Information Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Package Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <CustomFormField
                                control={form.control}
                                name="packageWeight"
                                label="Total Weight (kg)"
                                type="number"
                                placeholder="Enter package weight"
                            />
                            <CustomFormField
                                control={form.control}
                                name="numberOfBoxes"
                                label="Number of Boxes"
                                type="number"
                                placeholder="Enter number of boxes"
                            />
                            <CustomFormField
                                control={form.control}
                                name="declaredValue"
                                label="Declared Value"
                                type="number"
                                placeholder="Enter declared value"
                            />
                            {/* <CustomFormField
                                control={form.control}
                                name="deliveryDate"
                                label="Delivery Date"
                                type="date"
                                placeholder=""
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    // Create date with timezone and format for database
                                    const date = new Date(e.target.value);
                                    const isoString = date.toISOString();
                                    field.onChange(isoString);
                                }}
                            />     */}
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Terms and Conditions</h3>
                    <div className="space-y-4">
                        <CustomCheckboxField
                            control={form.control}
                            name="acceptShippingPolicy"

                            label={
                                <div className="text-sm text-gray-600">
                                    I agree to the shipping policy and terms of service. I understand
                                    that my package will be handled according to the standard shipping
                                    procedures and policies of the company.
                                    {/* You can add a link to your policy here */}
                                    <a
                                        href="/termsCondition"
                                        className="text-blue-600 hover:underline ml-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Shipping Terms & Policy
                                    </a>
                                </div>
                            }
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full md:w-auto"
                    >
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isLoading ? "Submitting..." : "Submit Delivery Application"}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
