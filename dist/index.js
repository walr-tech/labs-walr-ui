"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarImage: () => AvatarImage,
  BackNav: () => BackNav,
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Header: () => Header,
  cn: () => cn
});
module.exports = __toCommonJS(index_exports);

// src/components/Header.tsx
var import_lucide_react = require("lucide-react");

// src/components/ui/avatar.tsx
var React = __toESM(require("react"));

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/avatar.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "img",
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("header", { className: "fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-card/80 backdrop-blur-sm", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "container mx-auto flex h-full items-center justify-between px-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.FlaskConical, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "text-lg font-semibold", children: [
        "Walr ",
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-primary", children: "Labs" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center gap-4", children: [
      userName && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "hidden text-sm text-muted-foreground sm:inline", children: userName }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Avatar, { className: "cursor-pointer", onClick: onSignOut, children: [
        userImage && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AvatarImage, { src: userImage, alt: userName || "User" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AvatarFallback, { className: "bg-muted text-muted-foreground", children: initials })
      ] })
    ] })
  ] }) });
}

// src/components/BackNav.tsx
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime3 = require("react/jsx-runtime");
function BackNav({ href, label = "Back to Walr Labs", className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `border-b border-border bg-card/50 px-6 py-3 ${className}`, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "a",
    {
      href,
      className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.ArrowLeft, { className: "h-4 w-4" }),
        label
      ]
    }
  ) });
}

// src/components/ui/card.tsx
var React2 = __toESM(require("react"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var Card = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var CardHeader = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  "div",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/ui/button.tsx
var React3 = __toESM(require("react"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var Button = React3.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.js.map