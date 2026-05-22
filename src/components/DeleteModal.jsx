"use client";

import { deleteAppointment } from "@/utils/actions";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";

export function DeleteModal({ id, doctor }) {
  // delete server action

  const handleDelete = async () => {
    try {
      await deleteAppointment(id);
      toast.success("Deleted successfully", {
        position: "top-center",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Delete failed", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };
  return (
    <AlertDialog>
      <Button variant="danger" className={"rounded-md"}>
        Delete Booking
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete booking permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete Appointment with{" "}
                <strong>{doctor}</strong> and all of its data. This action
                cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
