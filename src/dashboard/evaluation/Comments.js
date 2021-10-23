import PerfectScrollbar from 'react-perfect-scrollbar';
import {Box, Button, Card, CardHeader, Divider, TextField} from '@material-ui/core';
import {useState} from "react";
import {API} from "aws-amplify";
import {createComment, deleteComment} from "../../graphql/mutations";

const Comments = (props) => {
    const [value, setValue] = useState(null)

    const saveComment = () => {
        const formData = {
            evaluationID: props.id,
            content: value
        };

        API.graphql({
            query: createComment,
            variables: {input: formData}
        }).then((comment) => {
            setValue(null)
        }).catch((error) => {
            console.log(error)
        })
    }

    const deleteCom = (id) => {
        const formData = {
            id: id,
            evaluationID: props.id,
        };

        API.graphql({
            query: deleteComment,
            variables: {input: formData}
        }).then((comment) => {
            setValue(null)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <Card {...props}>
            <CardHeader title="Comments"/>
            <Divider/>
            <PerfectScrollbar>
                <Box sx={{minWidth: 200, maxHeight: 615, overflow: 'auto'}}>
                    <div>
                        <Button
                            color="primary"
                            variant="contained"
                            size="small"
                            onClick={saveComment}
                            sx={{position: "absolute", bottom: 24, right: 24, zIndex: 10}}
                        >
                            Add
                        </Button>
                        <TextField
                            id="outlined-multiline-static"
                            label="New comment"
                            multiline
                            rows={3}
                            sx={{m:2, width: "90%"}}
                            variant="filled"
                            value={value}
                            onChange={(e) => {setValue(e.target.value)}}
                        />
                    </div>
                    {props.comments.reverse().map((comment) => (
                        <div>
                            <Button
                                color="gray"
                                variant="text"
                                size="small"
                                onClick={deleteCom}
                                sx={{position: "absolute", bottom: 24, right: 24, zIndex: 10}}
                            >
                                Delete
                            </Button>
                            <TextField
                                id="outlined-multiline-static"
                                label="New comment"
                                multiline
                                rows={3}
                                sx={{m:2, width: "90%"}}
                                variant="filled"
                                disabled={true}
                            />
                        </div>
                    ))}
                </Box>
            </PerfectScrollbar>
        </Card>
    );
}

export default Comments;
