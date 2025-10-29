"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import supabase from "@/supabase";
import { Database } from "@/types/database.types";

type ExportDeclaration = Database["public"]["Tables"]["export_declarations"]["Row"];

export default function ExportDeclarationsPage() {
  const [declarations, setDeclarations] = useState<ExportDeclaration[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDeclaration, setSelectedDeclaration] = useState<ExportDeclaration | null>(null);

  useEffect(() => {
    fetchDeclarations();
  }, []);

  const fetchDeclarations = async () => {
    try {
      const { data, error } = await supabase
        .from("export_declarations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setDeclarations(data as ExportDeclaration[] || []);
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

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Export Declarations</h1>
        <Badge variant="secondary">{declarations.length} Total</Badge>
      </div>

      <div className="grid gap-6">
        {declarations.map((declaration) => (
          <Card key={declaration.id} className="w-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">
                    {declaration.sender_first_name} {declaration.sender_last_name} → {declaration.receiver_first_name} {declaration.receiver_last_name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    {declaration.location} • {declaration.shipping_option}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(declaration.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={declaration.status === "pending" ? "default" : "secondary"}>
                    {declaration.status}
                  </Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedDeclaration(declaration)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="font-medium">Sender</p>
                  <p>{declaration.sender_email}</p>
                  <p>{declaration.sender_phone}</p>
                </div>
                <div>
                  <p className="font-medium">Receiver</p>
                  <p>{declaration.receiver_email}</p>
                  <p>{declaration.receiver_city}, {declaration.receiver_country}</p>
                </div>
                <div>
                  <p className="font-medium">Insurance</p>
                  <p>{declaration.wants_insurance ? "Yes" : "No"}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateStatus(declaration.id, "approved")}
                  >
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => updateStatus(declaration.id, "rejected")}
                  >
                    Reject
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal for viewing full details */}
      {selectedDeclaration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Export Declaration Details</h2>
                <Button variant="outline" onClick={() => setSelectedDeclaration(null)}>
                  Close
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Sender Information</h3>
                    <p><strong>Name:</strong> {selectedDeclaration.sender_first_name} {selectedDeclaration.sender_middle_name} {selectedDeclaration.sender_last_name}</p>
                    <p><strong>Email:</strong> {selectedDeclaration.sender_email}</p>
                    <p><strong>Phone:</strong> {selectedDeclaration.sender_phone}</p>
                    <p><strong>Address:</strong> {selectedDeclaration.sender_address}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Receiver Information</h3>
                    <p><strong>Name:</strong> {selectedDeclaration.receiver_first_name} {selectedDeclaration.receiver_middle_name} {selectedDeclaration.receiver_last_name}</p>
                    <p><strong>Email:</strong> {selectedDeclaration.receiver_email}</p>
                    <p><strong>Phone:</strong> {selectedDeclaration.receiver_phone}</p>
                    <p><strong>Address:</strong> {selectedDeclaration.receiver_address_line1}</p>
                    {selectedDeclaration.receiver_address_line2 && <p>{selectedDeclaration.receiver_address_line2}</p>}
                    <p>{selectedDeclaration.receiver_city}, {selectedDeclaration.receiver_state} {selectedDeclaration.receiver_postal_code}</p>
                    <p>{selectedDeclaration.receiver_country}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Shipping Details</h3>
                  <p><strong>Location:</strong> {selectedDeclaration.location}</p>
                  <p><strong>Shipping Option:</strong> {selectedDeclaration.shipping_option}</p>
                  <p><strong>Insurance:</strong> {selectedDeclaration.wants_insurance ? "Yes" : "No"}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Products List</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <pre className="whitespace-pre-wrap text-sm">{selectedDeclaration.products_list}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}