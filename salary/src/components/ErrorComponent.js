const ErrorComponent = ({hasError, message}) => {
    if (hasError) {
        return <div>{message}</div>
    }
    return null;
}

export default ErrorComponent;