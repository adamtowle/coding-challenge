import { Text } from "@chakra-ui/react"

interface IErrorProps {
    value: string;
}

const CustomError = ({ value }: IErrorProps) => {
    return <Text color="red.300">{value}</Text>
}

export { CustomError };