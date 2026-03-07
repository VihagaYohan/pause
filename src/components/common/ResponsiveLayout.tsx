import React from 'react';

// hooks
import useResponsive from '@/src/hooks/useResponsive';

type props = {
    mobile: React.ReactNode;
    tablet: React.ReactNode
}

const ResponsiveLayout = ({ mobile, tablet }: props) => {
    const { isTablet } = useResponsive()

    return (
        <React.Fragment>
            {isTablet ? tablet : mobile}
        </React.Fragment>
    )
}

export default ResponsiveLayout
