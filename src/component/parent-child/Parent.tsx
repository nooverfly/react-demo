import { useRef } from "react";
import Child from "./Child"

const Parent = () => {
    const children = useRef(null);
    const clickHandler = () => {
        // @ts-ignore
        children.current?.test();
    }
    return (
        <div>
            <Child ref={children} />
            <div onClick={clickHandler}>按钮</div>
        </div>
    )
}

export default Parent;