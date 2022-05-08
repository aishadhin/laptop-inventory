import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-primary mt-3 mb-5'>Question and Answer</h2>
            <div className='mt-5'>
                <h3>Difference between Node.JS and Javascript</h3>
                <p>JavaScript is a scripting language and NodeJS is a JavaScript runtime environment based on google chrome V8 engine. The raw JS can run in the browsers only where NodeJS can run JS outside of the browser.</p>
            </div>
            <div className='mt-5'>
                <h3>When should you use nodejs and when should you use mongodb?</h3>
                <p>NodeJS is the bridge between server side and client side. With mongodb you can add data base of your website and with NodeJS you can connect with mongodb and and run the JavaScript outside of the browser.</p>
            </div>
            <div className='mt-5'>
                <h3>Differences between sql and nosql databases</h3>
                <p>SQL database have fixed o static or predefined schema. NoSQL have dynamic schema. These SQL databases are not suitable for hierarchical data storage. But the No SQL databases are best suited for hierarchical data storage. SQL are best for complex queries. NoSQL database are not good enough for complex queries. The SQL database are vertically scalable and the NoSQL are horizontally scalable.</p>
            </div>
            <div className='mt-5'>
                <h3>What is the purpose of jwt and how does it work</h3>
                <p>JWT is an open standard used to share security information between client and a server.</p>
            </div>
        </div>
    );
};

export default Blog;