import { ColumnDef } from "@tanstack/react-table";
import { User } from "@clerk/nextjs/server";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export const userColumns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <Button
        variant="secondary"
        className="bg-transparent"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        First Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("firstName")}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <Button
        variant="secondary"
        className="bg-transparent"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Last Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("lastName")}</div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "emailAddresses",
    header: ({ column }) => (
      <Button
        variant="secondary"
        className="bg-transparent"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const emailAddresses = row.getValue("emailAddresses") as {
        emailAddress: string;
      }[];
      return (
        <div className="lowercase">
          {emailAddresses?.[0]?.emailAddress || "No email"}
        </div>
      );
    },
  },
  {
    accessorKey: "lastActiveAt",
    header: "Last Active",
    cell: ({ row }) => {
      const timestamp = row.getValue("lastActiveAt") as number;
      const lastActiveDate = new Date(timestamp).toLocaleString(); // Adjust format as needed
      return <div>{lastActiveDate}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const timestamp = row.getValue("createdAt") as number;
      const createdAtDate = new Date(timestamp).toLocaleString(); // Adjust format as needed
      return <div>{createdAtDate}</div>;
    },
  },
];
