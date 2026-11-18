'use client';

import Image from "next/image";
import Link from "next/link";
import {motion, useReducedMotion} from "framer-motion";
import {useState} from "react";
import {CornerTicks} from "@/app/ui/deco";
import {memberAvatarUrl, teamMembers, type TeamMember} from "@/lib/members";

const rowCount = Math.ceil(teamMembers.length / 4);
const membersPerRow = Math.floor(teamMembers.length / rowCount);
const extraMembers = teamMembers.length % rowCount;
let memberOffset = 0;

const rows = Array.from({length: rowCount}, (_, rowIndex) => {
    const count = membersPerRow + (rowIndex < extraMembers ? 1 : 0);
    const members = teamMembers.slice(memberOffset, memberOffset + count);
    memberOffset += count;

    return {
        members,
        y: rowCount === 1 ? 50 : 10 + rowIndex * (80 / (rowCount - 1)),
    };
});

function MemberNode({
                        member,
                        index,
                        x,
                        y,
                        width,
                    }: {
    member: TeamMember;
    index: number;
    x: number;
    y: number;
    width: number;
}) {
    const [imageFailed, setImageFailed] = useState(false);
    const reduceMotion = useReducedMotion();
    const driftX = index % 2 === 0 ? 2.5 : -2.5;
    const driftY = 3 + (index % 3);

    return (
        <div
            className="absolute hover:z-20"
            style={{
                width: `${width}%`,
                left: `${x - width / 2}%`,
                top: `calc(${y}% - 20px)`,
            }}
        >
            <motion.div
                initial={{opacity: 0, scale: 0.72}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5, delay: 0.3 + index * 0.035, ease: [0.22, 1, 0.36, 1]}}
            >
                <motion.div
                    animate={reduceMotion ? undefined : {
                        x: [0, driftX, -driftX, 0],
                        y: [0, -driftY, driftY * 0.45, 0],
                        rotate: [0, index % 2 === 0 ? 1.2 : -1.2, 0],
                    }}
                    transition={{
                        duration: 5.5 + (index % 5),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: (index % 7) * 0.24,
                    }}
                >
                    <Link
                        href="/team"
                        title={member.nick}
                        aria-label={`查看团队成员：${member.nick}`}
                        className="group flex h-10 items-center gap-1.5 border border-edge bg-panel/90 px-1.5 transition-all duration-300 clip-corner-sm hover:-translate-y-0.5 hover:border-signal/70 hover:bg-panel-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                    >
                        <span
                            className="relative block h-7 w-7 shrink-0 overflow-hidden border border-edge-strong bg-panel-2 transition-colors clip-corner-sm group-hover:border-signal"
                        >
                            {imageFailed ? (
                                <span
                                    className="flex h-full w-full items-center justify-center text-xs font-black text-mute">
                                    {member.nick.slice(0, 1)}
                                </span>
                            ) : (
                                <Image
                                    src={memberAvatarUrl(member.qq, 100)}
                                    alt={`${member.nick} 的头像`}
                                    width={96}
                                    height={96}
                                    sizes="28px"
                                    unoptimized
                                    className="h-full w-full object-cover"
                                    onError={() => setImageFailed(true)}
                                />
                            )}
                            <span className="absolute bottom-0 right-0 h-1.5 w-1.5 bg-signal"/>
                        </span>
                        <span className="min-w-0 flex-1 truncate text-[9px] font-bold tracking-wide text-mute transition-colors group-hover:text-fg">
                            {member.nick}
                        </span>
                        <span className="h-3 w-px shrink-0 bg-edge-strong transition-colors group-hover:bg-signal"/>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default function MemberCloud() {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.94}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1]}}
            className="relative mx-auto hidden w-full max-w-[520px] lg:block"
        >
            <div className="relative border border-edge bg-panel p-5 clip-corner">
                <CornerTicks/>
                <div className="flex items-center justify-between border-b border-edge pb-4">
                    <div>
                        <p className="text-sm font-black tracking-[0.16em] text-fg">团队成员</p>
                        <p className="mt-1 text-[10px] font-bold tracking-[0.22em] text-dim">
                            {teamMembers.length} 名成员
                        </p>
                    </div>
                    <span className="h-1.5 w-1.5 animate-pulse bg-signal" aria-hidden="true"/>
                </div>

                <div className="relative mt-4 h-[460px] overflow-hidden border border-edge bg-blueprint xl:h-[490px]">
                    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                        <span className="absolute left-1/2 top-1/2 h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-edge"/>
                        <span className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-edge"/>
                        <span className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-edge"/>
                        <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-edge-strong">
                            <span className="absolute inset-3 border border-edge"/>
                        </span>
                        <span className="absolute left-1/2 top-0 h-full w-px bg-edge/60"/>
                        <span className="absolute left-0 top-1/2 h-px w-full bg-edge/60"/>
                    </div>

                    {rows.flatMap((row) =>
                        row.members.map((member, rowIndex) => {
                            const index = teamMembers.indexOf(member);
                            const count = row.members.length;
                            const x = 50 + (rowIndex - (count - 1) / 2) * (100 / count);
                            const width = count >= 5 ? 18.5 : count === 4 ? 23 : 28;

                            return (
                                <MemberNode
                                    key={member.qq}
                                    member={member}
                                    index={index}
                                    x={x}
                                    y={row.y}
                                    width={width}
                                />
                            );
                        }),
                    )}
                </div>
            </div>
        </motion.div>
    );
}
