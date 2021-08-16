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

const Respondents = (props) => (
    <Card {...props}>
        <CardHeader title="Respondents"/>
        <Divider/>
        {
            props.answers.items.length === 0
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
                    No one has answered this evaluation yet.
                </Typography>
                :
                <PerfectScrollbar>
                    <Box sx={{minWidth: 200, maxHeight: 615, overflow: 'auto'}}>
                        <Table>
                            <TableBody>
                                {props.answers.items.map((a) => (
                                    <TableRow hover key={a.id}>
                                        <TableCell>{a.name}</TableCell>
                                        <TableCell>
                                            {moment(a.date).format('DD/MM/YYYY')}
                                        </TableCell>
                                        <TableCell>
                                            <RespondentAnswers name={a.name} date={a.date} answers={a.answers}/>
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

export default Respondents;
