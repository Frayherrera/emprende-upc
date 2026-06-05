"use client";

import * as React from "react";
import { Input, InputProps } from "@/components/ui/input";

export function NumericInput({ onKeyDown, onPaste, ...props }: InputProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const isControlKey =
      event.key === "Backspace" ||
      event.key === "Delete" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "Tab" ||
      event.ctrlKey ||
      event.metaKey;

    if (isControlKey) {
      if (onKeyDown) {
        onKeyDown(event as unknown as React.KeyboardEvent<HTMLInputElement>);
      }
      return;
    }

    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
      return;
    }

    if (onKeyDown) {
      onKeyDown(event as unknown as React.KeyboardEvent<HTMLInputElement>);
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = event.clipboardData.getData("text");
    if (!/^[0-9]*$/.test(pasted)) {
      event.preventDefault();
      return;
    }

    if (onPaste) {
      onPaste(event as unknown as React.ClipboardEvent<HTMLInputElement>);
    }
  };

  return (
    <Input
      type="tel"
      inputMode="numeric"
      pattern="[0-9]*"
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      {...props}
    />
  );
}

NumericInput.displayName = "NumericInput";
