declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classnames: IClassNames;
    export = classnames;
}

declare module "*.jpg" 
declare module "*.jpeg"
declare module "*.png" 
declare module "*.svg" {
    import React from "react"
    const SVG: React.VFC<React.SVGProps<SVGAElement>>
    export default SVG
}

declare const __IS_DEV__: boolean
