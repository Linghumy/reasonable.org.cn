'use client';
import {Disclosure} from '@headlessui/react'
import {ChevronUpIcon} from '@heroicons/react/20/solid'
import {CheckCircleIcon, HomeIcon, MinusCircleIcon} from "@heroicons/react/24/solid";

function DisclosureItem({title, opened = false, children}: {
    title: string,
    opened?: boolean,
    children: React.ReactNode
}) {
    return (
        <Disclosure as="div" className="my-4" defaultOpen={opened}>
            {({open}) => (
                <>
                    <Disclosure.Button
                        className="flex w-full justify-between rounded-lg bg-secondary dark:bg-secondary-dark text-title dark:text-title-dark hover:bg-primary dark:hover:bg-primary-dark px-4 py-2 text-left font-medium">
                        <span>{title}</span>
                        <ChevronUpIcon
                            className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-content dark:text-content-dark">
                        {children}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default function Disclosures() {
    return (
        <div className="w-full px-4 relative">
            <div className="mx-auto w-full max-w-xl rounded-2xl p-2">
                <DisclosureItem title="通过入组审核加入我们…" opened={true}>
                <CheckCircleIcon className="mb-2 w-6 h-6 text-content dark:text-content-dark"/>
                    <p className="text-title dark:text-title-dark font-bold pb-2">欢迎您提交申请</p>
                    <p>请您申请加入 QQ 群聊 830188875 （Reasonable入组审核）</p>
                    <p>我们会处理您的申请并在群内进行审核的流程。</p>
                </DisclosureItem>
                <DisclosureItem title="若您曾是 Reasonable 成员…">
                    <HomeIcon className="mb-2 w-6 h-6 text-content dark:text-content-dark"/>
                    <p className="text-title dark:text-title-dark font-bold pb-2">我们很想您！欢迎回家！</p>
                    <p>若您因为自身原因或不可抗力退出团队，通常不需要额外审核。</p>
                    <p>若您因其他原因退出，或被移出团队，请以新成员身份加入，您曾经在团队的行为将在审核时影响评分。</p>
                </DisclosureItem>
                <DisclosureItem title="若您受邀加入…">
                    <CheckCircleIcon className="mb-2 w-6 h-6 text-content dark:text-content-dark"/>
                    <p className="text-title dark:text-title-dark font-bold pb-2">欢迎您加入 Reasonable.</p>
                    <p>团队人员会安排您入组，并通知您相关事宜。</p>
                </DisclosureItem>
            </div>
        </div>
    )
}
