import React from 'react';
import {quiz} from "../quiz";
import {Box, Button, Card, CardContent, Divider, Typography} from "@material-ui/core";

export default function Sidebar(props) {
    const names = Object.keys(quiz)
    const sections = names.filter((name, i) => {return props.sections.includes(i)})

    return (
        <Card style={{position: 'absolute', left: 0, top: '50%', transform: 'translate(0%, -50%)', textAlign: 'center'}}>
            <CardContent>
                <Box style={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant='h5'>SECTIONS</Typography>
                    <br/>
                    <Divider/>
                    <br/>
                    {sections.map((section, i) => (
                        <Button onClick={() => props.goToSection(i)}>
                            {section}
                        </Button>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
}