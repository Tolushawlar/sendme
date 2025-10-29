"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import supabase from "@/supabase";

interface ExportDeclaration {
  id: string;
  created_at: string;
  sender_first_name: string;
  sender_last_name: string;
  receiver_first_name: string;
  receiver_last_name: string;
  receiver_country: string;
  shipping_option: string;
  status: string;
}

export default function ExportDeclarationsTable() {
  const [declarations, setDeclarations] = useState<ExportDeclaration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDeclarations();
  }, []);

  const fetchDeclarations = async () => {
    try {
      const { data, error } = await supabase
        .from("export_declarations")
        .select("id, created_at, sender_first_name, sender_last_name, receiver_first_name, receiver_last_name, receiver_country, shipping_option, status")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setDeclarations(data || []);
    } catch (error) {
      console.error("Error fetching declarations:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from("export_declarations")
        .update({ status: newStatus })
        .eq("id", id);

      if (error) throw error;
      fetchDeclarations();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Sender</TableHead>
          <TableHead>Receiver</TableHead>
          <TableHead>Country</TableHead>
          <TableHead>Shipping</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {declarations.map((declaration) => (
          <TableRow key={declaration.id}>
            <TableCell>{new Date(declaration.created_at).toLocaleDateString()}</TableCell>
            <TableCell>{declaration.sender_first_name} {declaration.sender_last_name}</TableCell>
            <TableCell>{declaration.receiver_first_name} {declaration.receiver_last_name}</TableCell>
            <TableCell>{declaration.receiver_country}</TableCell>
            <TableCell>{declaration.shipping_option}</TableCell>
            <TableCell>
              <Badge variant={declaration.status === "pending" ? "default" : "secondary"}>
                {declaration.status}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button size="sm" onClick={() => updateStatus(declaration.id, "approved")}>
                  Approve
                </Button>
                <Button size="sm" variant="destructive" onClick={() => updateStatus(declaration.id, "rejected")}>
                  Reject
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}