import {Button, Htag, P, Tag} from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag={'h1'}>My text</Htag>
            <Button appearance={'primary'} arrow={"right"}>Primary button</Button>
            <Button appearance={'ghost'}>Ghost button</Button>
            <P size={"l"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, odit?</P>
            <Tag size={"m"} color={'green'}>TEXT</Tag>
        </>
    )
}
