"use client";

import { Shield, Clock, BadgeDollarSign, Users } from "lucide-react";
import { motion } from "framer-motion";

export function WhyChooseUs() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900"
      id="why-choose-us"
    >
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Why Choose Us
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-500 dark:text-slate-400 md:text-xl">
              SoftSell offers unmatched benefits when selling your software
              licenses
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Shield className="h-8 w-8 text-slate-900 dark:text-white" />
              <h3 className="text-lg font-bold">Secure Transactions</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Industry-leading security protocols protect your data and
                transactions
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Clock className="h-8 w-8 text-slate-900 dark:text-white" />
              <h3 className="text-lg font-bold">Fast Processing</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Get valuations within 24 hours and payment within 3 business
                days
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <BadgeDollarSign className="h-8 w-8 text-slate-900 dark:text-white" />
              <h3 className="text-lg font-bold">Best Market Rates</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Our extensive network ensures you get the highest value for your
                licenses
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Users className="h-8 w-8 text-slate-900 dark:text-white" />
              <h3 className="text-lg font-bold">Expert Support</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Dedicated specialists guide you through every step of the
                process
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
