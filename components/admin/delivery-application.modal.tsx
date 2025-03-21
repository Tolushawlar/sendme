import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog";
  import { DeliveryApplicationType } from "@/types/database.types";
  import { ScrollArea } from "@/components/ui/scroll-area";
  
  interface DeliveryApplicationModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    application: DeliveryApplicationType;
  }
  
  export function DeliveryApplicationModal({
    isOpen,
    setIsOpen,
    application,
  }: DeliveryApplicationModalProps) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Delivery Application Details</DialogTitle>
            <DialogDescription>
              Full information for the delivery application of {application.sender_name}            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[400px] w-full rounded-md border p-4">
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(application).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">{key}</h4>
                  <p className="text-sm text-muted-foreground">
                    {typeof value === "object"
                      ? JSON.stringify(value)
                      : String(value)}
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    );
  }
  