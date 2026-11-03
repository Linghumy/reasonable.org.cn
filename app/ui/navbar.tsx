'use client';
import clsx from 'clsx';
import Link from "next/link";
import {usePathname} from "next/navigation";
import Section from "@/app/ui/container";
import * as lib from "@/lib/__init__";
import * as config from "@/config"

export default function Navbar() {
    const pathname = usePathname();
    return (
        <Section className={
            clsx(
                lib.navbar.is_show_navbar(pathname) && 'w-full z-10' || 'hidden'
            )
        }>
            {/* 导航项增加到 6 个，适当加宽容器避免文字拥挤 */}
            <div
                className="text-center md:w-2/3 sm:w-3/4 w-11/12 mx-auto relative flex space-x-1 rounded-xl bg-primary dark:bg-primary-dark p-1">
                {config.paths.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                pathname === link.href && 'bg-light dark:bg-midnight text-title dark:text-title-dark shadow' || 'text-content dark:text-content-dark hover:bg-white/[0.12] hover:text-black dark:hover:text-title-dark'
                            )}>
                            {link.name}
                        </Link>
                    )
                })}
            </div>
        </Section>
    )
}