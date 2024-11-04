export default function Post({ title, body, userName }) {
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        transition: 'transform 0.2s',
    };

    const titleStyle = {
        fontSize: '1.5em',
        margin: '0 0 8px 0',
    };

    const bodyStyle = {
        fontSize: '1em',
        margin: '0 0 8px 0',
    };

    const userNameStyle = {
        fontSize: '0.9em',
        color: '#555',
    };

    return (
        <div style={cardStyle}>
            <h1 style={userNameStyle}>Post by: {userName}</h1>
            <h2 style={titleStyle}>Title: {title}</h2>
            <p style={bodyStyle}>Body: {body}</p>
        </div>
    );
}