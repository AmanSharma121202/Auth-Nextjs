"use client";

import { Suspense } from "react";
import ResetPasswordInner from "./ResetPasswordInner";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="text-center mt-8">Loading reset form...</div>}>
      <ResetPasswordInner />
    </Suspense>
  );
}
