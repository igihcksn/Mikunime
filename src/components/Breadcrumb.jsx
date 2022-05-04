import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BASE_COLOR } from "utilities/constants";

const CustomBreadCrumb = ({
    navigations = null,
}) => {
    return (
        <Breadcrumb 
            spacing='8px' separator={<ChevronRightIcon color={BASE_COLOR.WHITE} />}
            fontWeight='medium'
            fontSize='sm'
        >
            {
                navigations && navigations.map((navigation, index) => (
                    <BreadcrumbItem key={index}>
                        {
                            navigation.isLastChild && (
                                <BreadcrumbLink>{navigation.name}</BreadcrumbLink>
                            )
                        }
                        {
                            !navigation.isLastChild && (
                                <BreadcrumbLink as={Link} to={navigation.link}>{navigation.name}</BreadcrumbLink>
                            )
                        }
                    </BreadcrumbItem>
                ))
            }
        </Breadcrumb>
    )
};

export default CustomBreadCrumb;