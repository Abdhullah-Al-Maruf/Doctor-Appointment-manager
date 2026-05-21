"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = ({ type = "success", message }) => {
    setToast({ type, message });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              top-5
              right-5
              z-[9999]
            "
          >
            <div
              className={`
                min-w-[320px]
                max-w-sm
                rounded-2xl
                border
                backdrop-blur-2xl
                shadow-2xl
                px-5
                py-4
                flex
                items-center
                gap-4
                text-white
                ${
                  toast.type === "success"
                    ? "bg-emerald-500/20 border-emerald-400/30"
                    : "bg-red-500/20 border-red-400/30"
                }
              `}
            >
              <div
                className={`
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-full
                  border
                  backdrop-blur-xl
                  ${
                    toast.type === "success"
                      ? "bg-emerald-500/20 border-emerald-300/30 text-emerald-300"
                      : "bg-red-500/20 border-red-300/30 text-red-300"
                  }
                `}
              >
                {toast.type === "success" ? (
                  <CheckCircle2 className="size-6" />
                ) : (
                  <XCircle className="size-6" />
                )}
              </div>

              <div>
                <h3 className="font-semibold text-base">
                  {toast.type === "success" ? "Success" : "Error"}
                </h3>

                <p className="text-sm text-white/80">{toast.message}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);