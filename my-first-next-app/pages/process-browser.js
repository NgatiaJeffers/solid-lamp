const IndexPage = () => {
    const side = process.browser ? 'client' : 'server';

    return <div>You're currently on the {side}-side</div>
}

export default IndexPage