import { makeStyles } from '@material-ui/core/styles'

const alignStyles = {
    myBox: {
        display: "flex",
        justifyContent: "center",
        flexFlow: "column",
        alignItems: "center",
        height: "100vh",
        fontSize: "42px"
    }
}

const NotFound = () => {
    return (
        <section style={alignStyles.myBox}>
            <h4>404|Page Not Found</h4>
        </section>
    )
}

export default NotFound