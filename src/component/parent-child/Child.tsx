import { forwardRef, useImperativeHandle } from "react";

const Child = (_: any, ref: any) => {

    const test = () => {
        console.log("test");
    }

    useImperativeHandle(
        ref,
        () => ({
            test
        })
    )

    return (
        <div>Child</div>
    )
}

export default forwardRef(Child);