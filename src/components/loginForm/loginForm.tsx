import * as React from 'react'
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import LockIcon from '@material-ui/icons/Lock'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

const LoginForm = () => {
    const [checkedLogin, setchecked] = React.useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setchecked(event.target.checked);
    }

    const loginStyles = makeStyles({
        myBox: {
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            flexFlow: "column",
            alignItems: "center"
        },
        h5Text: {
            fontSize: "1.5rem",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
            lineWeight: '1.334',
            letterSpacing: '0em',
            margin: "0"
        },
        inputField: {
            margin: "15px 0px",
            padding: "0px"
        },
        signBtn: {
            margin: "24px 0px 16px"
        },
        Links: {
            justifyContent: "space-between",
            display: "flex",
            flexWrap: "wrap"
        },
        secondaryText: {
            color: "rgba(0, 0, 0, 0.54)",
            textAlign: "center",
            wordBreak: "break-all",
            fontSize: "0.875rem"
        }
    })

    const classes = loginStyles()

    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    return (
        <React.Fragment>
            <section>
                <CssBaseline />
                <Container maxWidth="xs">
                    <Typography component="div">
                        <section className={classes.myBox}>
                            <LockIcon style={{color: "white", padding: "8px", borderRadius:"50%", backgroundColor: "rgb(220, 0, 78)", fontSize: "40"}}/>
                            <h1 className={classes.h5Text}>Sign in</h1>
                        </section>                        
                        <TextField className={classes.inputField} id="email" label="Email Address*" variant="outlined" fullWidth/>
                        <TextField className={classes.inputField} type="password" id="password" label="password*" variant="outlined" fullWidth/>
                        <FormControlLabel
                        control={
                        <Checkbox
                            checked={checkedLogin}
                            onChange={handleChange}
                            name="checkedLogin"
                            color="primary"
                        />
                        }
                        label="Remember me"
                        />
                        <Button className={classes.signBtn} variant="contained" color="primary" fullWidth>
                            Sign in
                        </Button>
                        <section className={classes.Links}>
                            <Link onClick={preventDefault} href="#">
                                Forget password?
                            </Link>
                            <Link onClick={preventDefault} href="#">
                                Don't have account singup?
                            </Link>
                        </section>
                        <section className={classes.myBox}>
                            <p className={classes.secondaryText}>
                                Copyright &copy;&nbsp;
                                <Link color="inherit" href="#">
                                    YourCompany.com
                                </Link>
                                &nbsp;2021
                            </p>
                        </section>
                    </Typography>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default LoginForm