function Heading(props: { title: string, color: string }) {
    const { title, color } = props;

    return (
        <h1 className={`text-[50px] font-black text-[${color}]`}>{title}</h1>
    );
}

export default Heading;