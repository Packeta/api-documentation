import React, { useEffect } from "react";


const FeedbackPrompt = () => {
    const promptDismissed = localStorage.getItem('promptDismissed');

    if(promptDismissed) {
        return (
            <div>
    
            </div>
        );
    }

    return null;
}

export default FeedbackPrompt;