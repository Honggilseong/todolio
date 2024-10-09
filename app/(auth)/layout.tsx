"use client";
import { useUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useUser();

  if (!loading && !user) return redirect("/signin");
  return children;
};

export default AuthLayout;
