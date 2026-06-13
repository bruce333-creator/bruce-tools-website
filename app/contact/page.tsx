"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MessageSquare, CheckCircle, Loader2, AlertCircle } from "lucide-react";

export default function Help() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4987ae21-09bc-444a-8196-618f9b4fa79f",
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "EF Tools Help Page"
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen pt-40 pb-24 px-6 flex items-center justify-center selection:bg-electricBlue/30 selection:text-white">
      
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-electricBlue/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl relative z-10"
      >
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-4 text-white">
            Get in <span className="text-electricBlue">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 font-light">
            Need help with a tool or have a question? Send me a message.
          </p>
        </div>

        <div className="bg-white/5 border border-glassBorder rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-white">Message Sent!</h2>
                <p className="text-gray-400 max-w-md mb-8">
                  Thank you for reaching out. I've received your message and will get back to you at {formData.email} as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl flex items-center gap-3">
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again later.</span>
                  </div>
                )}
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/50 border border-glassBorder rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electricBlue/50 focus:border-electricBlue transition-all"
                      placeholder="you@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MessageSquare size={18} className="text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-black/50 border border-glassBorder rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electricBlue/50 focus:border-electricBlue transition-all"
                      placeholder="e.g. Question about Ultimate Ref Tool"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/50 border border-glassBorder rounded-xl py-4 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electricBlue/50 focus:border-electricBlue transition-all resize-none"
                    placeholder="How can I help you?"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-electricBlue text-white font-medium py-4 rounded-xl hover:bg-electricBlue/80 transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  );
}
