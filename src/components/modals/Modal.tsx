import { AnimatePresence, motion } from "framer-motion";
import { type PropsWithChildren } from "react";
import { useBodyScrollLock } from "~apps/hooks/useBodyScrollLock";
import { useIsMobile } from "~apps/hooks/useIsMobile";

interface Props {
  onClose: () => void;
}
export const Modal = ({ children, onClose }: PropsWithChildren<Props>) => {
  const { isMobile } = useIsMobile();

  useBodyScrollLock(!isMobile);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 cursor-auto"
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

          <div className="px-10 py-5 flex gap-3 justify-end sticky bottom-0 shrink-0 z-10">
            <button
              onClick={onClose}
              className="px-4 py-2 hover:bg-gray-200 text-[16px] text-deep-blue"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
