"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

export default function DashboardClientWrapper({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
