"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Message = {
  body_html: string;
  body_text: string;
  created_at: string;
  global_id_3p: string;
  id: number;
  id_3p: string;
  integration_id: number;
  meta_data: any | null; // Assuming jsonSchema allows any JSON value
  received_at: string;
  report_id: number | null;
  sent_by: string;
  subject: string;
};

export const columns: ColumnDef<Message>[] = [
  {
    accessorKey: "select",
    header: "Select",
    cell: ({ row }) => {
      return <input type="checkbox" />;
    },
    meta: {
      headerClassName: "w-[500px]", // fixed width
    },
  },
  {
    accessorKey: "sender",
    header: "Sender",
    cell: ({ row }) => {
      return row.original.body_text;
    },
    meta: {
      headerClassName: "min-w-[200px] w-full", // min-width, taking
    },
  },
  {
    accessorKey: "summary",
    header: "Summary",
    cell: ({ row }) => {
      return row.original.subject;
    },
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => {
      return "tags";
    },
  },
  {
    accessorKey: "vote",
    header: "Amount",
    cell: ({ row }) => {
      return "vote";
    },
  },
];
