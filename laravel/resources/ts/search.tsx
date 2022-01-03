import React, { useState } from 'react';
import axios from 'axios';

type stateData = {
    count: number
    text: string
    date: string
    isShow: boolean
    arrays: number[]
    isLoad: boolean
}

const Search: React.FC = () => {

    const [text, setText] = useState<string>("")          // string型
    const [count, setCount] = useState<number>(0)         // number型
    const [date, setDate] = useState<string>("")          // 日付（string）型

    const [text2, setText2] = useState<string>("")          // string型
    const [isLoad, setIsLoad] = useState<boolean>(false)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        console.log("text : " + text);
        console.log("count : " + count);
        console.log("date : " + date);
    }

    function ApiFetch(): any {
        setIsLoad(true);
        const url = '/api/sample?name=' + text2;
        console.log(url);
        axios
            .get(url)
            .then(res => {
                console.log(res.data);
                setIsLoad(false)
            })
    }

    if (isLoad) {
        return (
            <div>isLoading</div>
        )
    } else {
        return (
            <div>
                <div>
                    <form className="commentForm" onSubmit={handleSubmit}>
                        <input type="text" placeholder="テキスト" value={text} onChange={e => setText(e.target.value)} />
                        <input type="number" placeholder="数値" value={count} onChange={e => setCount(Number(e.target.value))} />
                        <input type="date" placeholder="日付" value={date} onChange={e => setDate(e.target.value)} />
                        <input type="submit" value="送信" />
                    </form>
                </div>
                <div>
                    <input type="text" placeholder="name" value={text2} onChange={e => setText2(e.target.value)} />
                    <button onClick={ApiFetch}>APIボタン1</button>
                </div>
            </div>
        )
    }
}

export default Search;