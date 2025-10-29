"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import supabase from "@/supabase";

const exportDeclarationSchema = z.object({
  location: z.string().min(1, "Location is required"),
  shippingOption: z.string().min(1, "Shipping option is required"),
  senderFirstName: z.string().min(1, "First name is required"),
  senderMiddleName: z.string().optional(),
  senderLastName: z.string().min(1, "Last name is required"),
  senderAddress: z.string().min(1, "Address is required"),
  senderPhone: z.string().min(1, "Phone number is required"),
  senderEmail: z.string().email("Valid email is required"),
  receiverFirstName: z.string().min(1, "First name is required"),
  receiverMiddleName: z.string().optional(),
  receiverLastName: z.string().min(1, "Last name is required"),
  receiverPhone: z.string().min(1, "Phone number is required"),
  receiverEmail: z.string().email("Valid email is required"),
  receiverAddressLine1: z.string().min(1, "Address is required"),
  receiverAddressLine2: z.string().optional(),
  receiverCity: z.string().min(1, "City is required"),
  receiverState: z.string().min(1, "State is required"),
  receiverPostalCode: z.string().min(1, "Postal code is required"),
  receiverCountry: z.string().min(1, "Country is required"),
  productsList: z.string().min(1, "Products list is required"),
  wantsInsurance: z.boolean(),
  confirmedShipper: z.boolean().refine(val => val === true, "You must confirm you are the shipper"),
  confirmedLegal: z.boolean().refine(val => val === true, "You must acknowledge legal consequences"),
  confirmedFalseInfo: z.boolean().refine(val => val === true, "You must acknowledge false information consequences"),
  confirmedValidId: z.boolean().refine(val => val === true, "You must confirm valid ID provided"),
  confirmedDutyCharges: z.boolean().refine(val => val === true, "You must accept duty charges")
});

type FormData = z.infer<typeof exportDeclarationSchema>;

export default function ExportDeclarationPage() {
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(exportDeclarationSchema),
    defaultValues: {
      wantsInsurance: false,
      confirmedShipper: false,
      confirmedLegal: false,
      confirmedFalseInfo: false,
      confirmedValidId: false,
      confirmedDutyCharges: false
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.from("export_declarations").insert({
        location: data.location,
        shipping_option: data.shippingOption,
        sender_first_name: data.senderFirstName,
        sender_middle_name: data.senderMiddleName || null,
        sender_last_name: data.senderLastName,
        sender_address: data.senderAddress,
        sender_phone: data.senderPhone,
        sender_email: data.senderEmail,
        receiver_first_name: data.receiverFirstName,
        receiver_middle_name: data.receiverMiddleName || null,
        receiver_last_name: data.receiverLastName,
        receiver_phone: data.receiverPhone,
        receiver_email: data.receiverEmail,
        receiver_address_line1: data.receiverAddressLine1,
        receiver_address_line2: data.receiverAddressLine2 || null,
        receiver_city: data.receiverCity,
        receiver_state: data.receiverState,
        receiver_postal_code: data.receiverPostalCode,
        receiver_country: data.receiverCountry,
        products_list: data.productsList,
        wants_insurance: data.wantsInsurance,
        confirmed_shipper: data.confirmedShipper,
        confirmed_legal: data.confirmedLegal,
        confirmed_false_info: data.confirmedFalseInfo,
        confirmed_valid_id: data.confirmedValidId,
        confirmed_duty_charges: data.confirmedDutyCharges
      });

      if (error) throw error;
      toast.success("Export Declaration submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit declaration");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Export Declaration Form</h1>
          
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-gray-700 mb-4">
              SendMe Deliveries complies with all government regulations and does not tolerate the concealment
              for export of any illegal/prohibited items. Attempting to export unauthorized goods may
              constitute an offence under the criminal code, and any person committing such an offence is
              liable, and upon conviction may be fined or sentenced to prison. If you are unsure about any item,
              please ask our staff.
            </p>
            <p className="font-semibold">Please read and answer all fields correctly.</p>
          </div>

          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-bold mb-2">DECLARATION OF CONTENT & ACTUAL VALUE</h3>
            <p className="text-sm text-gray-700">
              Please accurately list all items and quantity of each item in your package. Be sure these values are correctly stated as we will not pay for undeclared value for any items listed or unlisted. All items must be insured before ship-out, kindly insure your items. All refunds will be done by the Insurance Company as per the insurance timeline and regulations.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Location and Shipping */}
            <div className="space-y-4">
              <div>
                <Label>Select Location *</Label>
                <Select onValueChange={(value) => setValue("location", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ogba Ikeja">Ogba Ikeja</SelectItem>
                    <SelectItem value="VGC Lekki">VGC Lekki</SelectItem>
                  </SelectContent>
                </Select>
                {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
              </div>

              <div>
                <Label>Select Shipping Option (select 1 only) *</Label>
                <Select onValueChange={(value) => setValue("shippingOption", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select shipping option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="DYB Express (3-5 working days)">DYB Express (3-5 working days)</SelectItem>
                    <SelectItem value="DYB Express Saver (3-7 working days)">DYB Express Saver (3-7 working days)</SelectItem>
                    <SelectItem value="DYB Standard Plus (4-8 working days)">DYB Standard Plus (4-8 working days)</SelectItem>
                    <SelectItem value="DYB Saver (3-10 working days)">DYB Saver (3-10 working days)</SelectItem>
                    <SelectItem value="DYB Basic Plus (3-10 working days)">DYB Basic Plus (3-10 working days)</SelectItem>
                    <SelectItem value="AIR CARGO (9-15 working days)">AIR CARGO (9-15 working days)</SelectItem>
                    <SelectItem value="SEA CARGO (8-12 weeks)">SEA CARGO (8-12 weeks)</SelectItem>
                  </SelectContent>
                </Select>
                {errors.shippingOption && <p className="text-red-500 text-sm">{errors.shippingOption.message}</p>}
              </div>
            </div>

            {/* Sender Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Sender's Details</h3>
              <p className="text-sm text-gray-600">Please fill your details here. All fields marked * must be filled</p>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>First Name *</Label>
                  <Input {...register("senderFirstName")} />
                  {errors.senderFirstName && <p className="text-red-500 text-sm">{errors.senderFirstName.message}</p>}
                </div>
                <div>
                  <Label>Middle Name</Label>
                  <Input {...register("senderMiddleName")} />
                </div>
                <div>
                  <Label>Last Name *</Label>
                  <Input {...register("senderLastName")} />
                  {errors.senderLastName && <p className="text-red-500 text-sm">{errors.senderLastName.message}</p>}
                </div>
              </div>

              <div>
                <Label>Sender's Address *</Label>
                <Input {...register("senderAddress")} />
                {errors.senderAddress && <p className="text-red-500 text-sm">{errors.senderAddress.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Sender's Phone Number *</Label>
                  <Input {...register("senderPhone")} />
                  {errors.senderPhone && <p className="text-red-500 text-sm">{errors.senderPhone.message}</p>}
                </div>
                <div>
                  <Label>Sender's Email *</Label>
                  <Input type="email" {...register("senderEmail")} />
                  {errors.senderEmail && <p className="text-red-500 text-sm">{errors.senderEmail.message}</p>}
                </div>
              </div>
            </div>

            {/* Receiver Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Receiver's Details</h3>
              <p className="text-sm text-gray-600">Please fill the receiver's details here. All fields marked * must be filled</p>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>First Name *</Label>
                  <Input {...register("receiverFirstName")} />
                  {errors.receiverFirstName && <p className="text-red-500 text-sm">{errors.receiverFirstName.message}</p>}
                </div>
                <div>
                  <Label>Middle Name</Label>
                  <Input {...register("receiverMiddleName")} />
                </div>
                <div>
                  <Label>Last Name *</Label>
                  <Input {...register("receiverLastName")} />
                  {errors.receiverLastName && <p className="text-red-500 text-sm">{errors.receiverLastName.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Receiver's Phone Number *</Label>
                  <Input {...register("receiverPhone")} />
                  {errors.receiverPhone && <p className="text-red-500 text-sm">{errors.receiverPhone.message}</p>}
                </div>
                <div>
                  <Label>Receiver's Email *</Label>
                  <Input type="email" {...register("receiverEmail")} />
                  {errors.receiverEmail && <p className="text-red-500 text-sm">{errors.receiverEmail.message}</p>}
                </div>
              </div>

              <div className="space-y-4">
                <Label>Receiver's Address *</Label>
                <Input placeholder="Address Line 1" {...register("receiverAddressLine1")} />
                {errors.receiverAddressLine1 && <p className="text-red-500 text-sm">{errors.receiverAddressLine1.message}</p>}
                <Input placeholder="Address Line 2" {...register("receiverAddressLine2")} />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="City" {...register("receiverCity")} />
                    {errors.receiverCity && <p className="text-red-500 text-sm">{errors.receiverCity.message}</p>}
                  </div>
                  <div>
                    <Input placeholder="State / Province / Region" {...register("receiverState")} />
                    {errors.receiverState && <p className="text-red-500 text-sm">{errors.receiverState.message}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Postal Code" {...register("receiverPostalCode")} />
                    {errors.receiverPostalCode && <p className="text-red-500 text-sm">{errors.receiverPostalCode.message}</p>}
                  </div>
                  <div>
                    <Input placeholder="Country" {...register("receiverCountry")} defaultValue="Afghanistan" />
                    {errors.receiverCountry && <p className="text-red-500 text-sm">{errors.receiverCountry.message}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Products List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Products List *</h3>
              <p className="text-sm text-gray-600">
                List out the products you are exporting. 1 item per line. Please include name of item, quantity and unit price. 
                Example: 1. Name: Kulikuli Qty: 5 packs Unit Price: 20,000 2. Name: Wigs Qty: 20 packs Unit Price: 300,000
              </p>
              <Textarea {...register("productsList")} rows={6} />
              {errors.productsList && <p className="text-red-500 text-sm">{errors.productsList.message}</p>}
            </div>

            {/* Confirmations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Check these boxes *</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    checked={watch("confirmedShipper")}
                    onCheckedChange={(checked) => setValue("confirmedShipper", !!checked)}
                  />
                  <Label className="text-sm">
                    I confirm that I am the Shipper of the above named items and I have not concealed or made an attempt to conceal any other item in my shipment, and what is listed is an accurate list of all the items I am shipping.
                  </Label>
                </div>
                {errors.confirmedShipper && <p className="text-red-500 text-sm">{errors.confirmedShipper.message}</p>}

                <div className="flex items-start space-x-2">
                  <Checkbox 
                    checked={watch("confirmedLegal")}
                    onCheckedChange={(checked) => setValue("confirmedLegal", !!checked)}
                  />
                  <Label className="text-sm">
                    I fully understand that any attempt to export an illegal/prohibited item may result in legal consequences including apprehension, prosecution and (or) payment of fine etc
                  </Label>
                </div>
                {errors.confirmedLegal && <p className="text-red-500 text-sm">{errors.confirmedLegal.message}</p>}

                <div className="flex items-start space-x-2">
                  <Checkbox 
                    checked={watch("confirmedFalseInfo")}
                    onCheckedChange={(checked) => setValue("confirmedFalseInfo", !!checked)}
                  />
                  <Label className="text-sm">
                    I understand that where DYB Logistics discovers that I have provided false information by concealing any item not listed above, the items and the whole shipment will not be shipped. If they have already been shipped, I will be responsible for all charges incurred by DYB Logistics in retrieving, destroying, or reshipping the item as may be required by law.
                  </Label>
                </div>
                {errors.confirmedFalseInfo && <p className="text-red-500 text-sm">{errors.confirmedFalseInfo.message}</p>}

                <div className="flex items-start space-x-2">
                  <Checkbox 
                    checked={watch("confirmedValidId")}
                    onCheckedChange={(checked) => setValue("confirmedValidId", !!checked)}
                  />
                  <Label className="text-sm">
                    I have provided a valid ID and Contact Address where I can be reached at all times.
                  </Label>
                </div>
                {errors.confirmedValidId && <p className="text-red-500 text-sm">{errors.confirmedValidId.message}</p>}

                <div className="flex items-start space-x-2">
                  <Checkbox 
                    checked={watch("confirmedDutyCharges")}
                    onCheckedChange={(checked) => setValue("confirmedDutyCharges", !!checked)}
                  />
                  <Label className="text-sm">
                    I accept that I may be charged Duty by the receiving countries (Customs). This will be communicated to you through DHL/UPS/FedEx
                  </Label>
                </div>
                {errors.confirmedDutyCharges && <p className="text-red-500 text-sm">{errors.confirmedDutyCharges.message}</p>}
              </div>
            </div>

            {/* Insurance */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Insurance Section</h3>
              <Label>Insurance options *</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="wantsInsurance"
                    checked={watch("wantsInsurance") === true}
                    onChange={() => setValue("wantsInsurance", true)}
                  />
                  <Label>I want insurance</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="wantsInsurance"
                    checked={watch("wantsInsurance") === false}
                    onChange={() => setValue("wantsInsurance", false)}
                  />
                  <Label>I do not want insurance</Label>
                </div>
              </div>
            </div>

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>

          {/* Terms and conditions */}
          <div className="mt-8 text-xs text-gray-600 space-y-2">
            <p>Please note:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>That DYB Logistics will handle all packages and documentations and hand over the shipment to DHL, FEDEX, UPS, or ARAMEX on your behalf as shipments departs every business day.</li>
              <li>All shipping fees once paid shall be non-refundable and non-creditable including in the event that the goods are returned, seized or delayed.</li>
              <li>Delivery timeline is 3 to 10 working days or otherwise indicated based on your shipping option.</li>
              <li>The Consignee must note at the point of delivery on the delivery receipt, damage (if any) to the contents of the shipment.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}