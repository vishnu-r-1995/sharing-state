export default function Panel(props) {
    return (
        <section>
            {props.status === props.title ? 
            <h3 style = {{color: "green", border: "1px solid green", textAlign: "center"}}>{props.title}</h3> : 
            <h3>{props.title}</h3>}
            {props.status === props.title
            ? <p>{props.children}</p>
            : <></>}
        </section>
    );
}