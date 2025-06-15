import { AnimatePresence, motion } from "framer-motion";
import { type PropsWithChildren } from "react";
import { useBodyScrollLock } from "~apps/hooks/useBodyScrollLock";

interface Props {
  onClose: () => void;
}
export const Modal = ({ children, onClose }: PropsWithChildren<Props>) => {
  useBodyScrollLock();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl w-[900px] max-h-[90vh] shadow-2xl relative flex flex-col overflow-y-hidden"
        >
          <div className="py-10 px-5 overflow-y-scroll grow">{children}</div>

          <div className="px-10 py-5 flex gap-3 justify-end sticky bg-white bottom-0 shrink-0 z-10">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 text-sm"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
