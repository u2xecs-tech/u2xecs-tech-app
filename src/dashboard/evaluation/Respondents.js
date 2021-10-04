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

String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash % 1000;
};

const Respondents = (props) => (
    <Card {...props}>
        <CardHeader title="Respondents"/>
        <Divider/>
        {
            props.answers.length === 0
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
                                {props.answers.map((a) => (
                                    <TableRow hover key={a.id}>
                                        <TableCell>{a.name} - {a.id.hashCode()}</TableCell>
                                        <TableCell>
                                            {moment(a.createdAt).format('DD/MM/YYYY')}
                                        </TableCell>
                                        <TableCell>
                                            <RespondentAnswers name={a.name} date={a.createdAt} answers={a.answers}/>
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
