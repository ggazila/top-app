import {Button, Htag, P, Rating, Tag} from "../components";
import {useState} from "react";

export default function Home(): JSX.Element {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <Htag tag={'h1'}>My text ={">"} {counter}</Htag>
            <Button appearance={"primary"} onClick={() => setCounter(prevState => prevState + 1)}>Change
                counter</Button>
            <Button appearance={'primary'} arrow={"right"}>Primary button</Button>
            <Button appearance={'ghost'}>Ghost button</Button>
            <P size={"l"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, odit?</P>
            <Tag size={"m"} color={'green'}>TEXT</Tag>
            <Rating rating={1}/>
            <Rating rating={5}/>
        </>
    )
}
