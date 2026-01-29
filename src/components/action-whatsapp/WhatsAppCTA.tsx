"use client";
import React from "react";
import { useWhatsApp } from "@/hooks/useWhatsapp";
import Link from "next/link";
interface WhatsAppCTAProps {
  message: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
export default function WhatsAppCTA({
  message,
  children,
  className,
  onClick,
}: WhatsAppCTAProps) {
  const url = useWhatsApp(message);
  return (
    <div className="flex items-center justify-center">
      <Link
        href={url}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} cursor-pointer `}
      >
        {children}
      </Link>
    </div>
  );
}
