"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Compatible Maya versions?",
    answer: "RenderMan Node Wrangler is compatible with Maya 2023, 2024, and 2025 across all supported operating systems (Windows, macOS, Linux)."
  },
  {
    question: "Compatible RenderMan versions?",
    answer: "It supports RenderMan v25 and v26. All nodes generated are fully compliant with the latest Pixar specifications."
  },
  {
    question: "How does installation work?",
    answer: "Simply drag and drop the provided installer script into your Maya viewport. The tool will automatically install itself and add a dedicated icon to your current shelf."
  },
  {
    question: "Does it support displacement?",
    answer: "Yes, it fully supports displacement. It automatically detects displacement textures, creates the PxrDisplace node, wires it to the shading group, and sets the optimal bounds."
  },
  {
    question: "Can I customize created shaders?",
    answer: "Absolutely. The tool generates standard RenderMan nodes (PxrSurface, etc.) in the Node Editor. Once generated, you can tweak, modify, and expand the network just like any manually created shader."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 border-t border-glassBorder">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold mb-16 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-glassBorder rounded-2xl bg-glass backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="text-xl font-medium">{faq.question}</span>
                <ChevronDown 
                  className={`transform transition-transform duration-300 ${openIndex === i ? "rotate-180 text-electricBlue" : "text-gray-500"}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
