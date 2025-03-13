import useCountStore, {CountState} from "../stores/countStore.tsx";

function CountPage() {

    const {num,inc }:CountState = useCountStore()

    return (
        <div>
            <div>CountPage { num }</div>
            <div>
                <button onClick={inc}>INC</button>
            </div>
        </div>
    );
}

export default CountPage;