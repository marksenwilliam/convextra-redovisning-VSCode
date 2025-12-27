"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/ui/BookingModal";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  // Exclude footer from contact page
  const showFooter = pathname !== "/kontakt";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onOpenModal={openModal} />
      {children}
      {showFooter && <Footer onOpenModal={openModal} />}
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
