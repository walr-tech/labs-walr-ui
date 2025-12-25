import * as react_jsx_runtime from 'react/jsx-runtime';
import { ThemeProviderProps } from 'next-themes';
import * as React from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ClassValue } from 'clsx';

interface HeaderProps {
    userName?: string;
    userEmail?: string;
    userImage?: string;
    onSignOut?: () => void;
    signOutUrl?: string;
    shellUrl?: string;
    disableAutoFetch?: boolean;
}
declare function Header({ userName, userEmail, userImage, onSignOut, signOutUrl, shellUrl, disableAutoFetch }: HeaderProps): react_jsx_runtime.JSX.Element;

interface BackNavProps {
    href: string;
    label?: string;
    className?: string;
}
/**
 * Back navigation bar for lab apps (local dev navigation).
 * In production with microfrontends, the shell provides the header.
 * In local dev, this provides a simple back link.
 */
declare function BackNav({ href, label, className }: BackNavProps): react_jsx_runtime.JSX.Element;

declare function ThemeProvider({ children, ...props }: ThemeProviderProps): react_jsx_runtime.JSX.Element;

declare function ThemeToggle({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;

declare function Card({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardHeader({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardTitle({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardDescription({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardAction({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardContent({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
declare function CardFooter({ className, ...props }: React.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

declare const Avatar: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<React.ImgHTMLAttributes<HTMLImageElement> & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, asChild, ...props }: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function Input({ className, type, ...props }: React.ComponentProps<'input'>): react_jsx_runtime.JSX.Element;

declare function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>): react_jsx_runtime.JSX.Element;
declare function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>): react_jsx_runtime.JSX.Element;
declare function SelectTrigger({ className, size, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: 'sm' | 'default';
}): react_jsx_runtime.JSX.Element;
declare function SelectContent({ className, children, position, ...props }: React.ComponentProps<typeof SelectPrimitive.Content>): react_jsx_runtime.JSX.Element;
declare function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>): react_jsx_runtime.JSX.Element;
declare function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>): react_jsx_runtime.JSX.Element;
declare function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>): react_jsx_runtime.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>): react_jsx_runtime.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

export { Avatar, AvatarFallback, AvatarImage, BackNav, type BackNavProps, Badge, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Header, type HeaderProps, Input, Label, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, ThemeProvider, ThemeToggle, badgeVariants, buttonVariants, cn };
