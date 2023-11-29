import { Switch } from "@chakra-ui/react"
import { format, subMonths } from "date-fns";
import { useLocation, useNavigate } from 'react-router-dom';

const Toggle = () => {
    const location = useLocation();
    const navigate  = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const from = queryParams.get('from');

    const toggleFromQueryParam = () => {
        if (from) {
            queryParams.delete('from');
        } else {
            // Put into util function
            const sixMonthsAgo = subMonths(new Date(), 6);
            queryParams.set("from", format(sixMonthsAgo, 'yyyy-MM-dd'))
        }

        navigate({ search: queryParams.toString() });
      };

    return <Switch size="sm" fontSize="sm" onChange={toggleFromQueryParam} checked={!!!from}>Show all</Switch>
}

export default Toggle;