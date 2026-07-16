"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [inboundId, setInboundId] = useState<string>("");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setInboundId(`INQ-${Math.floor(100000 + Math.random() * 900000)}`);
    // Simulate API delay
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className="bg-bg-panel border border-emerald-500/20 rounded-xl p-8 max-w-lg mx-auto space-y-6 text-center animate-in fade-in duration-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-emerald-600 inline-block">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-text-primary">
            Message Sent
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Your inquiry has been successfully submitted. Our team will contact you shortly.
          </p>
        </div>

        {/* inquiry details block */}
        <div className="bg-bg-base border border-border-muted p-4 rounded-xl text-left font-mono text-[11px] text-text-muted space-y-1">
          <div className="text-[10px] text-text-disabled uppercase tracking-widest mb-1.5 border-b border-border-muted pb-1 font-bold">
            Inquiry Details
          </div>
          <div>STATUS: Submitted</div>
          <div>INQUIRY_ID: {inboundId}</div>
          <div>TIMESTAMP: {new Date().toISOString()}</div>
        </div>

        <Button
          onClick={() => {
            setFormData({ name: "", email: "", company: "", subject: "", message: "" });
            setStatus("idle");
          }}
          variant="outline"
          className="w-full font-semibold"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 bg-bg-panel border border-border-muted rounded-xl p-6 sm:p-8 shadow-md relative" noValidate>
      <div className="space-y-4">
        {/* Name input */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-text-secondary">
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            className={cn(errors.name && "border-red-500 focus:border-red-500 focus-ring")}
            placeholder="Jane Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && (
            <div className="flex items-center gap-1.5 text-[11px] text-red-500 mt-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </div>
          )}
        </div>

        {/* Email input */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-text-secondary">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            className={cn(errors.email && "border-red-500 focus:border-red-500 focus-ring")}
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && (
            <div className="flex items-center gap-1.5 text-[11px] text-red-500 mt-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </div>
          )}
        </div>

        {/* Company input */}
        <div className="space-y-1.5">
          <label htmlFor="company" className="text-xs font-semibold text-text-secondary">
            Company <span className="text-text-muted text-[10px] font-normal">(Optional)</span>
          </label>
          <Input
            id="company"
            placeholder="Your Company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>

        {/* Subject Input */}
        <div className="space-y-1.5">
          <label htmlFor="subject" className="text-xs font-semibold text-text-secondary">
            Subject <span className="text-red-500">*</span>
          </label>
          <Input
            id="subject"
            className={cn(errors.subject && "border-red-500 focus:border-red-500 focus-ring")}
            placeholder="How can we help?"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
          {errors.subject && (
            <div className="flex items-center gap-1.5 text-[11px] text-red-500 mt-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.subject}</span>
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs font-semibold text-text-secondary">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            rows={4}
            className={cn(errors.message && "border-red-500 focus:border-red-500 focus-ring")}
            placeholder="Your message..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {errors.message && (
            <div className="flex items-center gap-1.5 text-[11px] text-red-500 mt-1 font-mono">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.message}</span>
            </div>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        variant="turquoise"
        className="w-full font-semibold flex items-center justify-center gap-2 cursor-pointer"
      >
        <Send className="w-4 h-4 shrink-0" />
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
