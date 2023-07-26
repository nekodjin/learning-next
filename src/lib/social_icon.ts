import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export type SocialIconProps = VariantProps<typeof socialIcon>;

export const socialIcon = cva(
    twMerge(
        "transition-colors",

        "text-slate-700",
        "dark:text-slate-300",

        "hover:text-black",
        "focus-active:text-black",

        "dark:hover:text-white",
        "dark:focus-active:text-white",
    ),
    {
        variants: {
            size: {
                normal: twMerge("w-[32px]", "h-[32px]"),
                large: twMerge("w-[42px]", "h-[42px]"),
            },
        },
        defaultVariants: {
            size: "normal",
        },
    },
);
