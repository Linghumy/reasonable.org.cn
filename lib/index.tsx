import { paths } from "@/config"

export function is_show_navbar(path: string){
    return paths.find((i) => i.href === path);
}

// 原代码中这里存在一个未完成的导出（export function is_show_），
// 会导致 TypeScript 语法错误，已暂时注释保留：
// export function is_show_