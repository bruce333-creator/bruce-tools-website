"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Mail, MessageSquare, CheckCircle, Loader2, AlertCircle, ArrowLeft } from "lucide-react";

export default function ContactPage() {
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
          from_name: "EF Tools Contact"
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
    <main className="min-h-screen bg-[#151515] text-[#EDEDEC] pt-24 pb-16 px-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-white transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>
        </div>

        <section className="space-y-2">
          <h1 className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-white">
            Contact
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Have a question, feedback, or a bug to report regarding one of the Maya plugins? Send a message directly.
          </p>
        </section>

        <div className="rounded-xl border border-white/[0.06] bg-[#1B1B1B] p-5 sm:p-6">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-8 text-center space-y-3">
              <div className="w-10 h-10 bg-[#151515] border border-white/[0.08] text-white rounded-full flex items-center justify-center">
                <CheckCircle size={20} />
              </div>
              <h2 className="font-heading text-lg font-medium text-white">Message Sent</h2>
              <p className="text-xs text-text-secondary max-w-sm">
                Thank you. Your message has been transmitted and I will review it shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-3 px-4 py-2 rounded-md border border-white/[0.12] bg-transparent hover:bg-white/[0.04] text-xs text-text-secondary hover:text-white transition-all"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              {status === "error" && (
                <div className="bg-red-950/30 border border-red-800/40 text-red-200 px-3.5 py-2.5 rounded-lg flex items-center gap-2 text-xs">
                  <AlertCircle size={15} className="text-red-400 shrink-0" />
                  <span>Unable to send message right now. Please try again later.</span>
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-xs text-text-secondary mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
                    <Mail size={14} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#151515] border border-white/[0.08] rounded-md py-2 pl-9 pr-3 text-xs sm:text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="you@studio.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs text-text-secondary mb-1">
                  Subject / Plugin
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
                    <MessageSquare size={14} />
                  </div>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#151515] border border-white/[0.08] rounded-md py-2 pl-9 pr-3 text-xs sm:text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="e.g. RenderMan Node Wrangler issue on Maya 2024"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-text-secondary mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#151515] border border-white/[0.08] rounded-md p-2.5 text-xs sm:text-sm text-foreground placeholder:text-text-muted focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Describe your question or reproduction steps..."
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-md bg-[#EDEDEC] text-[#151515] hover:bg-white active:scale-[0.99] text-xs font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
