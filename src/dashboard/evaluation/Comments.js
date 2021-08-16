import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Card,
    CardHeader,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
} from '@material-ui/core';
import RespondentAnswers from "./RespondentAnswers";

const Comments = (props) => (
    <Card {...props}>
        <CardHeader title="Comments"/>
        <Divider/>
        {
            true
                ?
                <Typography
                    variant='body'
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 100
                    }}
                >
                    Feature coming soon...
                </Typography>
                :
                <PerfectScrollbar>
                    <Box sx={{minWidth: 200, maxHeight: 615, overflow: 'auto'}}>
                        <Table>
                            <TableBody>
                                {props.answers.map((a) => (
                                    <TableRow hover key={a.id}>
                                        <TableCell>{a.name}</TableCell>
                                        <TableCell>
                                            {moment(a.date).format('DD/MM/YYYY')}
                                        </TableCell>
                                        <TableCell>
                                            <RespondentAnswers answer={a}/>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </PerfectScrollbar>
        }
    </Card>
);

export default Comments;
