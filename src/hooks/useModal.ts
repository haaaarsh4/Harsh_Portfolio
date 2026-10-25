"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import type { ExperienceModal } from "@/data/portfolio";

export function useModal() {
  const [activeModal, setActiveModal] = useState<ExperienceModal | null>(null);
  const [modalSection, setModalSection] = useState("");
  const [modalDetailHref, setModalDetailHref] = useState<string | null>(null);
  const drawerTriggerRef = useRef<HTMLElement | null>(null);
  const drawerCloseRef = useRef<HTMLButtonElement>(null);

  const openModal = useCallback(
    (modal: ExperienceModal, section: string, trigger?: HTMLElement, detailHref?: string) => {
      drawerTriggerRef.current = trigger ?? null;
      setActiveModal(modal);
      setModalSection(section);
      setModalDetailHref(detailHref ?? null);
    },
    []
  );

  const closeModal = useCallback(() => {
    setActiveModal(null);
    setModalSection("");
    setModalDetailHref(null);
    if (drawerTriggerRef.current) {
      drawerTriggerRef.current.focus();
      drawerTriggerRef.current = null;
    }
  }, []);

  // The drawer can now navigate to a story page, so make sure the scroll lock
  // never survives the unmount of the home page.
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Lock scroll when drawer is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => drawerCloseRef.current?.focus(), 100);
      return () => clearTimeout(t);
    } else {
      document.body.style.overflow = "";
    }
  }, [activeModal]);

  // Escape + focus trap
  useEffect(() => {
    if (!activeModal) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { closeModal(); return; }
      if (e.key !== "Tab") return;
      const drawer = document.querySelector(".drawer.drawer-open") as HTMLElement;
      if (!drawer) return;
      const focusable = drawer.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeModal, closeModal]);

  return {
    activeModal,
    modalSection,
    modalDetailHref,
    openModal,
    closeModal,
    drawerCloseRef,
  };
}
