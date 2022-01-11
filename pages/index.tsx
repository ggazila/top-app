import {Button, Htag} from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag={'h1'}>My text</Htag>
            <Button appearance={'primary'}>Primary button</Button>
            <Button appearance={'ghost'}>Ghost button</Button>
        </>
    )
}
