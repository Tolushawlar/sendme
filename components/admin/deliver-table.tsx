"use client";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnDef,
  flexRender,
  Row,
  SortingState,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetDeliveryApps } from "@/hooks/use-get-delivery";
import { DeliveryApplicationType } from "@/types/database.types";
import { DeliveryApplicationModal } from "./delivery-application.modal";
import { ROUTE } from "@/constants";

const columns: ColumnDef<DeliveryApplicationType>[] = [
  {
    accessorKey: "sendername",
    header: "Sender Name",
  },
  {
    accessorKey: "senderphonenumber", 
    header: "Sender Phone",
  },
  {
    accessorKey: "receivername",
    header: "Receiver Name",
  },
  {
    accessorKey: "receiverphonenumber",
    header: "Receiver Phone",
  },
  {
    accessorKey: "receivercity",
    header: "Delivery City",
  },
  {
    accessorKey: "packageweight",
    header: "Weight (kg)",
  },
  {
    accessorKey: "numberofboxes",
    header: "No. of Boxes",
  },
  {
    accessorKey: "declaredvalue",
    header: "Declared Value",
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("declared_value"));
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     }).format(amount);
  //     return <div className="font-medium">{formatted}</div>;
  //   },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "deliverydate",
    header: "Delivery Date",
    cell: ({ row }) => {
      return new Date(row.getValue("deliverydate")).toLocaleDateString();
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <DeliveryDetails row={row} />;
    },
  },
];

function DeliveryDetails({ row }: { row: Row<DeliveryApplicationType> }) {
  const [isOpen, setIsOpen] = useState(false);
  const { push } = useRouter();

  return (
    <>
     <Button
        variant="outline"
        onClick={() =>
          push(`${ROUTE.ADMIN_DASHBOARD}/applications/${row.original.id}`)
        }
      >
      View Details
    </Button>
     <DeliveryApplicationModal
     isOpen={isOpen}
     setIsOpen={setIsOpen}
     application={row.original}
   />
   </>
  );
}

export default function DeliveriesApplicationTable() {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { data: deliveries, isLoading, error } = useGetDeliveryApps(page, pageSize);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data: deliveries ?? [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      globalFilter,
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Search all columns..."
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border overflow-x-auto w-full max-w-[100vw]">
        <Table className="w-full table-auto max-w-[100vw]">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage((old) => old + 1)}
          disabled={table.getRowModel().rows.length < pageSize}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
