"use client";

import { signOut } from "next-auth/react";

export function HandleLogout() {
  signOut();
}
