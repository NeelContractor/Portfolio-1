"use client"
import { motion } from "framer-motion"

export default function Page() {
    return (
        <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
            duration: 0.4,
            ease: "easeInOut",
            }}
        >
            <div className="flex flex-row min-h-screen justify-center items-center text-6xl font-bold ">
                Coming Soon...
            </div>
        </motion.div>
    )
}