import {Button, Htag, P, Rating, Tag} from "../components";
import {useState} from "react";
import {Layout} from "../layout/Layout";

export default function Home(): JSX.Element {
    const [rating, setRating] = useState(2);
    return (
        <Layout>
            <Htag tag={'h1'}>My text ={">"} {rating}</Htag>
            <Button appearance={"primary"} onClick={() => setRating(prevState => prevState + 1)}>Change
                counter</Button>
            <Button appearance={'primary'} arrow={"right"}>Primary button</Button>
            <Button appearance={'ghost'}>Ghost button</Button>
            <P size={"l"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, odit?</P>
            <Tag size={"m"} color={'green'}>TEXT</Tag>
            <Rating rating={rating} isEditable/>
        </Layout>
    )
}
