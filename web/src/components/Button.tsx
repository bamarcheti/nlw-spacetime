const styles = {
    color: "#F9D",
};

interface ButtonProps {
    title: string;
}

export default function Button(props: ButtonProps) {
    return <p style={styles}>{props.title}</p>;
}
