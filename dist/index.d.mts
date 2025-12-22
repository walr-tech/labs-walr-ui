import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ClassValue } from 'clsx';

interface HeaderProps {
    userName?: string;
    userEmail?: string;
    userImage?: string;
    onSignOut?: () => void;
}
declare function Header({ userName, userEmail, userImage, onSignOut }: HeaderProps): react_jsx_runtime.JSX.Element;

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

declare const Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const Avatar: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<React.ImgHTMLAttributes<HTMLImageElement> & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare function cn(...inputs: ClassValue[]): string;

export { Avatar, AvatarFallback, AvatarImage, BackNav, type BackNavProps, Button, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Header, type HeaderProps, cn };
