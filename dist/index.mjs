// src/components/Header.tsx
import { FlaskConical } from "lucide-react";

// src/components/ui/avatar.tsx
import * as React from "react";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/avatar.tsx
import { jsx } from "react/jsx-runtime";
var Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = "Avatar";
var AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "img",
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = "AvatarFallback";

// src/components/Header.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function getInitials(name, email) {
  if (name) {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  }
  if (email) {
    return email[0].toUpperCase();
  }
  return "U";
}
function Header({ userName, userEmail, userImage, onSignOut }) {
  const initials = getInitials(userName, userEmail);
  return /* @__PURE__ */ jsx2("header", { className: "fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-card/80 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex h-full items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx2(FlaskConical, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxs("span", { className: "text-lg font-semibold", children: [
        "Walr ",
        /* @__PURE__ */ jsx2("span", { className: "text-primary", children: "Labs" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      userName && /* @__PURE__ */ jsx2("span", { className: "hidden text-sm text-muted-foreground sm:inline", children: userName }),
      /* @__PURE__ */ jsxs(Avatar, { className: "cursor-pointer", onClick: onSignOut, children: [
        userImage && /* @__PURE__ */ jsx2(AvatarImage, { src: userImage, alt: userName || "User" }),
        /* @__PURE__ */ jsx2(AvatarFallback, { className: "bg-muted text-muted-foreground", children: initials })
      ] })
    ] })
  ] }) });
}

// src/components/BackNav.tsx
import { ArrowLeft } from "lucide-react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function BackNav({ href, label = "Back to Walr Labs", className = "" }) {
  return /* @__PURE__ */ jsx3("div", { className: `border-b border-border bg-card/50 px-6 py-3 ${className}`, children: /* @__PURE__ */ jsxs2(
    "a",
    {
      href,
      className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
      children: [
        /* @__PURE__ */ jsx3(ArrowLeft, { className: "h-4 w-4" }),
        label
      ]
    }
  ) });
}

// src/components/ui/card.tsx
import * as React2 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Card = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  "div",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/ui/button.tsx
import * as React3 from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Button = React3.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return /* @__PURE__ */ jsx5(
      "button",
      {
        className: cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            "bg-primary text-primary-foreground shadow hover:bg-primary/90": variant === "default",
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground": variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "h-9 px-4 py-2": size === "default",
            "h-8 rounded-md px-3 text-xs": size === "sm",
            "h-10 rounded-md px-8": size === "lg",
            "h-9 w-9": size === "icon"
          },
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
export {
  Avatar,
  AvatarFallback,
  AvatarImage,
  BackNav,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Header,
  cn
};
//# sourceMappingURL=index.mjs.map