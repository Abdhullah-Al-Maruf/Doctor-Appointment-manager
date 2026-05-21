"use client";

import { Stethoscope } from "@gravity-ui/icons";
import {
  Calendar,
  Clock,
  Mail,
  Phone,
  User,
  Users,
} from "lucide-react";

import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";

export function AppointmentModal() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Appointment saved successfully");
      }
    } catch (error) {
      console.error("Error saving appointment:", error);
    }
  };

  const inputGlassStyle = `
    bg-white/20
    dark:bg-zinc-800/30
    backdrop-blur-xl
    border
    border-white/20
    dark:border-zinc-700/30
    shadow-md
    hover:bg-white/30
    focus-within:bg-white/30
    focus:outline-none
    transition-all
    rounded-xl
    text-default-900
    dark:text-white
    placeholder:text-default-500
  `;

  return (
    <Modal>
      {/* Trigger Button */}
      <Button
        variant="secondary"
        className="bg-white text-teal-800 hover:bg-teal-700 hover:text-white shadow-lg rounded-xl"
      >
        Book Appointment
      </Button>

      {/* Backdrop */}
      <Modal.Backdrop
        variant="blur"
        className="bg-black/30 backdrop-blur-md dark:bg-black/40"
      >
        <Modal.Container placement="center">
          {/* Modal */}
          <Modal.Dialog
            className="
              sm:max-w-2xl
              rounded-3xl
              bg-white/50
              dark:bg-zinc-900/30
              backdrop-blur-2xl
              border
              border-white/20
              dark:border-zinc-700/20
              shadow-2xl
              overflow-hidden
            "
          >
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="pb-3">
              <Modal.Icon
                className="
                  bg-teal-500/20
                  text-teal-600
                  backdrop-blur-md
                  border
                  border-white/20
                "
              >
                <Stethoscope className="size-5" />
              </Modal.Icon>

              <div>
                <Modal.Heading className="text-xl font-bold">
                  Book an Appointment
                </Modal.Heading>

                <p className="mt-1 text-sm text-default-600 dark:text-default-400">
                  Schedule your visit with Dr. Ayesha Rahman.
                </p>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6">
              <Surface
                className="
                  rounded-2xl
                  bg-white/20
                  dark:bg-zinc-900/20
                  backdrop-blur-2xl
                  border
                  border-white/20
                  dark:border-zinc-700/20
                  shadow-xl
                  p-5
                "
              >
                <form
                  id="appointment-form"
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  {/* Doctor */}
                  <TextField
                    className="w-full md:col-span-2"
                    name="doctorName"
                    variant="secondary"
                    defaultValue="Dr. Ayesha Rahman"
                    isReadOnly
                  >
                    <Label>
                      <Stethoscope className="size-4 inline mr-2" />
                      Doctor
                    </Label>

                    <Input
                      placeholder="Doctor name"
                      className={inputGlassStyle}
                    />
                  </TextField>

                  {/* Patient Name */}
                  <TextField
                    className="w-full"
                    name="patientName"
                    type="text"
                    variant="secondary"
                    isRequired
                  >
                    <Label>
                      <User className="size-4 inline mr-2" />
                      Patient Name
                    </Label>

                    <Input
                      placeholder="Enter patient name"
                      className={inputGlassStyle}
                    />
                  </TextField>

                  {/* Gender */}
                  <div className="flex flex-col gap-2">
                    <Label className="text-sm font-medium">
                      <Users className="size-4 inline mr-2" />
                      Gender
                    </Label>

                    <select
                      name="gender"
                      required
                      className="
                        w-full
                        h-11
                        px-3
                        rounded-xl
                        bg-white/0
                        dark:bg-zinc-800/30
                        backdrop-blur-xl
                        border
                        border-white/20
                        dark:border-zinc-700/30
                        shadow-md
                        hover:bg-white/30
                        focus:bg-white/10
                        focus:outline-none
                        transition-all
                        text-sm
                      "
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Phone */}
                  <TextField
                    className="w-full"
                    name="phone"
                    type="tel"
                    variant="secondary"
                    isRequired
                  >
                    <Label>
                      <Phone className="size-4 inline mr-2" />
                      Phone Number
                    </Label>

                    <Input
                      placeholder="Enter phone number"
                      className={inputGlassStyle}
                    />
                  </TextField>

                  {/* Email */}
                  <TextField
                    className="w-full md:col-span-2"
                    name="userEmail"
                    type="email"
                    variant="secondary"
                    isRequired
                  >
                    <Label>
                      <Mail className="size-4 inline mr-2" />
                      Email
                    </Label>

                    <Input
                      placeholder="Enter email address"
                      className={inputGlassStyle}
                    />
                  </TextField>

                  {/* Date */}
                  <TextField
                    className="w-full"
                    name="appointmentDate"
                    type="date"
                    variant="secondary"
                    isRequired
                  >
                    <Label>
                      <Calendar className="size-4 inline mr-2" />
                      Appointment Date
                    </Label>

                    <Input className={inputGlassStyle} />
                  </TextField>

                  {/* Time */}
                  <TextField
                    className="w-full"
                    name="appointmentTime"
                    type="time"
                    variant="secondary"
                    isRequired
                  >
                    <Label>
                      <Clock className="size-4 inline mr-2" />
                      Appointment Time
                    </Label>

                    <Input className={inputGlassStyle} />
                  </TextField>

                  {/* Footer */}
                  <Modal.Footer className="md:col-span-2 pt-3">
                    <Button
                      slot="close"
                  
                      className="
                       border bg-transparent border-green-800 text-teal-800
                      "
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      form="appointment-form"
                      className="
                        rounded-xl
                        bg-teal-600
                        hover:bg-teal-700
                        text-white
                        font-semibold
                        shadow-lg
                        shadow-teal-500/30
                      "
                    >
                      Confirm Appointment
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}