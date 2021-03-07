import React, {useEffect} from 'react'

export default function Index() {

    const [_res, setRes] = useState();
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2').then(res => res.json()).then(res => setRes(res))
    }, [])

    return (
        <div>
            <h1>
                You're running React on the Edge!
            </h1>

            {
                _res ?? _res.data.map(item => <div>{item.email}</div>)
            }

        </div>
    );
}
