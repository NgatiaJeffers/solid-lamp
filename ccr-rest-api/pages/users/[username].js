import { useEffect, useState } from "react";
import Link from "next/link";

export async function getServerSideProps({ query }) {
    const { username } = query;

    return {
        props: {
            username
        }
    }
}

function UserPage({ username }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const req = await fetch(`/api/singleUser?username=${username}`);
            const data = await req.json();

            setLoading(false);
            setData(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <div>
                <Link href={"/"} passHref>
                    Back home
                </Link>
            </div>
            <hr />
            {loading && <div>Loading user data...</div>}
            {data && <UserData user={data} />}
        </div>
    )
}

export default UserPage;

function UserData({ user }) {
    return (
        <div style={{ display: 'flex' }}>
            <div>
                <div>
                    <b>Username:</b> {user.username}
                </div>
                <div>
                    <b>Full name:</b>
                    {user.name}
                </div>
                <div>
                    <b>Email:</b> {user.email}
                </div>
                <div>
                    <b>Company:</b> {user.company}
                </div>
                <div>
                    <b>Job title:</b> {user.job_title}
                </div>
            </div>
        </div>
    )
}