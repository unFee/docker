import React, { useState } from 'react';

type stateData = {
    count: number
    text: string
    date: string
    isShow: boolean
    arrays: number[]
}

const Search: React.FC = () => {

    const [text, setText] = useState<string>("")          // string型
    const [count, setCount] = useState<number>(0)         // number型
    const [date, setDate] = useState<string>("")          // 日付（string）型

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        console.log("text : " + text);
        console.log("count : " + count);
        console.log("date : " + date);
    }
    

    return (
        <div>
            <form className="commentForm" onSubmit={handleSubmit}>
				<input type="text" placeholder="テキスト" value={text} onChange={e => setText(e.target.value)} />
				<input type="number" placeholder="数値" value={count} onChange={e => setCount(Number(e.target.value))} />
                <input type="date" placeholder="日付" value={date} onChange={e => setDate(e.target.value)} />
				<input type="submit" value="送信" />
			</form>
        </div>
    )
}

export default Search;