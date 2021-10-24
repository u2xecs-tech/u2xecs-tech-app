import PerfectScrollbar from 'react-perfect-scrollbar';
import {Box, Button, Card, CardHeader, Divider, TextField} from '@material-ui/core';
import {useState} from "react";
import {API} from "aws-amplify";
import {createComment, deleteComment} from "../../graphql/mutations";
import moment from "moment";

const Comments = (props) => {
    const [value, setValue] = useState(null)

    console.log(props.comments)

    const saveComment = () => {
        if (value === "" || value === null) {
            return
        }

        const formData = {
            evaluationID: props.id,
            content: value
        }

        API.graphql({
            query: createComment,
            variables: {input: formData}
        }).then((comment) => {
            setValue("")
            props.fetch()
        }).catch((error) => {
            console.log(error)

            // setValue("")
            // props.fetch()
        })
    }

    const deleteCom = (id) => {
        const formData = {
            id: id,
        }

        API.graphql({
            query: deleteComment,
            variables: {input: formData}
        }).then((comment) => {
            props.fetch()
        }).catch((error) => {
            console.log(error)

            // props.fetch()
        })
    }

    return (
        <Card {...props}>
            <CardHeader title="Comments"/>
            <Divider/>
            <PerfectScrollbar>
                <Box sx={{minWidth: 200, maxHeight: 615, overflow: 'auto'}}>
                    <Box sx={{p: 2, position: "relative"}}>
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
                            variant="filled"
                            value={value}
                            onChange={(e) => {setValue(e.target.value)}}
                            sx={{width: "100%"}}
                        />
                    </Box>
                    {props.comments.sort((a, b) => { return new Date(b.createdAt) - new Date(a.createdAt) }).map((comment) => (
                        <Box sx={{p: 2, position: "relative"}}>
                            <Button
                                color="secondary"
                                variant="text"
                                size="small"
                                onClick={() => deleteCom(comment.id)}
                                sx={{position: "absolute", bottom: 16, right: 24, zIndex: 10}}
                            >
                                Delete
                            </Button>
                            <TextField
                                id="outlined-multiline-static"
                                defaultValue={comment.content}
                                label={moment(Date(comment.createdAt)).format('DD/MM/YYYY - h:mm a')}
                                multiline
                                rows={2}
                                sx={{width: "100%"}}
                                variant="filled"
                                disabled={true}
                            />
                        </Box>
                    ))}
                </Box>
            </PerfectScrollbar>
        </Card>
    );
}

export default Comments;
