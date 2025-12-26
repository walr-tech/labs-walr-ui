"use client";
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
var src_exports = {};
__export(src_exports, {
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarImage: () => AvatarImage,
  BackNav: () => BackNav,
  Badge: () => Badge,
  Button: () => Button,
  Card: () => Card,
  CardAction: () => CardAction,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Header: () => Header,
  Input: () => Input,
  Label: () => Label,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  ThemeProvider: () => ThemeProvider,
  ThemeToggle: () => ThemeToggle,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  cn: () => cn
});
module.exports = __toCommonJS(src_exports);

// src/components/Header.tsx
var import_react = require("react");
var import_link = __toESM(require("next/link"));
var import_lucide_react2 = require("lucide-react");

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

// src/components/ThemeToggle.tsx
var React2 = __toESM(require("react"));
var import_lucide_react = require("lucide-react");
var import_next_themes = require("next-themes");

// src/components/ui/button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime2 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border border-border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/ThemeToggle.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function ThemeToggle({ className }) {
  const { theme, setTheme } = (0, import_next_themes.useTheme)();
  const [mounted, setMounted] = React2.useState(false);
  React2.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Button,
      {
        variant: "ghost",
        size: "icon",
        className: cn("h-9 w-9", className),
        "aria-label": "Toggle theme",
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.Moon, { className: "h-4 w-4" })
      }
    );
  }
  const isDark = theme === "dark" || !theme && typeof window !== "undefined" && document.documentElement.classList.contains("dark");
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    Button,
    {
      variant: "ghost",
      size: "icon",
      className: cn("h-9 w-9", className),
      onClick: () => setTheme(isDark ? "light" : "dark"),
      "aria-label": "Toggle theme",
      children: isDark ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.Moon, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.Sun, { className: "h-4 w-4" })
    }
  );
}

// src/components/Header.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function getInitials(name, email) {
  if (name) {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  }
  if (email) {
    return email[0].toUpperCase();
  }
  return "U";
}
function Header({
  userName,
  userEmail,
  userImage,
  onSignOut,
  signOutUrl,
  shellUrl,
  disableAutoFetch = false
}) {
  if (typeof window !== "undefined") {
    fetch("http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "Header.tsx:entry", message: "Header component props", data: { userName, userEmail, userImage, shellUrl, signOutUrl, disableAutoFetch, env_shell_url: process.env.NEXT_PUBLIC_SHELL_URL, window_origin: window.location.origin }, timestamp: Date.now(), sessionId: "debug-session", hypothesisId: "A,C,E" }) }).catch(() => {
    });
  }
  const detectedShellUrl = shellUrl ?? (typeof window !== "undefined" ? process.env.NEXT_PUBLIC_SHELL_URL || window.location.origin : process.env.NEXT_PUBLIC_SHELL_URL || "/");
  const detectedSignOutUrl = signOutUrl ?? `${detectedShellUrl}/api/auth/signout`;
  if (typeof window !== "undefined") {
    fetch("http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "Header.tsx:urls_detected", message: "Detected URLs", data: { detectedShellUrl, detectedSignOutUrl }, timestamp: Date.now(), sessionId: "debug-session", hypothesisId: "A" }) }).catch(() => {
    });
  }
  const [fetchedUser, setFetchedUser] = (0, import_react.useState)(null);
  const [isLoadingUser, setIsLoadingUser] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    fetch("http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "Header.tsx:useEffect_entry", message: "useEffect triggered", data: { userName, disableAutoFetch, typeof_window: typeof window }, timestamp: Date.now(), sessionId: "debug-session", hypothesisId: "C,E" }) }).catch(() => {
    });
    if (userName || disableAutoFetch) {
      fetch("http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "Header.tsx:useEffect_skipped", message: "Fetch skipped due to conditions", data: { userName, disableAutoFetch }, timestamp: Date.now(), sessionId: "debug-session", hypothesisId: "C" }) }).catch(() => {
      });
      return;
    }
    if (typeof window === "undefined") {
      return;
    }
    setIsLoadingUser(true);
    const apiUrl = `${detectedShellUrl}/api/user`;
    fetch("http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "Header.tsx:fetch_start", message: "Starting fetch", data: { apiUrl }, timestamp: Date.now(), sessionId: "debug-session", hypothesisId: "A,B,D" }) }).catch(() => {
    });
    fetch(apiUrl, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      fetch("http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "Header.tsx:fetch_response", message: "Fetch response received", data: { ok: res.ok, status: res.status, statusText: res.statusText }, timestamp: Date.now(), sessionId: "debug-session", hypothesisId: "B,D" }) }).catch(() => {
      });
      if (!res.ok) {
        throw new Error("Failed to fetch user info");
      }
      return res.json();
    }).then((data) => {
      fetch("http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "Header.tsx:fetch_success", message: "User data received", data: { userData: data }, timestamp: Date.now(), sessionId: "debug-session", hypothesisId: "B,D" }) }).catch(() => {
      });
      setFetchedUser(data);
    }).catch((error) => {
      fetch("http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "Header.tsx:fetch_error", message: "Fetch error caught", data: { error: error.message, error_string: String(error) }, timestamp: Date.now(), sessionId: "debug-session", hypothesisId: "B" }) }).catch(() => {
      });
      console.warn("Failed to fetch user info:", error);
      setFetchedUser({ name: null, email: null, image: null });
    }).finally(() => {
      setIsLoadingUser(false);
    });
  }, [userName, disableAutoFetch, detectedShellUrl]);
  const displayName = userName ?? fetchedUser?.name ?? void 0;
  const displayEmail = userEmail ?? fetchedUser?.email ?? void 0;
  const displayImage = userImage ?? fetchedUser?.image ?? void 0;
  if (typeof window !== "undefined") {
    fetch("http://127.0.0.1:7244/ingest/b343c56f-45dd-4bae-8d2d-662d6ff072a1", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "Header.tsx:display_values", message: "Final display values", data: { displayName, displayEmail, displayImage, fetchedUser, isLoadingUser }, timestamp: Date.now(), sessionId: "debug-session", hypothesisId: "C,E" }) }).catch(() => {
    });
  }
  const initials = getInitials(displayName, displayEmail);
  const handleAvatarClick = () => {
    if (onSignOut) {
      onSignOut();
    } else if (detectedSignOutUrl) {
      window.location.href = detectedSignOutUrl;
    }
  };
  const isClickable = !!(onSignOut || detectedSignOutUrl);
  const logoContent = /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react2.FlaskConical, { className: "h-5 w-5 text-primary" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "text-lg font-semibold", children: [
      "Walr ",
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-primary", children: "Labs" })
    ] })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("header", { className: "fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-card/80 backdrop-blur-sm", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "container mx-auto flex h-full items-center justify-between px-6", children: [
    detectedShellUrl ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_link.default, { href: detectedShellUrl, className: "hover:opacity-80 transition-opacity", children: logoContent }) : logoContent,
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ThemeToggle, {}),
      displayName && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "hidden text-sm text-muted-foreground sm:inline", children: displayName }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        Avatar,
        {
          className: isClickable ? "cursor-pointer" : void 0,
          onClick: isClickable ? handleAvatarClick : void 0,
          children: [
            displayImage && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AvatarImage, { src: displayImage, alt: displayName || "User" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AvatarFallback, { className: "bg-muted text-muted-foreground", children: initials })
          ]
        }
      )
    ] })
  ] }) });
}

// src/components/BackNav.tsx
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime5 = require("react/jsx-runtime");
function BackNav({ href, label = "Back to Walr Labs", className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: `border-b border-border bg-card/50 px-6 py-3 ${className}`, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "a",
    {
      href,
      className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react3.ArrowLeft, { className: "h-4 w-4" }),
        label
      ]
    }
  ) });
}

// src/components/ThemeProvider.tsx
var import_next_themes2 = require("next-themes");
var import_jsx_runtime6 = require("react/jsx-runtime");
function ThemeProvider({ children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_next_themes2.ThemeProvider, { ...props, children });
}

// src/components/ui/card.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function Card({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground rounded-xl border border-border shadow",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "flex flex-col space-y-1.5 p-6 has-[[data-slot=card-action]]:flex-row has-[[data-slot=card-action]]:items-start has-[[data-slot=card-action]]:justify-between has-[[data-slot=card-action]]:space-y-0",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "card-title",
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "card-action",
      className: cn("flex items-center", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "card-content",
      className: cn("p-6 pt-0", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center p-6 pt-0", className),
      ...props
    }
  );
}

// src/components/ui/badge.tsx
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime8 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center justify-center rounded-md border border-border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot2.Slot : "span";
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

// src/components/ui/input.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/label.tsx
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_jsx_runtime10 = require("react/jsx-runtime");
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/select.tsx
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime11 = require("react/jsx-runtime");
function Select({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SelectPrimitive.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SelectScrollUpButton, {}),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    SelectPrimitive.Label,
    {
      "data-slot": "select-label",
      className: cn("text-muted-foreground px-2 py-1.5 text-xs", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    SelectPrimitive.Separator,
    {
      "data-slot": "select-separator",
      className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.ChevronDownIcon, { className: "size-4" })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  AvatarFallback,
  AvatarImage,
  BackNav,
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Header,
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  ThemeProvider,
  ThemeToggle,
  badgeVariants,
  buttonVariants,
  cn
});
//# sourceMappingURL=index.js.map