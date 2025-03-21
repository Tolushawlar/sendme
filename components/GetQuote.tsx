// components/GetQuote.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const quoteFormSchema = z.object({
    fromCity: z.string().min(1, "Please select origin city"),
    toCity: z.string().min(1, "Please select destination city"),
    weight: z.string().min(1, "Weight is required"),
    packageType: z.string().min(1, "Please select package type"),
});

const cities = [
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "Kano",
    "Ibadan",
    "Kaduna",
    "Enugu",
    // Add more cities as needed
];

const packageTypes = [
    "Documents",
    "Parcel",
    "Heavy Cargo",
    "Fragile Items",
    "Perishables",
];

// Basic rate calculation (you can modify this based on your business logic)
const calculateRate = (fromCity: string, toCity: string, weight: number, packageType: string) => {
    const baseRate = 1000; // Base rate in your currency
    const distanceMultiplier = 1.5;
    const weightMultiplier = weight * 100;
    const packageTypeRates: { [key: string]: number } = {
        "Documents": 1,
        "Parcel": 1.2,
        "Heavy Cargo": 2,
        "Fragile Items": 1.8,
        "Perishables": 1.5,
    };

    const total = (baseRate + weightMultiplier) * packageTypeRates[packageType] * distanceMultiplier;
    return Math.round(total);
};

export function GetQuoteButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [quoteResult, setQuoteResult] = useState<number | null>(null);
    const [isCalculating, setIsCalculating] = useState(false);

    const form = useForm<z.infer<typeof quoteFormSchema>>({
        resolver: zodResolver(quoteFormSchema),
        defaultValues: {
            fromCity: "",
            toCity: "",
            weight: "",
            packageType: "",
        },
    });

    async function onSubmit(values: z.infer<typeof quoteFormSchema>) {
        setIsCalculating(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const rate = calculateRate(
            values.fromCity,
            values.toCity,
            parseFloat(values.weight),
            values.packageType
        );

        setQuoteResult(rate);
        setIsCalculating(false);
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="border-blue-900 font-semibold">
                    Get Quote
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                     <DialogTitle className="text-2xl font-bold">Get Shipping Quote</DialogTitle>
                    <DialogDescription>
                        Calculate estimated shipping cost for your package
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="fromCity"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>From City</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select origin city" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {cities.map((city) => (
                                                    <SelectItem key={city} value={city}>
                                                        {city}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="toCity"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>To City</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select destination city" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {cities.map((city) => (
                                                    <SelectItem key={city} value={city}>
                                                        {city}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="weight"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Package Weight (kg)</FormLabel>
                                        <FormControl>
                                            <Input type="number" step="0.1" placeholder="Enter weight" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="packageType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Package Type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select package type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {packageTypes.map((type) => (
                                                    <SelectItem key={type} value={type}>
                                                        {type}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="space-y-4">
                            <Button type="submit" className="w-full" disabled={isCalculating}>
                                {isCalculating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {isCalculating ? "Calculating..." : "Calculate Quote"}
                            </Button>

                            {quoteResult !== null && (
                                <div className="p-4 bg-muted rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Estimated Cost</h3>
                                    <p className="text-2xl font-bold text-primary">
                                        ₦{quoteResult.toLocaleString()}
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        *This is an estimate. Final cost may vary based on actual weight and dimensions.
                                    </p>
                                </div>
                            )}
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
