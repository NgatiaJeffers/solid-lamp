import { useEffect } from 'react';
import Head from 'next/head';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/langauages/javascript';

const Highlight = ({ code }) => {

        useEffect(() => {
            hljs.registerlanguage('javascript', javascript);
            hljs.initHighlighting();
        }, []);

        return (
            <>
                <Head>
                    <link rel='stylesheet' href='/highlight.css' />
                </Head>
                <pre>
                    <code className='js'>{code}</code>
                </pre>
            </>
        );
}

export default Highlight;