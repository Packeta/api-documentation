import React from "react"

const WarningHeader = () => {
    return (
        <div className="warning-header">
            <span>
                Our new documentation has been rolled out and is being refined to serve you better! <a href={"https://old.docs.packeta.com/"}>Previous version</a> still accessible until <strong>March 1, 2025</strong>.<br/>
                For any questions, feel free to contact our integrations team at <a href="mailto:e-commerce.support@packeta.com">e-commerce.support@packeta.com</a>.
            </span>
        </div>
)
}

export default WarningHeader;