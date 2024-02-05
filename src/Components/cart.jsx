const cart = ({todo: data}) => {
    const [title, completed] = data;
    return (
        <div>
            <h1>Title: {title}</h1>
            <p>Status: {completed ? "Completed!" : "Pending..."}</p>
        </div>
    );
};

export default cart;